import React, { useEffect, useState } from 'react';
import {View, Text, Button} from 'react-native';

function Home({navigation}) {
  const [auth,setAuth] = useState(false);
    useEffect(()=>{
        if(!auth){
            navigation.navigate('login');
        }
    },[])
    const Productss =()=>{
navigation.navigate('products');
    }
  return (
    
      <View>
        <Text>Home Screen</Text>
        <View style={{ flexDirection: 'row'}}>
          <Button title="Go to Products" color="blue" onPress={Productss} />
        </View>
      </View>
    
  );
}
export default Home;
