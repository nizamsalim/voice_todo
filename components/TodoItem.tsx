import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

interface Todo {
  id: number;
  title: string;
  description: string;
  reminder: Date; // Time in HH:MM format
  completed: boolean; // New property to indicate task status
}

interface TodoItemProps {
  todo: Todo;
}
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const formatDate = (d: Date) => {
  const date = `${d.getDate()} ${months[d.getMonth() - 1].slice(
    0,
    3
  )} ${d.getFullYear()}`;
  const hr = d.getHours();
  const time = `${hr <= 12 ? hr : hr - 12}:${String(d.getMinutes()).padStart(
    2,
    "0"
  )}`;
  const s = d.getHours() <= 12 ? "a.m." : "p.m.";
  return [`${time} ${s}`, date];
};

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const [time, date] = formatDate(todo.reminder);
  return (
    <View
      style={[
        styles.container,
        todo.completed ? styles.completed : styles.incomplete,
      ]}
    >
      <Text style={styles.title}>
        {todo.id}. {todo.title}
      </Text>
      <Text style={styles.description}>{todo.description}</Text>

      <View style={styles.reminderContainer}>
        {/* Calendar Icon for Date */}
        <FontAwesome name="calendar" size={24} color="red" />
        <Text style={styles.reminderText}>{date}</Text>

        {/* Clock Icon for Time */}
        <FontAwesome name="clock-o" size={24} color="red" style={styles.icon} />
        <Text style={styles.reminderText}>{time}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 2,
  },
  // Background color for incomplete tasks
  incomplete: {
    backgroundColor: "#eded98", // Light gray for incomplete tasks
  },
  // Background color for completed tasks
  completed: {
    backgroundColor: "#C8E6C9", // Light green for completed tasks
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    fontSize: 18,
    marginTop: 10,
    color: "#555",
  },
  reminderContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  reminderText: {
    fontSize: 16,
    color: "red",
    fontWeight: "bold",
    marginLeft: 10,
  },
  icon: {
    marginLeft: 20,
  },
});

export default TodoItem;
