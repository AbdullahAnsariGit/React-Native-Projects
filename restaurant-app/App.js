import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  View,
  Text,

  // Dimensions,
} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { TailwindProvider } from 'tailwindcss-react-native';

// const deviceWidth = Dimensions.get('window').width;
const Stack = createNativeStackNavigator();

const App = () => {
  return (<TailwindProvider> 
    <NavigationContainer>
      <Stack.Navigator>
        {/*Screens */}
<Stack.Screen name="Home" component={HomeScreen} />
       
      </Stack.Navigator>
      {/* 
      <View className="flex-1 items-center justify-center">
        <Text className="text-red-500">Task Manager</Text>
      </View>
    </TailwindProvider> */}
    </NavigationContainer></TailwindProvider>
  );
};
export default App;
