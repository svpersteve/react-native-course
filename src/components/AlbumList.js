import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Axios from 'axios';

class AlbumList extends Component {
  state = {
    albums: []
  };

  componentWillMount() {
    Axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }))
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <Text key={album.title}>{album.title}</Text>
    );
  }

  render() {
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
