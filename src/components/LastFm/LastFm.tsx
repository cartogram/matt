import React, {useState, useEffect} from 'react';

interface Props {
  userName?: string;
  apiKey?: string;
}

interface LastFmData {
  weeklyartistchart?: {
    artist: {
      name: string;
    }[];
  };
  error?: boolean;
}
export default function LastFm({userName, apiKey}: Props) {
  const [lastFmData, setLastFmData] = useState({});

  useEffect(() => {
    if (!userName || !apiKey) {
      throw new Error('userName and apiKey are required to get LastFm data');
    }

    fetch(
      `https://ws.audioscrobbler.com/2.0/?method=user.getweeklyartistchart&user=${userName}&api_key=${apiKey}&limit=1&nowplaying=true&format=json`,
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('error');
      })
      .then(data => setLastFmData(data))
      .catch(() =>
        setLastFmData({error: 'Whoops! Something went wrong with Last.fm'}),
      );
  }, [apiKey, userName]);

  const buildLastFmData = (lastFmData: LastFmData) => {
    const {error} = lastFmData;
    const artist = lastFmData?.weeklyartistchart?.artist;

    if (error || !artist || artist.length === 0) {
      return null;
    }

    return <>Listening to {artist[0].name}</>;
  };

  return buildLastFmData(lastFmData);
}
