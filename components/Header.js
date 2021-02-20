import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Colors from '../consts/colors'

const Header = props => {
    return (
        <View style={styles.header}>
			<Text style={styles.headerTitle}>{props.title}</Text>
		</View>
    );
};

const styles = StyleSheet.create({

    header: {
        width: '100%',
        height: 100,
        paddingTop: 36,
        paddingLeft: 20,
        backgroundColor: Colors.primary,
        alignItems: 'flex-start',
        justifyContent: 'center'       
    },
    headerTitle:{
        color: 'black',
        fontSize: 18,
    }
});

export default Header;