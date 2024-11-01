import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, TextInput } from "react-native";
import React, { useState } from "react";
import { Stack, useNavigation } from "expo-router";

const AddTodoScreen = () => {
  const navigation = useNavigation(); // Initialize navigation
  const [step, setStep] = useState(1); // To manage the steps
  const [modalVisible, setModalVisible] = useState(false); // Main modal control
  const [confirmationVisible, setConfirmationVisible] = useState(false); // Confirmation modal
  const [finalConfirmationVisible, setFinalConfirmationVisible] = useState(false); // Final confirmation modal

  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleNextStep = () => {
    setConfirmationVisible(false); // Close confirmation prompt
    if (step < 3) {
      setStep(step + 1); // Go to the next step
    } else {
      setFinalConfirmationVisible(true); // Show final confirmation modal after the last step
    }
  };

  const resetForm = () => {
    setStep(1);
    setCategory("");
    setDate("");
    setDescription("");
  };

  const handleFinalConfirmation = (confirm: boolean) => {
    setFinalConfirmationVisible(false);
    if (confirm) {
      resetForm();
      setModalVisible(true); // Show main modal for a new entry
    } else {
      navigation.navigate("index"); // Navigate back to the home screen
    }
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Add Todo" }} />
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Add Todo Screen</Text>
        <Text style={styles.instructions}>Tap the button and speak your todo item...</Text>
        
        <TouchableOpacity style={styles.voiceButton} onPress={() => setModalVisible(true)}>
          <Image source={require('../assets/images/mic.png')} style={styles.micIcon} />
        </TouchableOpacity>
      </View>

      {/* Modal for step prompts */}
      <Modal transparent={true} visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.promptContainer}>
            {step === 1 && (
              <>
                <Text style={styles.promptText}>Enter the category of the task:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="e.g., Work, Personal, Shopping"
                  placeholderTextColor="#DDD"
                  value={category}
                  onChangeText={setCategory}
                />
              </>
            )}
            {step === 2 && (
              <>
                <Text style={styles.promptText}>Enter the date of the task:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="e.g., 2024-11-01"
                  placeholderTextColor="#DDD"
                  value={date}
                  onChangeText={setDate}
                />
              </>
            )}
            {step === 3 && (
              <>
                <Text style={styles.promptText}>Enter a description for the task:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="e.g., Complete the project report"
                  placeholderTextColor="#DDD"
                  value={description}
                  onChangeText={setDescription}
                />
              </>
            )}
            <TouchableOpacity
              style={styles.voiceButton}
              onPress={() => setConfirmationVisible(true)} // Open confirmation prompt
            >
              <Image source={require('../assets/images/mic.png')} style={styles.micIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Confirmation Modal */}
      <Modal transparent={true} visible={confirmationVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.confirmContainer}>
            <Text style={styles.confirmText}>Confirm the entry: "{step === 1 ? category : step === 2 ? date : description}"</Text>
            <View style={styles.confirmButtons}>
              <TouchableOpacity style={styles.yesButton} onPress={handleNextStep}>
                <Text style={styles.confirmButtonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.noButton} onPress={() => setConfirmationVisible(false)}>
                <Text style={styles.confirmButtonText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Final Confirmation Modal */}
      <Modal transparent={true} visible={finalConfirmationVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.confirmContainer}>
            <Text style={styles.confirmText}>Would you like to add another task?</Text>
            <View style={styles.confirmButtons}>
              <TouchableOpacity style={styles.yesButton} onPress={() => handleFinalConfirmation(true)}>
                <Text style={styles.confirmButtonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.noButton} onPress={() => handleFinalConfirmation(false)}>
                <Text style={styles.confirmButtonText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAD1F0',
    justifyContent: 'center',
    padding: 20,
  },
  innerContainer: {
    backgroundColor: '#5A2E91',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  instructions: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  voiceButton: {
    backgroundColor: '#6A3D99',
    borderRadius: 50,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  micIcon: {
    width: 40,
    height: 40,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  promptContainer: {
    backgroundColor: '#5A2E91',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  promptText: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#6A3D99',
    borderRadius: 5,
    padding: 10,
    color: '#FFFFFF',
    width: '100%',
    marginBottom: 20,
  },
  confirmContainer: {
    backgroundColor: '#5A2E91',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  confirmText: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  confirmButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  yesButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
    marginRight: 5,
  },
  noButton: {
    backgroundColor: '#F44336',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
    marginLeft: 5,
  },
  confirmButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default AddTodoScreen;
