import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, Text, Image, ScrollView,StyleSheet} from 'react-native';
import MyStyle from '../MyStyle';

function ProductCard() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then(res => {
        setData(res.data);
      })
      .then(error => {
        console.log(error);
      });
  });
  return (
    <>
      {data.map(val => (
        <>
<View style={{backgroundColor:"#98FB98"}}>
    <View style={styles.container}>
            <View style={styles.Box}>
               
            <Image style={styles.image}  source={{ uri: val.image }}/>
            
          <View>
            <Text style={styles.price}>{val.title}</Text>
          </View>
          {/* style={{flex:1,justifyContent:'center',alignItems:'center'}} */}
          <View style={styles.TextBox}>
            <Text >{val.description}</Text>
          </View>
          <View >
            <Text style={styles.price}>{val.price}</Text>
          </View>
          </View>
          </View>
          </View>
        </>
      ))}
    </>
  );
}
const styles = StyleSheet.create(MyStyle);

export default ProductCard;
