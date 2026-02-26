import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert
} from 'react-native';
import { BlurView } from 'expo-blur';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const ICON_COLOR = 'rgba(255,255,255,0.9)';
const PLACEHOLDER_COLOR = 'rgba(255,255,255,0.7)';

const LoginCard = ({ mode = 'signup' }) => {
  const router = useRouter();
  const isSignUp = mode === 'signup';

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  const handleSubmit = () => {
  // 1️⃣ Check all fields filled
  if (!fullName || !email || !password || !confirmPassword) {
    Alert.alert('Error', 'Please fill all fields');
  } 
  // 2️⃣ Simple email validation
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    Alert.alert('Error', 'Please enter a valid email');
  } 
  // 3️⃣ Password match check
  else if (password !== confirmPassword) {
    Alert.alert('Error', 'Passwords do not match');
  } 
  // 4️⃣ If everything is correct → navigate
  else {
    router.replace('Navigation/BottomNavbar');
  }
};

  const handleSwitchMode = () => {
    if (isSignUp) {
      router.replace('Screens/login');
    } else {
      router.replace('Screens/signUp');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboardView}
    >
      <BlurView intensity={70} tint="dark" style={styles.card}>
        <Text style={styles.title}>
          {isSignUp ? 'Create Account' : 'Welcome Back'}
        </Text>
        <Text style={styles.subtitle}>
          {isSignUp ? 'Sign up to get started' : 'Log in to continue'}
        </Text>

        {isSignUp && (
          <View style={styles.inputContainer}>
            <Ionicons name="person-outline" size={20} color={ICON_COLOR} style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              placeholderTextColor={PLACEHOLDER_COLOR}
              value={fullName}
              onChangeText={setFullName}
              autoCapitalize="words"
            />
          </View>
        )}

        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={20} color={ICON_COLOR} style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={PLACEHOLDER_COLOR}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color={ICON_COLOR} style={styles.inputIcon} />
          <TextInput
            style={[styles.input, styles.inputWithIcon]}
            placeholder="Password"
            placeholderTextColor={PLACEHOLDER_COLOR}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.eyeButton}
          >
            <Ionicons
              name={showPassword ? 'eye-off-outline' : 'eye-outline'}
              size={20}
              color={ICON_COLOR}
            />
          </TouchableOpacity>
        </View>

        {isSignUp && (
          <View style={styles.inputContainer}>
            <Ionicons
              name="lock-closed-outline"
             size={20} color={ICON_COLOR} style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor={PLACEHOLDER_COLOR}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!showConfirmPassword}
            />
             <TouchableOpacity
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            style={styles.eyeButton}
          >
            <Ionicons
              name={showConfirmPassword ? 'eye-off-outline' : 'eye-outline'}
              size={20}
              color={ICON_COLOR}
            />
          </TouchableOpacity>
          </View>
        )}

        <TouchableOpacity onPress={handleSubmit} activeOpacity={0.8} style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>
            {isSignUp ? 'Sign Up' : 'Log In'}
          </Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
          </Text>
          <TouchableOpacity onPress={handleSwitchMode} activeOpacity={0.7}>
            <Text style={styles.footerLink}>{isSignUp ? 'Log In' : 'Sign Up'}</Text>
          </TouchableOpacity>
        </View>
      </BlurView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboardView: {
    width: '100%',
    maxWidth: 400,
  },
  card: {
    overflow: 'hidden',
    borderRadius: 20,
    padding: 24,
    width: '100%',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 15,
    color: 'rgba(255,255,255,0.9)',
    textAlign: 'center',
    marginBottom: 24,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    marginBottom: 12,
  },
  inputIcon: {
    marginLeft: 14,
  },
  input: {
    flex: 1,
    paddingVertical: 14,
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#FFFFFF',
  },
  inputWithIcon: {
    paddingRight: 44,
  },
  eyeButton: {
    position: 'absolute',
    right: 10,
    padding: 4,
  },
  primaryButton: {
    backgroundColor: '#2563EB',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 20,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  footerText: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)',
  },
  footerLink: {
    fontSize: 14,
    color: '#2563EB',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});

export default LoginCard;
