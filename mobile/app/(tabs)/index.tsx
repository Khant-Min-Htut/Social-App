import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SignOutButton from "@/components/SignOutButton";

const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <SignOutButton />
    </View>
  );
};

export default HomeScreen;
