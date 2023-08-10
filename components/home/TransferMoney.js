import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const primaryColor = '#6739B7';
const TransferMoney = () => {
  return (
    <View style={myStyles.container}>
      <Text style={myStyles.titleText}>Transfer Money</Text>

      {/* grid */}
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity style={myStyles.iconsWrapper}>
            <Icon style={myStyles.icons} name='person' size={26} />
            <Text style={myStyles.iconsText}>To Mobile{'\n'} Number</Text>
          </TouchableOpacity>

          <TouchableOpacity style={myStyles.iconsWrapper}>
            <Icon style={myStyles.icons} name='home' size={26} />
            <Text style={myStyles.iconsText}>To Bank{'\n'} UPI ID</Text>
          </TouchableOpacity>

          <TouchableOpacity style={myStyles.iconsWrapper}>
            <Icon style={myStyles.icons} name='refresh' size={26} />
            <Text style={myStyles.iconsText}>To Self{'\n'}Account</Text>
          </TouchableOpacity>

          <TouchableOpacity style={myStyles.iconsWrapper}>
            <Icon style={myStyles.icons} name='account-balance' size={26} />
            <Text style={myStyles.iconsText}>Check{'\n'}Balance</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const myStyles = StyleSheet.create({
  container: {
    width: '91%',
    alignSelf: 'center',
    marginVertical: 10,
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 10,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconsWrapper: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icons: {
    backgroundColor: primaryColor,
    color: 'white',
    alignSelf: 'center',
    borderRadius: 15,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 38,
    padding: 4,
    marginBottom: 8,
  },
  iconsText: {
    fontSize: 12,
    textAlign: 'center',
  },
});

export default TransferMoney;
