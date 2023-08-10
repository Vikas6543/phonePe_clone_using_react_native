import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const primaryColor = '#6739B7';
const NewUpdate = () => {
  return (
    <View style={myStyles.container}>
      {/* phone pe logo */}
      <View>
        <Image
          source={require('../../assets/phonepe-logo-icon.jpg')}
          style={myStyles.phonepeLogo}
        />
      </View>

      {/* right ui */}
      <View>
        <Text style={myStyles.rightUiText}>Get more new updates</Text>
        <Text style={myStyles.rightUiText2}>
          We've enhanced the app, and added {'\n'} some new and exciting
          features!
        </Text>

        {/* later and download */}
        <View
          style={{
            flexDirection: 'row',
            gap: 18,
            paddingTop: 22,
            alignSelf: 'flex-end',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity>
            <Text style={myStyles.laterText}>LATER</Text>
          </TouchableOpacity>

          <TouchableOpacity style={myStyles.download}>
            <Text style={myStyles.downloadText}>Download</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const myStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    gap: 10,
    overflow: 'hidden',
    elevation: 4,
  },
  phonepeLogo: {
    width: 50,
    height: 50,
  },
  rightUiText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rightUiText2: {
    fontSize: 12,
    color: 'rgba(0,0,0,0.7)',
    paddingTop: 3,
  },
  laterText: {
    fontSize: 12,
    color: primaryColor,
    fontWeight: 'bold',
  },
  download: {
    backgroundColor: primaryColor,
    borderRadius: 16,
  },
  downloadText: {
    color: 'white',
    fontSize: 13,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
});

export default NewUpdate;
