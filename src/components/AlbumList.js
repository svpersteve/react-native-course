import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Axios from 'axios';

class AlbumList extends Component {
  constructor() {
    super(props);
    this.state = {
      albums: []
    };
  }

  componentWillMount() {
    Axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => console.log(response))
  }

  render() {
    return (
      <View>
        <Text>Album list</Text>
      </View>
    );
  }
}

export default AlbumList;
