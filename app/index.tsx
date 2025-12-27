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
  View,
} from "react-native";

const logoUri = require("../assets/images/google.png");

export default function Index() {
  const [checked, setChecked] = useState(false);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          
          <Text style={styles.headerText}>Login</Text>
          <View style={styles.googleSignInButton}>
            
            <Image source={logoUri} style={{ width: 15, height: 15 }} />
            <Text style={styles.googleSignInButtonText}>
              Sign in with Google
            </Text>
          </View>
          <View style={styles.lineContainer}>
            
            <View style={styles.line}></View>
            <Text style={styles.lineText}>or sign in with email</Text>
            <View style={styles.line}></View>
          </View>
          <View style={styles.emailSignInContainer}>
            
            <Text>Email Adresss</Text>
            <TextInput
              style={styles.emailSignInInput}
              placeholder="Rhebehek@gmail.com"
              placeholderTextColor="#BABABA"
            />
          </View>
          <View style={styles.passwordSignInContainer}>
            
            <View style={styles.passwordTextContainer}>
              
              <Text>Password</Text>
              <Text style={styles.forgotPasswordText}>Forgot Password</Text>
            </View>
            <TextInput
              style={styles.emailSignInInput}
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
            <Text>Keep me signed in</Text>
          </View>
          <View>
            
            <Pressable
              style={({ pressed }) => [styles.btn, pressed && { opacity: 0.5 }]}
              onPress={() => console.log("Pressed")}
            >
            
              <Text style={styles.btnText}>Login</Text>
            </Pressable>
          </View>
          <Text style={styles.text}>
            Don't have an account? <Link href={"/sign-up"}><Text style={styles.link}>Sign Up</Text> </Link>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginTop: 71,
  },
  googleSignInButtonText: {
    fontSize: 14,
    color: "black",
    fontWeight: "medium",
  },

  lineContainer: {
    marginTop: 42,
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

  emailSignInContainer: {
    marginTop: 40,
  },
  emailSignInInput: {
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
    marginTop: 40,
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
    marginTop: 40,
    textAlign: "center",
  },
  link: {
    color: "#1443C3",
  },
});
