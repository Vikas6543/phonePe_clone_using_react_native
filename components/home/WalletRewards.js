import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const WalletRewards = () => {
  return (
    <View style={myStyles.container}>
      {/* wallet, reward & refer */}
      <View style={myStyles.iconWrapper}>
        <View style={myStyles.icons}>
          <Icon name='account-balance-wallet' size={30} color={'white'} />
          <Text style={myStyles.iconsText}>PhonePe Wallet</Text>
        </View>
        <View style={myStyles.icons}>
          <Icon name='redeem' size={30} color={'white'} />
          <Text style={myStyles.iconsText}>Rewards</Text>
          <Text style={myStyles.rewardNotification}>2</Text>
        </View>
        <View style={myStyles.icons}>
          <Icon name='campaign' size={30} color={'white'} />
          <Text style={myStyles.iconsText}>Refer & Earn{'\n'}₹100</Text>
        </View>
      </View>
    </View>
  );
};

const myStyles = StyleSheet.create({
  container: {
    width: '89%',
    alignSelf: 'center',
  },
  iconWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    alignSelf: 'center',
  },
  icons: {
    backgroundColor: 'rgb(26, 137, 211)',
    padding: 6,
    borderRadius: 5,
    alignItems: 'center',
    width: '32%',
    height: 88,
  },
  iconsText: {
    color: 'rgb(239, 239, 240)',
    fontSize: 13,
    marginTop: 8,
    textAlign: 'center',
  },
  rewardNotification: {
    backgroundColor: 'green',
    color: 'white',
    borderRadius: 36,
    position: 'absolute',
    top: 2,
    right: 28,
    height: 20,
    width: 20,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default WalletRewards;
