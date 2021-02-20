import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Colors from "../consts/colors";

const Header = (props) => {
	return (
		<View style={styles.header}>
			<Image
				style={styles.tinyLogo}
				source={require("../assets/images/KEA_logo_DK_Web.jpg")}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		width: "100%",
		height: 120,
		paddingTop: 36,
		paddingLeft: 20,
		backgroundColor: Colors.primary,
		alignItems: "flex-start",
		justifyContent: "center",
	},
	headerTitle: {
		color: "black",
		fontSize: 18,
	},
	tinyLogo: {
		width: 150,
		height: 70,
	},
});

export default Header;
