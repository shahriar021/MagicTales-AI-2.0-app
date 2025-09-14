import React, { useState } from 'react';
import { View, Modal, TextInput, Button, Text, TouchableOpacity } from 'react-native';

interface CustomPromptProps {
  visible: boolean; 
  onClose: () => void; 
}

export default function CustomPrompt({ visible, onClose }: CustomPromptProps) {
  // State to capture the user input
  const [inputText, setInputText] = useState('');

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose} // Close modal on back press (Android)
    >
      <View className="flex-1 justify-center items-center bg-black/50 bg-opacity-50">
        <View className="bg-white p-6 w-4/5 rounded-lg">
          <Text className="text-lg font-semibold mb-4">Enter Custom Prompt:</Text>

          {/* Input Field */}
          <TextInput
            value={inputText}
            onChangeText={(text) => setInputText(text)}
            placeholder="Type your prompt"
            className="border border-gray-300 p-5 rounded-lg mb-4"
          />

          {/* Submit button */}
           <TouchableOpacity className='bg-[#0EA5E9] items-center justify-center p-4 mt-2 mb-2 rounded-lg' onPress={onClose}><Text className='text-white'>Submiy</Text></TouchableOpacity>

          {/* Close button */}
          <TouchableOpacity className='bg-[#0EA5E9] items-center justify-center p-4 rounded-lg' onPress={onClose}><Text className='text-white'>Close</Text></TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
