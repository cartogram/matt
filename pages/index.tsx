/* eslint-disable no-nested-ternary */
/* eslint-disable @shopify/react-hooks-strict-return */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @shopify/jsx-no-hardcoded-content */
/* eslint-disable no-process-env */
import React, {useEffect, useState, useMemo} from 'react';
import {useRouter} from 'next/router';

import {
  dates,
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

  return (
    <Content>
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
            <Footnote>
              Covered{' '}
              <A href="https://www.strava.com/athletes/59501199">
                {formatNumber(runs.distance)} km over {runs.count} runs
              </A>{' '}
              in 2022
            </Footnote>
            <Footnote>
              Listening to{' '}
              <A
                href="https://www.last.fm/user/ma8ker/listening-report"
                external
              >
                {artist}
              </A>
              .
            </Footnote>
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
  const userName = process.env.LAST_FM_USER_NAME;
  const apiKey = process.env.LAST_FM_API_KEY;
  const res = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.getweeklyartistchart&user=${userName}&api_key=${apiKey}&limit=1&nowplaying=true&format=json`,
  );

  const artist = await res.json();
  const distance = await getStravaData();

  const runs = distance.ytd_run_totals;

  return {
    props: {
      artist: artist?.weeklyartistchart?.artist?.[0]?.name,
      runs,
    },

    revalidate: 1,
  };
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
  });

  const tokenData = await tokenResponse.json();

  if (tokenData.errors?.length > 0) {
    console.log('Could not fetch Strava data');
    console.log(tokenData.message);
    console.log(tokenData.errors);
  }

  const token = tokenData.access_token;

  const statsResponse = await fetch(
    `https://www.strava.com/api/v3/athletes/${id}/stats?access_token=${token}`,
  );

  const statsData = await statsResponse.json();

  return statsData;
}

function formatNumber(num: number) {
  return (num / 1000).toFixed(0);
}

export default Home;
