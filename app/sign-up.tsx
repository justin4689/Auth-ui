import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { Link } from "expo-router";
import { useState } from "react";
import {
  Image,
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

const logoUri = require("../assets/images/google.png");

export default function SignUp() {
  const [checked, setChecked] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 ,backgroundColor: '#fff' }}>
      <KeyboardAvoidingView
     
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
          contentInsetAdjustmentBehavior="automatic"
        >
          <View style={styles.container}>
          
          <Text style={styles.headerText}>Sign Up</Text>
          <View style={styles.googleSignInButton}>
            
            <Image source={logoUri} style={{ width: 15, height: 15 }} />
            <Text style={styles.googleSignInButtonText}>
              Sign up with Google
            </Text>
          </View>
          <View style={styles.lineContainer}>
            
            <View style={styles.line}></View>
            <Text style={styles.lineText}>or sign in with email</Text>
            <View style={styles.line}></View>
          </View>
          <View style={styles.inputContainer}>
            
            <Text>Full Name</Text>
            <TextInput
              style={styles.input}
              placeholder="John Doe"
              placeholderTextColor="#BABABA"
              autoCapitalize="none"
              autoComplete="name-family"
            />
          </View>
           <View style={styles.inputContainer}>
            
            <Text>Email Address</Text>
            <TextInput
              style={styles.input}
              placeholder="Rhebehek@gmail.com"
              placeholderTextColor="#BABABA"
              autoCapitalize="none"
              autoComplete="email"
              keyboardType="email-address"
              textContentType="emailAddress"
            />
          </View>
          <View style={styles.inputContainer}>
            
          

            <Text>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="********"
              placeholderTextColor="#BABABA"
            />
          </View>
           <View style={styles.inputContainer}>
            
          

            <Text>Confirm Password</Text>
            <TextInput
              style={styles.input}
              placeholder="********"
              placeholderTextColor="#BABABA"
            />
          </View>
          <View
            style={{ flexDirection: "row", alignItems: "center", marginTop: 4 }}
          >
            
            <Ionicons name="warning-outline" size={24} color="red" />
            <Text style={styles.passworError}>
              
              Please enter the correct password
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 20,
              gap: 8,
            }}
          >
            
            <Checkbox
              value={checked}
              onValueChange={setChecked}
              color={checked ? "#59CDBE" : undefined}
            />
            <Text>By Creating an account, you agree to our Terms and Privacy Policy.</Text>
          </View>
          <View>
            
            <Pressable
              style={({ pressed }) => [styles.btn, pressed && { opacity: 0.5 }]}
              onPress={() => console.log("Pressed")}
            >
            
              <Text style={styles.btnText}>Sign Up</Text>
            </Pressable>
          </View>
          <Text style={styles.text}>
            have an account? <Link href={"/"}><Text style={styles.link}>Sign In Here</Text></Link>
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
    textAlign: "center",
    marginTop: 84,
  },

  googleSignInButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    backgroundColor: "#F4F7FF",
    padding: 12,
    marginTop: 40,
  },
  googleSignInButtonText: {
    fontSize: 14,
    color: "black",
    fontWeight: "medium",
  },

  lineContainer: {
    marginTop: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#CBD2E0",
  },

  lineText: {
    fontSize: 14,
    color: "black",
    fontWeight: "medium",
    marginHorizontal: 10,
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
  passwordSignInContainer: {
    marginTop: 24,
  },

  passwordTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  forgotPasswordText: {
    fontSize: 14,
    color: "#1443C3",
    fontWeight: "medium",
  },
  passworError: {
    color: "red",
    marginTop: 4,
  },

  btn: {
    backgroundColor: "#1443C3",
    padding: 12,
    borderRadius: 50,
    marginTop: 24,
    marginBottom: 28,
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
