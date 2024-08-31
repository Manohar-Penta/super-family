import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen 
        name="index" 
        options={{
          headerShown: false,  // Hide the header for the index screen
        }} 
      />
      <Tabs.Screen 
        name="login" 
        options={{
          headerShown: false,  // Hide the header for the login screen
        }} 
      />
    </Tabs>
  );
}
