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

const store = [
  {
    name: 'Vaishnavi Kirana store',
    timing: '9:00 AM - 9:00 PM',
    image:
      'https://www.biharsehai.in/wp-content/uploads/2023/01/Akash-Kirana-Store-Grocery-store-in-None-Patna-Bihar.jpg',
  },
  {
    name: 'Udupi Grand',
    timing: '9:00 AM - 9:00 PM',
    image:
      'https://qph.cf2.quoracdn.net/main-qimg-b31c3156a28f5b5ef8d0c4380a7ab238-lq',
  },
  {
    name: 'Sri Krishna Sagar',
    timing: '9:00 AM - 9:00 PM',
    image:
      'https://media-cdn.tripadvisor.com/media/photo-s/17/94/e0/d7/photo0jpg.jpg',
  },
  {
    name: 'Pizza Hut',
    timing: '9:00 AM - 9:00 PM',
    image:
      'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/5/i/t/p5007-15492808295c58263db5dcf.jpg?tr=tr:n-large',
  },
  {
    name: 'sri krishna bhavan',
    timing: '9:00 AM - 9:00 PM',
    image:
      'https://i0.wp.com/bangalorelocale.com/wp-content/uploads/2021/08/Udupi-Sri-Krishna-Bhavan.jpg?resize=840%2C542',
  },
  {
    name: 'Cafe Coffee Day',
    timing: '9:00 AM - 9:00 PM',
    image:
      'https://media-cdn.tripadvisor.com/media/photo-s/1a/34/18/46/cafe-coffee-day.jpg',
  },
];

const Store = () => {
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

      {/* store cards */}

      <ScrollView>
        <View style={{ width: '92%', alignSelf: 'center' }}>
          {store.map((item, index) => (
            <View
              key={index}
              style={{
                backgroundColor: 'white',
                borderRadius: 15,
                padding: 10,
                marginTop: 4,
                marginBottom: 8,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: 10,
                  marginHorizontal: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 8,
                    justifyContent: 'space-between',
                  }}
                >
                  <Image
                    source={{ uri: item.image }}
                    style={{ width: 50, height: 50, borderRadius: 10 }}
                  />
                  <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                      {item.name}
                    </Text>
                    <Text
                      style={{ fontSize: 11, color: 'grey', paddingTop: 6 }}
                    >
                      {item.timing}
                    </Text>
                  </View>
                </View>

                <View style={{ paddingTop: 1 }}>
                  <Icon name='chevron-right' size={24} />
                </View>
              </View>

              <TouchableOpacity
                style={{
                  backgroundColor: 'white',
                  padding: 8,
                  borderRadius: 16,
                  width: '100%',
                  borderWidth: 1,
                  borderColor: 'rgba(0, 0, 0, 0.1)',
                  marginTop: 10,
                }}
              >
                <View
                  style={{
                    textAlign: 'center',
                    color: primaryColor,
                    fontWeight: 'bold',
                    fontSize: 14,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                  }}
                >
                  <Icon
                    name='north-east'
                    size={18}
                    style={{ color: primaryColor, fontWeight: 'bold' }}
                  />
                  <Text
                    style={{
                      color: primaryColor,
                      fontWeight: 'bold',
                    }}
                  >
                    Pay Now
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
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

export default Store;
