import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "flex-end",
    },
    loginButton: {
      borderColor: "white",
    },
    button: {
      marginBottom: "20%",
      backgroundColor: 'white',
      marginLeft: '15%',
      marginRight: '15%',
      borderRadius: 20,
      height: 40,
      justifyContent: 'center'
    },
  });