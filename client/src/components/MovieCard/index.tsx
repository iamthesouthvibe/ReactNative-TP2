import React, { useState, useEffect } from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';


interface  MovieCardProps {
    picture: string;
    title: string;
}
function MovieCard({picture, title}: MovieCardProps) {

    return (
        <TouchableOpacity>
            <View>
                <Image source={{ uri: picture }} style={styles.card}/>
                <Text>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    card: {
        width: 200,
        height: 400,
        borderRadius: 10
    },
})

export default MovieCard;