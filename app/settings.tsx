import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const settings = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Settings" }} />
      <Text>settings</Text>
    </View>
  );
};

export default settings;
