import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const primaryColor = '#6739B7';
const RechargeBills = () => {
  return (
    <View style={myStyles.container}>
      <Text style={myStyles.titleText}>Recharge & Pay Bills</Text>

      {/* first row */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <View>
          <Icon name='system-update' size={26} style={myStyles.icon} />
          <Text style={{ fontSize: 12, textAlign: 'center' }}>
            Mobile{'\n'}Recharge
          </Text>
        </View>
        <View>
          <Icon name='settings-input-antenna' size={26} style={myStyles.icon} />
          <Text style={{ fontSize: 12, textAlign: 'center' }}>DTH</Text>
        </View>
        <View>
          <Icon name='emoji-objects' size={26} style={myStyles.icon} />
          <Text style={{ fontSize: 12, textAlign: 'center' }}>Electricity</Text>
        </View>
        <View>
          <Icon name='credit-card' size={26} style={myStyles.icon} />
          <Text style={{ fontSize: 12, textAlign: 'center' }}>
            Credit Card{'\n'}Bill
          </Text>
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
    padding: 14,
    borderRadius: 10,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 18,
  },
  icon: {
    color: primaryColor,
    fontSize: 36,
    textAlign: 'center',
  },
  iconLast: {
    color: 'white',
    backgroundColor: primaryColor,
    borderRadius: 10,
    textAlign: 'center',
    padding: 6,
    width: 40,
  },
});

export default RechargeBills;
