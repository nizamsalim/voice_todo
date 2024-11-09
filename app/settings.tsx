import { View, Text, StyleSheet, Switch } from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";

const Settings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const toggleNotifications = () => setNotificationsEnabled(previousState => !previousState);
  const toggleDarkMode = () => setDarkMode(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Settings" }} />
      <Text style={styles.title}>Settings</Text>
      
      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Enable Notifications</Text>
        <Switch 
          value={notificationsEnabled} 
          onValueChange={toggleNotifications} 
        />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Dark Mode</Text>
        <Switch 
          value={darkMode} 
          onValueChange={toggleDarkMode} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#EAD1F0', // Match main background color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#5A2E91', // Title color to match theme
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  settingLabel: {
    fontSize: 18,
    color: '#5A2E91', // Label color to match theme
  },
});

export default Settings;
