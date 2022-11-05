import { ScrollView, Text } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { useFonts } from 'expo-font';

import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import MovieCard from './src/components/MovieCard';
import { FeaturedMovies } from './src/components/MovieCard/FeaturedMovies';
import { AddMovie } from './src/components/AddMovie';

SplashScreen.preventAutoHideAsync();

const GRAPHQL_PORT = 8000;

// Initialize Apollo Client
const client = new ApolloClient({
  uri: `http://172.20.10.10:${GRAPHQL_PORT}/graphql`,
  cache: new InMemoryCache(),
});

export default function App() {


  const [fontsLoaded] = useFonts({
    BebasNeue: require('./assets/netflixFont/BebasNeue.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ApolloProvider client={client}>
      <ScrollView onLayout={onLayoutRootView}>
        <Text>Myflix</Text>
       <FeaturedMovies/>
       <AddMovie/>
      </ScrollView>
    </ApolloProvider>
  );
}
