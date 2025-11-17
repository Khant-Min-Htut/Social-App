import { View, Text, Alert } from "react-native";
import React from "react";
import { useClerk } from "@clerk/clerk-expo";

export const useSignOut = () => {
  const { signOut } = useClerk();

  const handleSignOut = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      { text: "Logout", style: "destructive", onPress: () => signOut() },
    ]);
  };

  return { handleSignOut };
};
