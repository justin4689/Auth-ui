import { Link, router } from "expo-router";
import {
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function ForgotPassword() {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
          contentInsetAdjustmentBehavior="automatic"
        >
          <View style={styles.container}>
            <Text style={styles.headerText}>Forgot Password</Text>
            <Text style={styles.headerSubtitle}>
              Enter your email address registered with your account. We'll send you a link to reset your password.
            </Text>

            <View style={styles.inputContainer}>
              <Text>Email Address</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                placeholderTextColor="#BABABA"
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
                textContentType="emailAddress"
              />
            </View>

            <View>
              <Pressable
                style={({ pressed }) => [styles.btn, pressed && { opacity: 0.5 }]}
                onPress={() => router.push("/verify-email")}
              >
                <Text style={styles.btnText}>Submit</Text>
              </Pressable>
            </View>

            <Text style={styles.text}>
              Remembered password? <Link href={"/"}><Text style={styles.link}>Login to your account</Text></Link>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    paddingBottom: 80,
  },
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 29,
  },

  headerText: {
    fontSize: 24,
    color: "black",
    fontWeight: "bold",
    marginTop: 84,
  },
  headerSubtitle: { 
    fontSize: 14,
    color: "#77707F",
    marginTop: 8,
    lineHeight: 20,
  },

 
  

  inputContainer: {
    marginTop: 24,
  },
  input: {
    width: "100%",
    height: 40,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#CBD2E0",
    padding: 10,
    marginTop: 4,
  },

  btn: {
    backgroundColor: "#1443C3",
    padding: 12,
    borderRadius: 50,
    marginTop: 24,
    marginBottom: 12,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 50,
  },

  btnText: {
    color: "white",
    fontWeight: "medium",
  },
  text: {
    fontSize: 14,
    color: "black",
    fontWeight: "medium",
    marginTop: 24,
    textAlign: "center",
  },
  link: {
    color: "#1443C3",
  },
});
