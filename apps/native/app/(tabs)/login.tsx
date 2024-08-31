import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Welcome to</Text>
        <Image 
          source={require('../../assets/images/logo.png')} // Correct relative path
          style={styles.logo}
        />
      </View>

      <View style={styles.dividerContainer}>
        <Text style={styles.dividerText}>LOGIN WITH</Text>
      </View>

      <View style={styles.inputLabelContainer}>
        <Text style={styles.inputLabelText}>Phone Number or Email ID</Text>
      </View>

      <TextInput style={styles.input} />

      <TouchableOpacity style={styles.otpButton}>
        <Text style={styles.otpButtonText}>Verify with OTP</Text>
      </TouchableOpacity>

      <Text style={styles.signInText}>Sign In With</Text>
      <View style={styles.socialIconsContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="facebook" size={30} color="#4267B2" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <MaterialCommunityIcons name="google" size={30} color="#DB4437" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <MaterialCommunityIcons name="apple" size={30} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginBottom: 10, // Reduced margin to decrease space below "Welcome to" and the logo
  },
  welcomeText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 0, // Reduced space between "Welcome to" and the logo
  },
  logo: {
    width: 250, // Size of the logo
    height: 250, // Size of the logo
    resizeMode: 'contain',
    marginBottom: 10, // Reduced space between logo and "LOGIN WITH"
  },
  dividerContainer: {
    alignItems: 'center',
    marginVertical: 10, // Reduced vertical margin for less space
  },
  dividerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1C7EF5',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    fontSize: 16,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  inputLabelContainer: {
    alignItems: 'center',
    marginBottom: 10, // Reduced space between input label and input field
  },
  inputLabelText: {
    fontSize: 16,
    color: '#A9A9A9',
  },
  otpButton: {
    width: '100%',
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  otpButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signInText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  iconButton: {
    marginHorizontal: 10,
  },
});