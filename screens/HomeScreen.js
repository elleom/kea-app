import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../components/Card';

const DATA = [
   {
     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
     title: 'HACK THE BOX',
     img: '../assets/images/hackthebox.png'
   },
   {
     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
     title: 'FOOD CLUB',
     img: '../assets/images/food_club.jpg'
   },
   {
     id: '58694a0f-3da1-471f-bd96-145571e29d72',
     title: 'CLIMBING CLUB',
     img: '../assets/images/blocs-and-walls.png'
   },
 ];
 
 const Item = props => (
   
   <View style={styles.thumbsContainer}>
     <Text style={styles.title}>{props.title}</Text>
     <Text style={styles.title}>{props.img}- TO FIX</Text>
     <Image
				style={styles.tinyLogo}
				source={require('../assets/images/hackthebox.png')} // this needs to be fixed
            
			/>
   </View>
 );

const HomeScreen = props => {

   const renderItem = ({ item }) => (
      <View style={styles.cardContainer}>
      <Card style={styles.card}>
      <Item title={item.title} img={item.img} />
      
      </Card>
      </View>
    );

   return (
      
        <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
        
    
   );
}

const styles = StyleSheet.create({
   tinyLogo: {
		width: '100%',
		height: '100%',
      minHeight: 150,
	},
   thumbsContainer: {
      flex:1,
   },
   card: {
      marginTop: '2%',      
      width: '95%'
   },
   cardContainer: {
      alignItems: 'center',
      backgroundColor: '#c8d0d8'
      
   }
   
});

export default HomeScreen;