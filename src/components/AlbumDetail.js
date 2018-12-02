import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
  const album = props.album;

  return (
    <View>
      <Card>
        <CardSection>
          <Text>{album.title}</Text>
        </CardSection>
      </Card>
    </View>
  )
};

export default AlbumDetail;
