import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {mapDispatchToProps, mapStateToProps} from './Commons/Constants';
import {CalDistance} from './Commons/Functions';

const initLoca = {
  latitude: 37.77065,
  longitude: -122.46621,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const friendRadius = 1;

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);

function MapScreen(props) {
  const userData = props.userData;

  const [numFriend, setNumFriend] = useState(0);

  useEffect(() => {
    var newNumFriend = 0;

    for (var i = 0; i < userData.length; i++) {
      if (
        userData[i].isSelected &&
        CalDistance(
          userData[i].location.latitude,
          initLoca.latitude,
          userData[i].location.longitude,
          initLoca.longitude,
        ) < friendRadius
      ) {
        newNumFriend++;
      }
    }

    setNumFriend(newNumFriend);
  }, [userData]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Sharing location</Text>
        <Text>
          Location shared with {numFriend} trusted persons within 1 mile of you
        </Text>
      </View>

      <View>
        <MapView initialRegion={initLoca} style={styles.map}>
          {userData.map((user) =>
            user.isSelected ? (
              <Marker
                key={user.phone}
                coordinate={user.location}
                image={{uri: user.image}}
              />
            ) : null,
          )}
        </MapView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    display: 'flex',
    marginBottom: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  map: {
    display: 'flex',
    flexBasis: '85%',
    width: Dimensions.get('window').width - 30,
  },
});
