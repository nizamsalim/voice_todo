import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
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
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "ElderEase",
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: "bold",
            color: '#FFFFFF', // Header title color
          },
          headerStyle: {
            backgroundColor: '#5A2E91', // Header background color
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
      <View style={styles.innerContainer}>
        <EButton title="Add Todo" onPress={() => router.push("/add-todo")} />
        <FlatList
          style={{ marginTop: 20 }}
          data={todos}
          renderItem={({ item }) => <TodoItem todo={item} />}
          keyExtractor={(item) => String(item.id)}
        />
      </View>

      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => router.push("/add-todo")}
      >
        <Image
          source={require("../assets/images/mic.png")}
          style={styles.micIcon}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAD1F0', // Main background color
  },
  innerContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    marginBottom: 100,
    backgroundColor: '#5A2E91', // Inner container background
    borderRadius: 10,
    elevation: 5,
    paddingBottom: 20,
  },
  floatingButton: {
    position: "absolute",
    bottom: 90,
    right: 40,
    height: 70,
    width: 70,
    borderRadius: 100,
    backgroundColor: '#6A3D99', // Floating button background color
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  micIcon: {
    width: 30,
    height: 30,
    tintColor: "#edebe6",
  },
});

export default HomeScreen;
