import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useRouter } from "expo-router";

const TestScreen = () => {
  const router = useRouter();

  useEffect(() => {
    // Navigate to login after 1 second
    const timer = setTimeout(() => {
      router.push('/(auth)/login');
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-red-300">
      <Text className="text-lg font-bold text-blue-600">
        Tailwind + NativeWind working 🎉
      </Text>
      <Text className="text-sm mt-2">Redirecting to login...</Text>
    </View>
  );
};

export default TestScreen;