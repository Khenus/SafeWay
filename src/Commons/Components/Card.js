import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Checkbox} from 'react-native-material-ui';

export default React.memo(Card);

function Card(props) {
  const user = props.user;
  const idx = props.idx;
  const onCheckChange = props.onCheckChange;

  return (
    <View style={styles.card}>
      <View style={styles.leftCard}>
        <Image style={styles.image} source={{uri: user.image}} />

        <View>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.phone}>{user.phone}</Text>
        </View>
      </View>

      <View style={styles.checkbox}>
        <Checkbox
          checked={user.isSelected}
          onCheck={(newVal) => onCheckChange(idx, newVal)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  checkbox: {
    width: 50,
    height: 50,
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderWidth: 1,
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 20,
  },
  leftCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  phone: {
    color: 'grey',
    fontStyle: 'italic',
  },
});
