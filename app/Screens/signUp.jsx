import { View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import { BlurView } from 'expo-blur';
import LoginCard from '../components/LoginCard';
import { authScreenStyles, BG_IMAGE_URI } from '../styles/authStyles';

const SignUp = () => {
  return (
    <View style={authScreenStyles.container}>
      <Image source={{ uri: BG_IMAGE_URI }} style={authScreenStyles.backgroundImage} resizeMode="cover" />
      <BlurView intensity={40} tint="dark" style={authScreenStyles.blurOverlay} />
      <SafeAreaView style={authScreenStyles.safeArea} edges={['top', 'bottom']}>
        <ScrollView
          contentContainerStyle={authScreenStyles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <LoginCard mode="signup" />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default SignUp;
