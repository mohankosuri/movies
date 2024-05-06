import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet ,ScrollView,TouchableOpacity} from 'react-native';
 





export const Top100MovieDetailsScreen = ({ route }) => {
 
 
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
        <Text className="text-red-600">Year: {movie.year}</Text>
        <Text className="text-red-600 mt-2">Type: {movie.genre}</Text>
        
      </View>
    </View>
      
      </View>

      <View className="p-4">
         <View className="mb-2"><Text className="text-lg font-semibold text-red-600">Story Summary</Text></View> 
         <Text className="text-lg">{movie.description}</Text>
         
      </View>
    </ScrollView>
  );
};

const SettingsScreen = ({navigation}) => {
  const [data, setData] = useState([]);

  {/*useEffect(() => {
    const fetchData = async () => {
      const url = 'https://imdb_api4.p.rapidapi.com/get_movies_by_cast_name';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '8d5a988d4fmsh76b78ab88329b45p14286bjsn418dbed7c5e1',
          'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setData(result); // Update the state with fetched data
        console.log(result)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);*/}


  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://imdb_api4.p.rapidapi.com/get_movies_by_cast_name';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '8d5a988d4fmsh76b78ab88329b45p14286bjsn418dbed7c5e1',
          'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
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
    <View>
      

      <View>
      <Text className="text-red-600 text-2xl font-semibold"> Top 100 Movies List</Text>
    </View>

    <ScrollView>
  <View className="flex-col">
    {data && Array.isArray(data) && data.length > 0 ? (
      data.map((item) => (
        <TouchableOpacity key={item.id} onPress={() => navigation.navigate('Top100MovieDetails', { movie: item })}>
          <View className="bg-slate-200 w-[270px] h-[280px] p-4 m-2 rounded items-center ml-[60]">
            <View className="m-2">
              <Image source={{ uri: item.image }} style={{ height: 180, width: 180 }} />
              <Text>{item.title}</Text>
              <Text className="text-red-600">Rating: {item.rating}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))
    ) : (
      <Text>No data available</Text>
    )}
  </View>
</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  movieContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    width: 100,
    height: 150,
    marginRight: 10
  },
  detailsContainer: {
    flex: 1
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  movieDescription: {
    fontSize: 16,
    marginTop: 5
  },
  movieRating: {
    fontSize: 16,
    marginTop: 5
  },
  movieGenre: {
    fontSize: 16,
    marginTop: 5
  }
});

export default SettingsScreen;
