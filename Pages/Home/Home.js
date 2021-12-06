import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Home = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signout = () => {
    props.userAuth.signOut();
  };

  useEffect(() => {
    if (props.userId === "") {
      props.navigation.navigate("Auth");
    }
  }, [props.userId]);

  return (
    <View style={styles.container}>
      <Text> Hello from Home</Text>
      <Button onPress={signout} title="Sign Out" />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
