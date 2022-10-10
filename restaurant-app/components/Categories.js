import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import CategoriesCard from './CategoriesCard';

function Categories() {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}>
      {/* CategoriesCard      ---------------------------*/}
      <CategoriesCard imgUrl="https://links.papareact.com/wru" title="Pizza"/>
      <CategoriesCard imgUrl="https://links.papareact.com/wru" title="Fajita"/>
      <CategoriesCard imgUrl="https://links.papareact.com/wru" title="Biryani"/>
      <CategoriesCard imgUrl="https://links.papareact.com/wru" title="Pasta"/>
      <CategoriesCard imgUrl="https://links.papareact.com/wru" title="Haleem"/>
      <CategoriesCard imgUrl="https://links.papareact.com/wru" title="Haleem"/>

      
      <Text>Abdu</Text>
      

      
    </ScrollView>
  );
}

export default Categories;
