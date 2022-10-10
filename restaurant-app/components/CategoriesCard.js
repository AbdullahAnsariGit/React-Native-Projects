import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

function CategoriesCard({imgUrl, title}) {
  return (
    <TouchableOpacity className="relative mr-2 bg-blue-200 rounded-md ">
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-20 w-20 rounded "
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold bg-black rounded-md ">
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default CategoriesCard;
