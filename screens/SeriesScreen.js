 import { View,Text, ScrollView,Image} from 'react-native'
 import React,{useEffect, useState} from 'react'
 import { Avatar, Button, Card,} from 'react-native-paper';

 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

 



 export const StockDetailView = ({ route }) => {
 
 
  const { movie } = route.params;
 
  return (
    <ScrollView>
      <View className="mt-[50px] flex items-center ">
      <Text className="text-4xl font-semibold">{movie.title}</Text>
      </View>
      <View className="flex justify-center items-center mt-[20px]">
      
      <View className=" w-[300px] h-[400px] p-4 m-2 rounded">
      <View className="m-2">
        <Image source={{ uri: movie.image }} style={{ height: 280, width: 230 }} />   
        <View className="mt-3 mb-2"><Text>{movie.title}</Text></View>
        <Text className="text-red-600 mt-2 text-lg">category: {movie.category}</Text>
        <Text className="text-red-600 mt-2 text-lg">Price: {movie.price}</Text>
        <View className="flex flex-row justify-end space-x-6 mt-4">
        <Text className="text-lg">Add To Cart</Text>
        <MaterialCommunityIcons name='plus' size={30}/>
        <MaterialCommunityIcons name='minus' size={30}/>
        </View>
         
      </View>
    </View>
      
      </View>

      <View className="p-4 mt-20">
         <View className="mb-2"><Text className="text-lg font-semibold text-red-600">Product Detail</Text></View> 
         <Text className="text-lg">{movie.description}</Text>
         
      </View>
    </ScrollView>
  );
};
 
 const SeriesScreen = ({navigation}) => {

  const[data,setData]=useState([])

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://fakestoreapi.com/products';
       
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result); // Update the state with fetched data
        console.log(result)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

   return (
    <View className="bg-black"> 
    <ScrollView>
     {data.map((item)=>(<View className="m-2 p-4">
      <Card key={item.id} className="">
       
      <Card.Content>
        <Text variant="titleLarge" className="text-red-600">{item.title}</Text>
        
      </Card.Content>
      <Card.Cover source={{ uri: item.image }} className="mt-4"/>
      <Text variant="bodyMedium" className="mt-3 ml-6 text-lg">Price:{item.price}</Text>

       <View className="m-4"><Button onPress={() => navigation.navigate('StockDetailView', { movie: item })}>Buynow</Button></View>
    </Card>
      </View>))}
    </ScrollView>
    </View>
   )
 }
 
 export default SeriesScreen