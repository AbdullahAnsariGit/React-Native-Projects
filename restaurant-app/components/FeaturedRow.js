import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  ViewBase,
} from 'react-native';

function FeaturedRow({title, description, id}) {
  return (
    <>
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}>
      <View className=" bg-blue-200 ">
        <Text>{title}</Text>
        <Text>{description}</Text>
        <Text>{id}</Text>
      </View>
      </ScrollView>
    </>

  );
}
export default FeaturedRow;
