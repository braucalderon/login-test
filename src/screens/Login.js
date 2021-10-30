import React from "react";
import { Text, View, Button } from "react-native";
import { styles } from "./LoginStyle";
import { signInWithGoogle } from "../firebase/FirebaseHandler";

const Login = () => {
  return (
    <View style={styles.container}>
      <View>
        <Button
          title="Sign In With Google"
          color="black"
          // onPress={}
        />
      </View>
    </View>
  );
};
export default Login;
