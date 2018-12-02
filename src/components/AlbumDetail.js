import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Card from './Card';

const AlbumDetail = (props) => {
  const album = props.album;

  return (
    <View>
      <Card>
        <Text>{album.title}</Text>
        <Text>{album.artist}</Text>
      </Card>
    </View>
  )
};

export default AlbumDetail;
