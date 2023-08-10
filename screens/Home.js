import { View, StyleSheet, Image, ScrollView } from 'react-native';
import React from 'react';
import NewUpdate from '../components/home/NewUpdate';
import TransferMoney from '../components/home/TransferMoney';
import WalletRewards from '../components/home/WalletRewards';
import RechargeBills from '../components/home/RechargeBills';

const Home = () => {
  return (
    <View style={myStyles.container}>
      <ScrollView>
        {/* get more new updates */}
        <NewUpdate />

        {/* banner advertise */}
        <View>
          <Image
            source={require('../assets/flipkart-banner-image.jpg')}
            style={myStyles.bannerImage}
          />
        </View>

        {/* transfer money */}
        <TransferMoney />

        {/* wallet and rewards */}
        <WalletRewards />

        {/* recharge & pay bills */}
        <RechargeBills />
      </ScrollView>
    </View>
  );
};

const myStyles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(243, 234, 235)',
    height: '81%',
  },
  bannerImage: {
    width: '91%',
    height: 140,
    resizeMode: 'cover',
    alignSelf: 'center',
    borderRadius: 10,
  },
});

export default Home;
