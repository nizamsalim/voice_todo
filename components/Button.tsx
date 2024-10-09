import React from "react";
import { TouchableHighlight, Text, StyleSheet } from "react-native";

// Define the props interface
interface ButtonProps {
  title: string; // Title to display on the button
  onPress?: () => void; // Function to call on button press
}

// Button component
const CustomButton: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableHighlight
      style={styles.button}
      onPress={onPress}
      underlayColor="#0056b3" // Color for button when pressed
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableHighlight>
  );
};

// Styles for the button
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#333", // Default button color
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default CustomButton;
