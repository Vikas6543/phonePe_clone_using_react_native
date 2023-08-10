import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const names = [
  {
    name: 'Vikas',
    shortCutName: 'V',
    color: '#ee832c',
  },
  {
    name: 'Nisha',
    shortCutName: 'N',
    color: '#e031f0',
  },
  {
    name: 'Aadhi',
    shortCutName: 'A',
    color: '#3671f0',
  },
  {
    name: 'Pallavi',
    shortCutName: 'P',
    color: '#36f0b2',
  },
  {
    name: 'Krishna',
    shortCutName: 'K',
    color: '#36f045',
  },
];

const QrCodeScanner = () => {
  const navigation = useNavigation();

  return (
    <View style={myStyles.container}>
      {/* header */}
      <View style={myStyles.header}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name='arrow-back' size={26} style={myStyles.headerLeftIcon} />
          </TouchableOpacity>
          <Text style={myStyles.headerText}>Scan & Pay</Text>
        </View>
        <TouchableOpacity>
          <Icon name='help' size={26} style={myStyles.headerRightText} />
        </TouchableOpacity>
      </View>

      {/* camera */}
      <View style={myStyles.camera}>
        {/* icons */}
        <View style={myStyles.cameraIcons}>
          <View style={{ flexDirection: 'row', gap: 22 }}>
            <TouchableOpacity>
              <Icon
                name='flash-on'
                size={26}
                style={myStyles.headerRightText}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Icon
                name='photo-library'
                size={26}
                style={myStyles.headerRightText}
              />
            </TouchableOpacity>
          </View>

          <View style={myStyles.contacts}>
            <View>
              <FlatList
                data={names}
                numColumns={5}
                renderItem={({ item, index }) => {
                  return (
                    <View key={index}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('Payment')}
                        style={[
                          myStyles.contactsImage,
                          {
                            backgroundColor: item.color,
                          },
                        ]}
                      >
                        <Text style={myStyles.contactText}>
                          {item.shortCutName}
                        </Text>
                      </TouchableOpacity>

                      <Text style={myStyles.contactText2}>{item.name}</Text>
                    </View>
                  );
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const myStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#8d5be2',
    justifyContent: 'space-between',
    padding: 12,
  },
  headerLeftIcon: {
    color: 'white',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerRightText: {
    color: 'white',
  },
  camera: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.8)',
    position: 'relative',
  },
  cameraIcons: {
    position: 'absolute',
    bottom: 100,
    left: '40%',
  },
  contacts: {
    marginTop: 50,
    marginLeft: -130,
  },
  contactsImage: {
    marginRight: 13,
    width: 55,
    height: 55,
    borderRadius: 50,
    justifyContent: 'center',
  },
  contactText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  contactText2: {
    color: 'white',
    paddingTop: 10,
    fontSize: 13,
    paddingLeft: 6,
    fontWeight: 'bold',
  },
});

export default QrCodeScanner;
