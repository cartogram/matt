/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable no-process-env */
import React, {useEffect} from 'react';
import {useRouter} from 'next/router';

import {dates, twoLiner, title, links, tags, posts} from '../content';
import {
  Text,
  Heading,
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

function Home({artist, runs}: Props) {
  const formatedDates = dates.map(date => formatDate(date));
  const router = useRouter();
  const tagItems = tags.map(tag => ({
    title: tag,
    query: `tag=${tag}`,
    onClick: () => router.push(`/?tag=${tag}`),
    active: router.query.tag === tag,
  }));

  useEffect(() => {
    // The counter changed!
    console.log('The tags changed!', router.query.tag);
  }, [router.query.tag]);

  return (
    <Content>
      <Row offSet soft>
        <Block offSet>
          <Heading>
            <A href="/">
              {title || process.env.NEXT_PUBLIC_NAME || 'Matt Seccafien'}
            </A>
          </Heading>
        </Block>
      </Row>
      <Row>
        <Block>
          <List items={posts} />
        </Block>
        <Block stick offSet>
          <Row>
            <List small items={tagItems} />
            <List small items={formatedDates} />
          </Row>
        </Block>
      </Row>
      <Row offSet>
        <Block offSet>
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
