import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Alert, Image, TouchableOpacity, Text, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Linking } from 'react-native';


const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    // Dummy login logic for demonstration
    if (username === 'admin' && password === 'password') {
      Alert.alert('Login Successful', 'Welcome, admin!');
      navigation.navigate('HomePage');
    } else {
      Alert.alert('Login Failed', 'Invalid username or password. Please try again.');
    }
  };
const handleSignup = () => {
    navigation.navigate('Registration');
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPasswordScreen');
  };

 const contactSupport = () => {
  const supportEmail = 'support@example.com';
  const mailtoLink = `mailto:${supportEmail}`;

  Linking.openURL(mailtoLink).catch((error) => {
    console.error('Failed to open email client:', error);
    Alert.alert('Error', 'Failed to open email client. Please try again later.');
  });
};


  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('./assets/onecare-logo.png')} // Replace with your image path
          resizeMode="contain"
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Text style={styles.forgotLink} onPress={handleForgotPassword}>
          Forgot Password ?
      </Text>
       <TouchableOpacity
        style={
          !username || !password || loading
            ? [styles.buttonCss, styles.disabledCss]
            : styles.buttonCss
        }
        onPress={handleLogin}>
        <Ionicons name="ios-log-in-outline" size={20} color="white" />
        {loading ? (
          <ActivityIndicator color="white" style={{ marginLeft: 5 }} />
        ) : (
          <Text style={styles.buttonTextCss}>Submit</Text>
        )}
      </TouchableOpacity>
     
 <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
        <Text style={styles.signupLink}>Sign Up</Text>
      </TouchableOpacity>
    
      
      <TouchableOpacity style={styles.buttonCss} onPress={contactSupport}>
        <Ionicons name="ios-mail-outline" size={20} color="white" />
        <Text style={styles.buttonTextCss}>Contact Support</Text>
      </TouchableOpacity>
   

    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
    aspectRatio: 4 / 3,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  signupLink: {
    marginTop: 20,
    color: 'blue',
    textDecorationLine: 'underline',
  },
   buttonCss: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0954a5',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonTextCss: {
    color: 'white',
    marginLeft: 5,
    fontSize: 14,
  },
  disabledCss: {
    backgroundColor: '#dedede',
  },
    subHeader: {
    color: '#abaeb8',
    fontSize: 16,
    marginBottom: 20,
  },
  messgaeView: {
    flexDirection: 'row',
    marginTop: 20,
  },

  link: {
    color: '#0954a5',
    marginBottom: 10,
    marginStart: 5,
    fontWeight: '700',
    borderBottomWidth: 1,
  },
  forgotLink: {
    color: '#0f67c3',
    fontWeight: '700',
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 17,
    alignSelf: 'flex-end',
  },
  forgotSubHeader: {
    padding: 5,
  },
  widthContainer: {
    width: '100%',
  },
});

export default Login;
