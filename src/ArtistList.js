import React, { Component } from 'react';
import {
  StyleSheet,
  ListView,
  TouchableOpacity,
} from 'react-native';

import ArtistBox from './ArtistBox';
import {Actions} from 'react-native-router-flux';

export default class ArtistList  extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(props.artists)
    };
  }

  componentWillReceiveProps(newProps){
    if(newProps.artists !== this.props.artists){
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(newProps.artists)
      })
    }
  }

  handlePress(artist){
    Actions.artistDetail({'artist': artist});
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(artist) => {
            return (
              <TouchableOpacity
                onPress={() => this.handlePress(artist)}>
                <ArtistBox artist={artist}/>
              </TouchableOpacity>
            )
          }
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
}); 
