  
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ChatRoom = props => {
    const navigation = useNavigation(); 

   return (
    <View>
        <Text>{props.chatroom.name}</Text>
        <Button title="Navigate somewhere" 
            onPress={() => navigation.navigate("nameOfNavigationRouteEgMenu")} />
    </View>
   );
}

const styles = StyleSheet.create({
   
});

export default ChatRoom;