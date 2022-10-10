import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, Text,Image, ScrollView} from 'react-native';
import ProductCard from './components/productCard';


function Products() {


  return (
    
    <>
    <ScrollView><ProductCard/></ScrollView>
    
     
    </>
  );
}
export default Products;
