import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AppRegistry, Image, TouchableOpacity, TextInput} from 'react-native';
import MapView, { Marker } from 'react-native-maps';


type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      name: '일정',
      spot: '장소',
      date: '날짜',
      region: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 1,
        longitudeDelta: 1,
      },
      markers: [],
    };
  }

  getInitialState() {
    return {
      region: {
        latitude: 37.610436,
        longitude: 126.995948,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      },
    };
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  render() {
    return (
      <View style={styles.container}>

      <View style={{backgroundColor: '#ff7675', height: 70, justifyContent: 'center', alignItems: 'center', marginBottom: 5}}>
        <Text style={{fontSize: 25}}>일정을 입력해주세요</Text>
      </View>

      <View style={styles.inputText}>
        <TextInput
          multiline = {false}
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
        />
     </View>


      <View style={styles.inputText}>
        <TextInput
          multiline = {false}
          onChangeText={(spot) => this.setState({spot})}
          value={this.state.spot}
        />
     </View>

      <View style={styles.inputText}>
        <TextInput
          multiline = {false}
          onChangeText={(date) => this.setState({date})}
          value={this.state.date}
        />
     </View>

    <MapView style={{height: 230, width: 300, marginBottom: 10, marginTop: 5, justifyContent: 'center', alignSelf: 'center',}}
      region={this.state.region}
      onRegionChange={this.onRegionChange}
      loadingEnabled={true}
      rotateEnabled={true}
      scrollEnabled={true}
      pitchEnabled={true}
      zoomEnabled={true}      
      >

      {this.state.markers.map(marker => (
        <Marker
          coordinate={marker.latlng}
          title={marker.title}
          description={marker.description}
        />
      ))}

    </MapView>


     <View style={{flexDirection: "row", justifyContent: 'center', alignItems: 'center'}}>
        
        <TouchableOpacity>
          <View style={styles.button}>
            <Text style={{fontSize: 20, color: 'black'}}>저장</Text>
          </View>
        </TouchableOpacity>

        <View style={{width: 100}}></View>

        <TouchableOpacity>
          <View style={styles.button}>
            <Text style={{fontSize: 20, color: 'black'}}>취소</Text>
          </View>
        </TouchableOpacity>

     </View>
      


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: "#ffffff",
  },

  inputText: {
    borderColor: '#E6E6E6',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
    height: 40,
    width: 300,
    justifyContent: 'center',
    alignSelf: 'center'
  },

  button: {
    height: 40,
    width: 100,
    backgroundColor: '#ff7675',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
