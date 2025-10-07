import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Colors from '../../../constants/Colors';


export default function Input({ 
  label, 
  value, 
  onChangeText, 
  placeholder, 
  keyboardType = 'default',
  secureTextEntry = false,
  error,
  ...props 
}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View className="mb-5">
      {/* Label */}
      {label && (
        <Text 
          className="text-sm font-semibold mb-2" 
          style={{ color: Colors.black }}
        >
          {label}
        </Text>
      )}
      
      {/* Input Container */}
      <View 
        className="flex-row items-center rounded-xl px-4 py-4"
        style={{ 
          backgroundColor: Colors.lightGray,
          borderWidth: 1.5,
          borderColor: error ? '#ef4444' : isFocused ? Colors.black : Colors.lightGray,
        }}
      >
        <TextInput
          className="flex-1 text-base"
          style={{ color: Colors.black }}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={Colors.darkGray}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry && !isPasswordVisible}
          autoCapitalize="none"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        
        {/* Password Toggle */}
        {secureTextEntry && (
          <TouchableOpacity 
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            className="ml-2"
          >
            <Text style={{ color: Colors.darkGray, fontSize: 20 }}>
              {isPasswordVisible ? '👁️' : '👁️‍🗨️'}
            </Text>
          </TouchableOpacity>
        )}
      </View>
      
      {/* Error Message */}
      {error && (
        <Text className="text-xs mt-1" style={{ color: '#ef4444' }}>
          {error}
        </Text>
      )}
    </View>
  );
}