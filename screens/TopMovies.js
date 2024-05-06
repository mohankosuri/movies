import React,{useContext} from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import Animated, { FadeIn, FadeInUp, FadeOut, FadeInDown } from 'react-native-reanimated';
 
import { NavigationContainer } from '@react-navigation/native';
import Data from '../assets/MOCK_DATA (2).json';
import { TouchableOpacity } from 'react-native';

import { MoviesContext } from '../context/moviescontext';
 
 



export const MovieDetailsScreen = ({ route }) => {
    const mymovies = useContext(MoviesContext)
   
    const { movie } = route.params;
   
    return (
      <ScrollView>
        <View className="mt-[50px] flex items-center ">
        <Animated.Text className="text-4xl font-semibold" entering={FadeInUp.duration(3000)}>{movie.Moviename}</Animated.Text>
        </View>
        <View className="flex justify-center items-center mt-[20px]">
        
        <View className="bg-slate-200 w-[300px] h-[400px] p-4 m-2 rounded">
        <View className="m-2">
          <Image source={{ uri: movie.image }} style={{ height: 280, width: 230 }} />
          <View className="mt-3 mb-2"><Text>{movie.Moviename}</Text></View>
          <Text className="text-red-600">Year: {movie.year}</Text>
          
        </View>
      </View>
        
        </View>

        <View className="p-4">
           <View className="mb-2"><Text className="text-lg font-semibold text-red-600">Story Summary</Text></View> 
           <Text>{movie.Story}</Text>
        </View>
      </ScrollView>
    );
  };
 

const TopMovies = ({ navigation }) => {
    const mymovies = useContext(MoviesContext)
     
    
    return (
       <View>
      <View>
        <Text className="text-red-600 text-2xl font-semibold">Latest Movies</Text>
      </View>

      <ScrollView>
        <View className="flex-col">
          {mymovies &&
            mymovies.map((item) => (
              <TouchableOpacity key={item.id} onPress={() => navigation.navigate('MovieDetails', { movie: item })}>
                <View className="bg-slate-200 w-[270px] h-[280px] p-4 m-2 rounded items-center ml-[60]">
                  <View className="m-2">
                    <Image source={{ uri: item.image }} style={{ height: 180, width: 180 }} />
                    <Text>{item.Moviename}</Text>
                    <Text className="text-red-600">Year: {item.year}</Text>

                    
                   
                  </View>
                </View>
              </TouchableOpacity>
            ))}
        </View>
      </ScrollView>
    </View>
    );
};

export default TopMovies;
