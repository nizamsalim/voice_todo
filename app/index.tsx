import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  Touchable,
} from "react-native";
import { useRouter, Stack } from "expo-router";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import EButton from "@/components/Button";
import { todos as initialTodos } from "@/constants/Todo";
import TodoItem from "@/components/TodoItem";
import { FontAwesome } from "@expo/vector-icons";

const HomeScreen = () => {
  const [todos, setTodos] = useState(initialTodos);
  const router = useRouter();

  useEffect(() => {
    // Sort todos when the component mounts
    const sortedTodos = [...todos].sort(
      (a, b) => Number(a.completed) - Number(b.completed)
    );
    setTodos(sortedTodos);
  }, []);

  return (
    <View>
      <Stack.Screen
        options={{
          title: "ElderEase",
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: "bold",
          },
          headerRight: () => {
            return (
              <TouchableOpacity onPress={() => router.push("/settings")}>
                <FontAwesome name="cog" size={24} color="grey" />
              </TouchableOpacity>
            );
          },
        }}
      />
      <View
        style={{ paddingHorizontal: 20, paddingTop: 20, marginBottom: 100 }}
      >
        <EButton title="Add Todo" onPress={() => router.push("/add-todo")} />
        <FlatList
          style={{ marginTop: 20 }}
          data={todos}
          renderItem={({ item }) => <TodoItem todo={item} />}
          keyExtractor={(item) => String(item.id)}
        />
      </View>

      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 90,
          right: 40,
          height: 70,
          width: 70,
          borderRadius: 100,
          backgroundColor: "blue",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => router.push("/add-todo")}
      >
        <Image
          source={require("../assets/images/mic.png")}
          style={{
            width: 30,
            height: 30,
            overlayColor: "#fff",
            tintColor: "#edebe6",
          }} // Move width and height inside the style prop
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
