import { FlatList, Text, View } from "react-native";
import MovieCard from "..";
import { useGetAllMovies } from "../../../../hooks/useGetAllMovies";

export function FeaturedMovies() {

    const { data, loading } = useGetAllMovies();

    if (loading) {
        return (
            <View>
               <Text>Loading....</Text>
            </View>
        )
    }

    return (
        <FlatList horizontal data={data.getAllMovies.slice(-10).reverse()} renderItem={({item}) => (
            <MovieCard picture={item.picture} title={item.title}/>
        )}/>
    )
}