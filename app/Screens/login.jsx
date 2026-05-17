import { View, Image, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';
import LoginCard from '../components/LoginCard';
import { authScreenStyles, BG_IMAGE_URI } from '../styles/authStyles';

const Login = () => {
  // react-native-web can crash on KeyboardAvoidingView for some setups,
  // so we disable it on web only.
  // `react-native-web` environments can still have odd `Platform.OS` values,
  // so also detect `window`.
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
            <LoginCard mode="login" />
          </ScrollView>
        </SafeAreaView>
      </View>
    </Root>
  );
};

export default Login;
