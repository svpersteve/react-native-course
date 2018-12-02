import React, { Component } from 'react';
import { View, Text } from 'react-native';

const AlbumDetail = (props) => {
  const album = props.album;

  return (
    <Text>
      {album.title}
    </Text>
  )
};

export default AlbumDetail;
