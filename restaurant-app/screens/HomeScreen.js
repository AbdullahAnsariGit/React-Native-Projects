import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';

import {
  ChevronDownIcon,
  UserIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
import {SearchBar} from 'react-native-screens';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

function HomeScreen() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView>
      {/*  Header              ----------------------------------------*/}
      <View className="bg-white pt-5">
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image
            source={{
              uri: 'https://links.papareact.com/wru',
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />

          <View className="flex-1">
            <Text className="font-thin text-grey-400 text-xs">
              Deliver Now!
            </Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>
          <UserIcon size={35} color="#00CCBB" />
        </View>

        {/* Search              ---------------------------------------- */}
        <View className="flex-row items-center space-x-2 pb-2 px-4">
          <View className="flex-row flex-1 items-center space-x-2 p-0.5 bg-gray-300 rounded">
            <MagnifyingGlassIcon color="gray" size={20} />
            <TextInput
              placeholder="Restaurent and Cuisines"
              keyboardType="default"
            />
          </View>
          <AdjustmentsVerticalIcon color="#00CCBB" />
        </View>
      </View>
      {/* Categories              ---------------------------------------- */}
      <Categories />

      {/* Featured Rows            ---------------------------------------- */}

      <FeaturedRow
        id="123"
        title="Featured"
        description="Paid Placement For Our Partner"
      />
      {/* tasty discount */}
      <FeaturedRow
        id="1234"
        title="Featured"
        description="Paid Placement For Our Partner"
      />
      {/* Offer Near You */}
      <FeaturedRow
        id="12345"
        title="Featured"
        description="Paid Placement For Our Partner"
      />
    </SafeAreaView>
  );
}

export default HomeScreen;
