import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const AddTodoScreen = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Add Todo" }} />
      <Text>Add Todo Screen</Text>
    </View>
  );
};

export default AddTodoScreen;
