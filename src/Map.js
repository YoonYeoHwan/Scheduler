import React, {Component} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import MapView from 'react-native-maps';
import Schedule from './Schedule.json';

export default class App extends Component {

  constructor(props) {
      super(props);

      this.state = {
          user: {
            latitude: 38.611026,
            longitude: 126.996917,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          },
          findgps : true,
      };
  }


  render() {

    var markerList = []

    for (var i=0; i < Schedule.schedules.length; i++) {
        markerList.push(
            <MapView.Marker
            coordinate={{latitude: Schedule.schedules[i].lat,
            longitude: Schedule.schedules[i].lng}}
            title={Schedule.schedules[i].name}
            description={Schedule.schedules[i].date}
        />
        )
    }

      return (
          <View style={styles.view}>
            {this.state.findgps ?
              (<MapView style={styles.mapview}
                  showsUserLocation = {true}
                  initialRegion={{
                      latitude: 38.611026,
                      longitude: 126.996917,
                      latitudeDelta: 0.005,
                      longitudeDelta: 0.005,
                  }}
                  region={this.state.user}
                  loadingEnabled={true}
                  rotateEnabled={true}
                  scrollEnabled={true}
                  pitchEnabled={true}
                  zoomEnabled={true}

              >
            {markerList}

              </MapView>) :
              (<View style={{flex:1, justifyContent:'space-between', alignItems:'center'}}>
                <Text>    </Text>
                <Text style={{fontSize:30}}>GPS가 잘 동작하지 않습니다</Text>
                <Text>    </Text>
              </View>)
            }

          </View>
      );
  }
}

const styles = StyleSheet.create({
  view: {
      flex: 1
  },
  mapview: {
      flex: 1,
  },
  tile: {
      height: 30,
      justifyContent: 'center',
      marginHorizontal: 15,
      fontSize: 40,
      borderBottomColor: '#000',
      borderBottomWidth: 1
  },
  map: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
  }
});