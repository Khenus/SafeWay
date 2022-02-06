import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, TextInput, ScrollView} from 'react-native';
import Card from './Commons/Components/Card';
import {Data} from './Data';
import {mapDispatchToProps, mapStateToProps} from './Commons/Constants';

export default connect(mapStateToProps, mapDispatchToProps)(ContactScreen);

function ContactScreen(props) {
  const userData = props.userData;
  const setUserData = props.setUserData;

  const [searchVal, setSearchVal] = useState('');
  const [searchRes, setSearchRes] = useState(Data);

  useEffect(() => {
    const newRes = [];

    for (var i = 0; i < Data.length; i++) {
      if (
        Data[i].name.toLowerCase().includes(searchVal) ||
        Data[i].phone.toLowerCase().includes(searchVal)
      ) {
        console.log(Data[i].name);
        newRes.push(Data[i]);
      }
    }

    setSearchRes(newRes);
  }, [searchVal]);

  function updateCheck(idx, newVal) {
    const newUserData = [...userData];
    newUserData[idx].isSelected = newVal;
    setUserData(newUserData);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Search Friends...'
        onChangeText={setSearchVal}
        value={searchVal}
      />

      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          {searchRes.map((item, idx) => (
            <Card
              key={item.phone}
              user={item}
              idx={idx}
              onCheckChange={updateCheck}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  // Add your own styles here
  container: {
    display: 'flex',
    // flexGrow: 1,
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  input: {
    height: 40,
    width: '100%',
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  scroll: {
    display: 'flex',
    alignSelf: 'stretch',
    flexGrow: 1,
    marginBottom: '10%',
  },
});
