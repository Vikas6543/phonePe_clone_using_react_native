import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RupeeIcon from 'react-native-vector-icons/FontAwesome';
import Home from './Home';
import Store from './Store';
import Insurance from './Insurance';
import Wealth from './Wealth';
import History from './History';
import { useNavigation } from '@react-navigation/native';

const primaryColor = '#6739B7';
const EntryFile = () => {
  const [selectedBottomTab, setSelectedBottomTab] = useState(0);

  const navigation = useNavigation();

  return (
    <View style={myStyles.container}>
      <StatusBar backgroundColor={primaryColor} />

      <View style={myStyles.header}>
        {/* left side header */}
        <View style={myStyles.leftHeader}>
          {/* profile pic */}
          <View>
            <Image
              style={myStyles.leftHeaderProfileImage}
              source={require('../assets/profie.jpg')}
            />
            <Image
              style={myStyles.leftHeaderCountryImage}
              source={require('../assets/indianFlag.webp')}
            />
          </View>

          {/* address */}
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={myStyles.addressText}>Add Address</Text>
              <Icon name='keyboard-arrow-down' size={20} color={'white'} />
            </View>
            <Text style={myStyles.addressText2}>MG Road, Bengaluru</Text>
          </View>
        </View>

        {/* right side header */}
        <View style={myStyles.rightHeader}>
          <TouchableOpacity
            onPress={() => navigation.navigate('QrCodeScanner')}
          >
            <Icon name='qr-code-scanner' size={26} color={'white'} />
          </TouchableOpacity>
          <View>
            <Icon name='notifications' size={26} color={'white'} />
          </View>
          <View>
            <Icon name='help' size={26} color={'white'} />
          </View>
        </View>
      </View>

      {selectedBottomTab === 0 ? (
        <Home />
      ) : selectedBottomTab === 1 ? (
        <Store />
      ) : selectedBottomTab === 2 ? (
        <Insurance />
      ) : selectedBottomTab === 3 ? (
        <Wealth />
      ) : (
        <History />
      )}
      <View style={myStyles.bottomNav}>
        {/* home tab */}
        <TouchableOpacity
          style={myStyles.bottomTabs}
          onPress={() => setSelectedBottomTab(0)}
        >
          <Icon
            name='home'
            style={myStyles.bottomTabsIcon}
            backgroundColor={
              selectedBottomTab === 0 ? primaryColor : 'rgba(0,0,0,0.2)'
            }
            color={selectedBottomTab === 0 ? 'white' : 'rgba(0,0,0,0.7)'}
          />
          <Text
            style={{
              color: selectedBottomTab === 0 ? primaryColor : 'rgba(0,0,0,0.7)',
              fontSize: 12,
              fontWeight: 'bold',
            }}
          >
            Home
          </Text>
        </TouchableOpacity>

        {/* shopping tab */}
        <TouchableOpacity
          style={myStyles.bottomTabs}
          onPress={() => setSelectedBottomTab(1)}
        >
          <Icon
            name='local-mall'
            style={myStyles.bottomTabsIcon}
            backgroundColor={
              selectedBottomTab === 1 ? primaryColor : 'rgba(0,0,0,0.2)'
            }
            color={selectedBottomTab === 1 ? 'white' : 'rgba(0,0,0,0.7)'}
          />
          <Text
            style={{
              color: selectedBottomTab === 1 ? primaryColor : 'rgba(0,0,0,0.7)',
              fontSize: 12,
              fontWeight: 'bold',
            }}
          >
            Store
          </Text>
        </TouchableOpacity>

        {/* verfied user tab */}
        <TouchableOpacity
          style={myStyles.bottomTabs}
          onPress={() => setSelectedBottomTab(2)}
        >
          <Icon
            name='verified-user'
            style={myStyles.bottomTabsIcon}
            backgroundColor={
              selectedBottomTab === 2 ? primaryColor : 'rgba(0,0,0,0.2)'
            }
            color={selectedBottomTab === 2 ? 'white' : 'rgba(0,0,0,0.7)'}
          />
          <Text
            style={{
              color: selectedBottomTab === 2 ? primaryColor : 'rgba(0,0,0,0.7)',
              fontSize: 12,
              fontWeight: 'bold',
            }}
          >
            Insurance
          </Text>
        </TouchableOpacity>

        {/* money tab */}
        <TouchableOpacity
          style={myStyles.bottomTabs}
          onPress={() => setSelectedBottomTab(3)}
        >
          <RupeeIcon
            name='rupee'
            style={myStyles.bottomRupeeIcon}
            backgroundColor={
              selectedBottomTab === 3 ? primaryColor : 'rgba(0,0,0,0.2)'
            }
            color={selectedBottomTab === 3 ? 'white' : 'rgba(0,0,0,0.7)'}
          />
          <Text
            style={{
              color: selectedBottomTab === 3 ? primaryColor : 'rgba(0,0,0,0.7)',
              fontSize: 12,
              fontWeight: 'bold',
            }}
          >
            Wealth
          </Text>
        </TouchableOpacity>

        {/* multiple-stop tab */}
        <TouchableOpacity
          style={myStyles.bottomTabs}
          onPress={() => setSelectedBottomTab(4)}
        >
          <Icon
            name='multiple-stop'
            style={myStyles.bottomTabsIcon}
            backgroundColor={
              selectedBottomTab === 4 ? primaryColor : 'rgba(0,0,0,0.2)'
            }
            color={selectedBottomTab === 4 ? 'white' : 'rgba(0,0,0,0.7)'}
          />
          <Text
            style={{
              color: selectedBottomTab === 4 ? primaryColor : 'rgba(0,0,0,0.7)',
              fontSize: 12,
              fontWeight: 'bold',
            }}
          >
            History
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const myStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    backgroundColor: primaryColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
    paddingVertical: 10,
  },
  leftHeader: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
  },
  rightHeader: {
    flexDirection: 'row',
    gap: 14,
  },
  leftHeaderProfileImage: {
    width: 42,
    height: 42,
    borderRadius: 50,
  },
  leftHeaderCountryImage: {
    width: 16,
    height: 16,
    position: 'absolute',
    right: -8,
    bottom: 0,
    borderRadius: 4,
  },
  addressText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  addressText2: {
    color: 'rgb(204, 202, 202)',
    fontSize: 12,
  },
  bottomNav: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    paddingVertical: 8,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  bottomTabs: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomTabsIcon: {
    fontSize: 28,
    borderRadius: 50,
    padding: 3,
    marginBottom: 5,
  },
  bottomRupeeIcon: {
    fontSize: 26,
    borderRadius: 50,
    marginBottom: 5,
    width: 33,
    height: 33,
    padding: 5,
    textAlign: 'center',
  },
});

export default EntryFile;
