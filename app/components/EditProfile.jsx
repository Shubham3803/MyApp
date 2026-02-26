import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View, Dimensions } from 'react-native';

// Get device width
const { width: SCREEN_WIDTH } = Dimensions.get('window');

const EditProfile = ({ title, onPress, iconName }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View
        style={{
          width: SCREEN_WIDTH - 32, // full width minus horizontal padding
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          paddingVertical: 14,
          paddingHorizontal: 16,
          borderRadius: 12,
          backgroundColor: '#F1F5F9',
          marginBottom: 12,
          alignSelf: 'center', // center horizontally
        }}
      >
        {iconName && (
          <View
            style={{
              width: 38,
              height: 38,
              borderRadius: 19,
              backgroundColor: '#E2E8F0',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 18,
            }}
          >
            <Ionicons name={iconName} size={20} color="#1E293B" />
          </View>
        )}

        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: '#1E293B',
          }}
        >
          {title}
        </Text>

        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <Ionicons name="chevron-forward" size={20} color="#1E293B" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default EditProfile;
