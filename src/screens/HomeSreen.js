import React, { useState } from "react";
import { Text, View, Modal, ImageBackground, Button } from "react-native";
import { styles } from "./HomeScreenStyle";

const image = {
  uri: "https://raw.githubusercontent.com/braucalderon/jsonFiles/main/learnabi/Splash.png",
};

const HomeScreen = ({ navigation }) => {
  const [modalVisible, , setModalVisible] = useState(false);

  return (
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.button}>
          <Button
            title="Login"
            color="black"
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </ImageBackground>
  );
};

export default HomeScreen;
