import { View, Image, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';
import LoginCard from '../components/LoginCard';
import { authScreenStyles, BG_IMAGE_URI } from '../styles/authStyles';

const SignUp = () => {

  const isWeb = Platform.OS === 'web' || typeof window !== 'undefined';
  const Root = isWeb ? View : KeyboardAvoidingView;

  return (
    <Root
      style={{ flex: 1 }}
      {...(isWeb
        ? {}
        : {
            behavior: Platform.OS === 'ios' ? 'padding' : 'height',
          })}
    >
      <View style={authScreenStyles.container}>
        <Image
          source={{ uri: BG_IMAGE_URI }}
          style={authScreenStyles.backgroundImage}
          resizeMode="cover"
        />
        <BlurView intensity={40} tint="dark" style={authScreenStyles.blurOverlay} />
        <SafeAreaView style={authScreenStyles.safeArea} edges={['top', 'bottom']}>
          <ScrollView
            contentContainerStyle={authScreenStyles.scrollContent}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            keyboardDismissMode="on-drag"
          >
            <LoginCard mode="signup" />
          </ScrollView>
        </SafeAreaView>
      </View>
    </Root>
  );
};

export default SignUp;
