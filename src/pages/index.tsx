/* eslint-disable @shopify/react-hooks-strict-return */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @shopify/jsx-no-hardcoded-content */
/* eslint-disable no-process-env */
import * as THREE from 'three';
import React, {useEffect, useState, useRef, useMemo} from 'react';
import {useRouter} from 'next/router';
import {Canvas, useFrame} from '@react-three/fiber';

import {
  formatedDates,
  twoLiner,
  title,
  links,
  tags,
  Tag,
  posts as _posts,
} from '../content';
import {
  Text,
  List,
  A,
  Footnote,
  Block,
  Row,
  Content,
  TextPadding,
} from '../components';
import {formatDate} from '../utlities/formatDate';

function Box(props: JSX.IntrinsicElements['mesh']) {
  const mesh = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01));
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={event => setActive(!active)}
      onPointerOver={event => setHover(true)}
      onPointerOut={event => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
}

interface Props {
  artist: string;
  runs: {
    distance: number;
    count: number;
  };
}

function useFilter(
  values: string[],
  key: string,
): [any[], string | null, (val: string | null) => void] {
  const router = useRouter();
  const [explicit, setExplicit] = useState<string | null>(null);

  const items = useMemo(() => {
    return values.map(val => ({
      title: val,
      query: `${key}=${val}`,
      onClick: () => {
        const active = Object.values(router.query).some(key => key === val);

        router.push(
          {
            pathname: '/',
            query: {
              date: router.query.date,
              tag: router.query.tag,
              [key]: active ? '' : val,
            },
          },
          undefined,
          {
            shallow: true,
          },
        );
      },
      active:
        explicit === null
          ? (Array.isArray(router.query[key])
              ? router.query[key]![0]
              : router.query[key]) === val
          : explicit === val,
      onMouseOut: () => setExplicit(null),
      onMouseOver: () => setExplicit && setExplicit(val),
    }));
  }, [router, values, key, explicit, setExplicit]);

  return [items, explicit, setExplicit];
}

function Home({artist, runs}: Props) {
  const [posts, setPosts] = useState(_posts);
  const [focused, setFocused] = useState<string | null>(null);
  const [tagItems, explicitTag, setExplicitTag] = useFilter(tags, 'tag');
  const [dateItems, explicitDate, setExplicitDate] = useFilter(
    formatedDates,
    'date',
  );
  const router = useRouter();

  useEffect(() => {
    setPosts(
      _posts.map(post => {
        const normalizedTagQuery = Array.isArray(router.query.tag)
          ? router.query.tag[0]
          : router.query.tag;
        const tagActive = normalizedTagQuery
          ? post.tags?.includes(normalizedTagQuery as Tag)
          : false;

        const normalizedDateQuery = Array.isArray(router.query.date)
          ? router.query.date[0]
          : router.query.date;
        const dateActive = normalizedDateQuery
          ? formatDate(post.date) === normalizedDateQuery
          : false;

        function isActive() {
          if (focused) {
            if (focused === post.slug) {
              return true;
            }
            return false;
          }

          if (tagActive || dateActive) {
            return true;
          }

          if (
            (explicitTag && post.tags?.includes(explicitTag as Tag)) ||
            (explicitDate && formatDate(post.date) === explicitDate)
          ) {
            return true;
          }

          return false;
        }

        return {
          ...post,
          active: isActive(),
          onMouseOver: () => {
            setFocused(post.slug);
            setExplicitDate(formatDate(post.date));
            setExplicitTag(post?.tags![0]);
          },
          onMouseOut: () => {
            setFocused(null);
            setExplicitDate(null);
            setExplicitTag(null);
          },
        };
      }),
    );
  }, [
    focused,
    router.query.tag,
    router.query.date,
    explicitDate,
    explicitTag,
    dateItems,
    setExplicitDate,
    setExplicitTag,
  ]);

  const artistMarkup = artist ? (
    <Footnote>
      Listening to{' '}
      <A href="https://www.last.fm/user/ma8ker/listening-report" external>
        {artist}
      </A>
      .
    </Footnote>
  ) : null;

  const runsMarkup = runs ? (
    <Footnote>
      Covered{' '}
      <A href="https://www.strava.com/athletes/59501199">
        {formatNumber(runs.distance)} km over {runs.count} runs
      </A>{' '}
      in 2022
    </Footnote>
  ) : null;

  return (
    <Content>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>

      <Row>
        <Block>
          <Text>
            <A href="/">
              {title || process.env.NEXT_PUBLIC_NAME || 'Matt Seccafien'}
            </A>
          </Text>
        </Block>
      </Row>
      <Row>
        <Block>
          <TextPadding>
            <Text dangerouslySetInnerHTML={{__html: twoLiner}} />
          </TextPadding>
          <TextPadding>
            <Footnote>
              Currently working on{' '}
              <A external href="https://github.com/shopify/hydrogen">
                Hydrogen
              </A>{' '}
              at Shopify,
            </Footnote>
            <Footnote>
              {' '}
              <A external href="https://pawzzles.cat">
                Pawzzles
              </A>{' '}
              and{' '}
              <A external href="https://fondfolio.com">
                Fondfolio
              </A>{' '}
              with{' '}
              <A external href="https://www.fimcd.ca/">
                Fiona
              </A>
              .
            </Footnote>
          </TextPadding>
          <TextPadding>
            {runsMarkup}
            {artistMarkup}
          </TextPadding>
          <List inline small items={links} />
        </Block>
      </Row>
      <Row offSet>
        <Block>
          <List items={posts} />
        </Block>
        <Block stick>
          <Row offSet>
            <Block auto>
              <List small items={tagItems} />
            </Block>
            <Block auto>
              <List small right items={dateItems} />
            </Block>
          </Row>
        </Block>
      </Row>
    </Content>
  );
}

export async function getStaticProps() {
  const artist = await getLastFMData();
  const distance = await getStravaData();

  return {
    props: {
      artist: artist ?? '',
      runs: distance ?? '',
    },

    revalidate: 1,
  };
}

async function getLastFMData() {
  const userName = process.env.LAST_FM_USER_NAME;
  const apiKey = process.env.LAST_FM_API_KEY;
  const artist = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.getweeklyartistchart&user=${userName}&api_key=${apiKey}&limit=1&nowplaying=true&format=json`,
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('error');
    })
    .then(data => data.weeklyartistchart?.artist?.[0]?.name)
    .catch(error => {
      console.log(error);
    });

  return artist;
}

async function getStravaData() {
  const id = process.env.STRAVA_USER_ID;
  const headers = {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
  };

  const body = JSON.stringify({
    client_id: process.env.STRAVA_CLIENT_ID,
    client_secret: process.env.STRAVA_SECRET,
    refresh_token: process.env.STRAVA_REFRESH_TOKEN,
    grant_type: 'refresh_token',
  });

  const tokenResponse = await fetch('https://www.strava.com/oauth/token', {
    method: 'post',
    headers,
    body,
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('error');
    })
    .then(data => data.access_token)
    .catch(error => {
      console.log(error);
    });

  if (!tokenResponse) {
    return;
  }

  const statsResponse = await fetch(
    `https://www.strava.com/api/v3/athletes/${id}/stats?access_token=${tokenResponse}`,
  );

  const statsData = await statsResponse.json();

  return statsData;
}

function formatNumber(num: number) {
  return (num / 1000).toFixed(0);
}

export default Home;
