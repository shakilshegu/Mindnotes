// components/ui/Button.jsx
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Colors from '../../../constants/Colors';


export default function Button({ 
  title, 
  onPress, 
  variant = 'primary', 
  disabled = false,
  style,
  textStyle 
}) {
  const isPrimary = variant === 'primary';
  
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      className={`py-4 px-6 rounded-lg items-center justify-center ${
        disabled ? 'opacity-50' : ''
      }`}
      style={[
        {
          backgroundColor: isPrimary ? Colors.yellow : Colors.black,
        },
        style,
      ]}
    >
      <Text
        className="text-base font-semibold uppercase"
        style={[
          {
            color: isPrimary ? Colors.black : Colors.yellow,
          },
          textStyle,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}