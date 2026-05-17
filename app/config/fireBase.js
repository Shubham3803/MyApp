// src/config/firebase.js
import auth from '@react-native-firebase/auth';

// NOTE:
// With @react-native-firebase, you still MUST add the native config files:
// - Android: `android/app/google-services.json`
// - iOS: `ios/GoogleService-Info.plist`
// After adding them, run `expo prebuild` (or build a native build) so the
// config gets picked up.

export { auth };