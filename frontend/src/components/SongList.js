import React from 'react';
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'

const songsQuery = gql`
  {
    songs {
      name
      id
      artist {
        name
      }
    }
  }
`;

const SongList = ({data}) => {
  const {songs} = data;
  console.log(songs);
  const listOfSongs = songs && songs.map(song => <li key={song.id}>{song.name} by {song.artist.name}</li>);
  return (
    <ul>
      {songs ? listOfSongs : "Loading..." }
    </ul>
  )
}

export default graphql(songsQuery)(SongList);