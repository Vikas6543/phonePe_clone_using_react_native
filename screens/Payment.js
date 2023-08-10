import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';

const primaryColor = '#6739B7';
const Payment = () => {
  const [amount, setAmount] = React.useState('');
  const [modalOpen, setModalOpen] = React.useState(false);

  const navigation = useNavigation();

  return (
    <View style={myStyles.container}>
      {/* header */}
      <View style={myStyles.header}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name='arrow-back' size={26} style={myStyles.headerLeftIcon} />
          </TouchableOpacity>
          <Text style={myStyles.headerText}>Pay</Text>
        </View>
        <TouchableOpacity>
          <Icon name='help' size={26} style={myStyles.headerRightText} />
        </TouchableOpacity>
      </View>

      {/* amount input */}
      <View style={myStyles.amountInput}>
        {/* name of the user */}
        <View style={myStyles.name}>
          <Text style={myStyles.letterV}>V</Text>
          <View>
            <Text style={myStyles.fullName}>Vikas Shambhu</Text>
            <Text style={myStyles.number}>8880889484</Text>
          </View>
          <Icon name='chevron-right' size={34} style={myStyles.chevronIcon} />
        </View>

        {/* text inputs */}
        <View>
          {/* amount */}
          <View style={myStyles.amountWrapper}>
            <Image source={require('../assets/rupee.png')} />
            <TextInput
              style={myStyles.amountTextInput}
              placeholder='Enter amount'
              keyboardType='numeric'
              value={amount}
              onChangeText={(text) => setAmount(text)}
            />
          </View>

          {/* add a message */}
          <View style={myStyles.messageWrapper}>
            <TextInput
              style={myStyles.messageTextInput}
              placeholder='Add a message (optional)'
            />
          </View>
        </View>
      </View>

      {/* proceed to pay */}
      <TouchableOpacity
        style={{
          width: '100%',
          backgroundColor: primaryColor,
          position: 'absolute',
          bottom: 0,
          padding: 16,
          alignItems: 'center',
        }}
        onPress={() => {
          if (!amount) {
            alert('Please enter the amount');
            return;
          }
          setModalOpen(true);
        }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 14 }}>
          PROCEED TO PAY
        </Text>
      </TouchableOpacity>

      {/* modal */}
      <Modal style={myStyles.modal} isVisible={modalOpen} backdropOpacity={0.2}>
        <View style={myStyles.modalView}>
          {/* modal header */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: 20,
              marginTop: 22,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
              Total Payable
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={require('../assets/rupee.png')}
                style={{ width: 28, height: 28 }}
              />
              <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{amount}</Text>
              <TouchableOpacity
                onPress={() => setModalOpen(false)}
                style={{ paddingLeft: 16, fontSize: 14 }}
              >
                <Text>X</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* bank deatils */}
          <View
            style={{
              flexDirection: 'row',
              borderTopWidth: 0.5,
              borderBottomWidth: 0.5,
              marginVertical: 20,
              justifyContent: 'space-between',
              paddingVertical: 15,
              paddingHorizontal: 20,
              borderTopColor: 'gray',
              borderBottomColor: 'gray',
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              {/* bank name & icon */}
              <View
                style={{
                  flexDirection: 'row',
                  gap: 10,
                }}
              >
                <Image
                  source={require('../assets/sbi-logo.png')}
                  style={{ width: 30, height: 30 }}
                />
                <View>
                  <Text style={{ fontWeight: 'bold' }}>
                    State Bank of India - 6543
                  </Text>
                  <Text style={{ color: 'gray', fontSize: 12 }}>
                    Bank Account
                  </Text>
                </View>
              </View>

              {/* check icon */}
              <View>
                <Icon
                  name='check-circle'
                  size={19}
                  style={{
                    backgroundColor: 'green',
                    color: 'white',
                    borderRadius: 50,
                  }}
                />
              </View>
            </View>
          </View>

          {/* add upi account */}
          <View style={{ alignItems: 'center' }}>
            <Text
              style={{ color: primaryColor, fontSize: 13, fontWeight: 'bold' }}
            >
              Add UPI Account
            </Text>
          </View>

          {/* pay */}
          <TouchableOpacity
            style={{
              backgroundColor: primaryColor,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
              justifyContent: 'center',
              padding: 12,
              borderRadius: 25,
              marginHorizontal: 20,
              marginTop: 20,
            }}
            onPress={() => {
              setModalOpen(false);
              navigation.navigate('Main');
            }}
          >
            <Text
              style={{
                color: 'white',
                fontSize: 15,
                fontWeight: 'bold',
              }}
            >
              PAY
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Image
                source={require('../assets/rupee-white-color.png')}
                style={{
                  width: 11,
                  height: 18,
                }}
              />
              <Text
                style={{
                  color: 'white',
                  fontSize: 15,
                  fontWeight: 'bold',
                }}
              >
                {amount}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const myStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0e6f1',
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
  amountInput: {
    width: '92%',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    marginVertical: 10,
    elevation: 5,
    padding: 12,
  },
  name: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  letterV: {
    backgroundColor: '#f0b30c',
    color: 'white',
    fontWeight: 'bold',
    borderRadius: 50,
    width: 40,
    height: 40,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  fullName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  chevronIcon: {
    position: 'absolute',
    right: 0,
  },
  amountWrapper: {
    flexDirection: 'row',
    borderWidth: 2,
    marginVertical: 15,
    borderRadius: 8,
    borderColor: primaryColor,
    padding: 10,
    alignItems: 'center',
  },
  amountTextInput: {
    marginLeft: 2,
    fontSize: 19,
    fontWeight: 'bold',
    width: '100%',
  },
  messageWrapper: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
  messageTextInput: {
    marginLeft: 2,
    fontSize: 14,
    width: '100%',
  },
  number: {
    color: 'grey',
    fontSize: 12,
  },
  modal: {
    margin: 0,
  },
  modalView: {
    backgroundColor: 'white',
    height: '40%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default Payment;
