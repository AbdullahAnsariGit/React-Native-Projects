import React, { useState } from 'react';
import {View, Text, TextInput, Button} from 'react-native';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const loginUser=() => {

    }
  return (
    <>
      <View>
        <View>
          <Text style={{justifyContent:'center',textAlign:'center'}}>Login</Text>
        </View>
        <View>
          <TextInput placeholder="Email"
           onChangeText={(e) => setEmail(e)}
            />
        </View>
        <View>
          <TextInput placeholder="Password"
           onChangeText={(e) => setPassword(e)}
            />
        </View>
        <View>
            <Button title='login' onPress={loginUser} color='orange'/>
        </View>
      </View>
    </>
  );
}

export default Login;
