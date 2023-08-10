import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Image } from 'react-native';

const primaryColor = '#6739B7';

const payedData = [
  {
    name: 'Vikas',
    amount: 100,
    timing: '10 Minutes ago',
  },
  {
    name: 'Nisha',
    amount: 2000,
    timing: '1 Hour ago',
  },
  {
    name: 'Mahadev',
    amount: '10,000',
    timing: '2 Days ago',
  },
  {
    name: 'Pallavi',
    amount: 50,
    timing: '4 Hours ago',
  },
  {
    name: 'Virat',
    amount: 1000,
    timing: '1 Day ago',
  },
  {
    name: 'Rahul',
    amount: 500,
    timing: '1 Week ago',
  },
];

const History = () => {
  return (
    <View style={myStyles.container}>
      {/* search input */}
      <View style={myStyles.searchInputWrapper}>
        <Icon name='search' size={26} style={myStyles.searchIcon} />
        <TextInput
          style={myStyles.searchInput}
          placeholder='Search by store name'
        />
      </View>

      {/* payed user list */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: 'white',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          width: '92%',
          alignSelf: 'center',
        }}
      >
        {payedData.map((item, index) => (
          <View
            style={{
              backgroundColor: 'white',
              borderBottomWidth: 0.4,
              borderBottomColor: 'gray',
              paddingBottom: 10,
              borderRadius: 15,
            }}
            key={index}
          >
            {/* name & amount */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 20,
                marginVertical: 10,
              }}
            >
              {/* name */}
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      backgroundColor: primaryColor,
                      borderRadius: 10,
                      padding: 3,
                      marginTop: -6,
                    }}
                  >
                    <Icon
                      name='north-east'
                      size={26}
                      style={{ color: 'white' }}
                    />
                  </Text>
                </View>
                <View style={{ marginLeft: 10 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                    }}
                  >
                    Paid to
                  </Text>
                  <Text style={{ fontSize: 15, color: 'gray' }}>
                    {item.name}
                  </Text>
                </View>
              </View>

              {/* amount */}
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  alignSelf: 'flex-start',
                  marginRight: -8,
                }}
              >
                <Image
                  source={require('../assets/rupee.png')}
                  style={{
                    width: 17,
                    height: 17,
                  }}
                />
                <Text style={{ fontWeight: 'bold', marginLeft: -4 }}>
                  {item.amount}{' '}
                </Text>
              </View>
            </View>

            {/* timing & debited from */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginRight: 10,
              }}
            >
              <Text
                style={{
                  marginLeft: 20,
                  fontSize: 11,
                  color: 'gray',
                  marginBottom: 10,
                }}
              >
                {item.timing}
              </Text>

              {/* debited from */}
              <Text
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <View>
                  <Text
                    style={{
                      fontSize: 12,
                      color: 'gray',
                    }}
                  >
                    Debited from{' '}
                  </Text>
                </View>

                <View>
                  <Image
                    source={require('../assets/sbi-logo.png')}
                    style={{
                      width: 20,
                      height: 20,
                    }}
                  />
                </View>
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const myStyles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(243, 234, 235)',
    height: '81%',
  },
  searchInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 15,
    backgroundColor: 'white',
    padding: 5,
    overflow: 'hidden',
    gap: 6,
  },
  searchInput: {
    fontSize: 16,
  },
});

export default History;
