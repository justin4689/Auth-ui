import { Link, router } from "expo-router";
import {
    KeyboardAvoidingView,
    Platform,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function ForgotPassword() {

  return (
    <SafeAreaView style={{ flex: 1 ,backgroundColor: '#fff' , padding: 20 }}>
      <KeyboardAvoidingView
     
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
          
          <Text style={styles.headerTitle}>Forgot Password</Text>
          <Text style={styles.headerSubtitle}>Enter your email address registered with your account. We'll send you a link to reset your password.</Text>
        
         
          <View style={styles.inputContainer    }>
            
            <Text>Email Address</Text>
            <View style={styles.otpContainer}>
            <TextInput
              style={styles.input}
           
              placeholderTextColor="#BABABA"
              keyboardType="numeric"
            maxLength={1}
            placeholder="-"


            />
             <TextInput
              style={styles.input}
           
              placeholderTextColor="#BABABA"
              keyboardType="numeric"
              maxLength={1}
               placeholder="-"

            />
             <TextInput
              style={styles.input}
           
              placeholderTextColor="#BABABA"
              keyboardType="numeric"
              maxLength={1}
               placeholder="-"

            />
             <TextInput
              style={styles.input}
              maxLength={1}
           
              placeholderTextColor="#BABABA"
              keyboardType="numeric"
               placeholder="-"
                />
             <TextInput
              style={styles.input}
           
              placeholderTextColor="#BABABA"
              keyboardType="numeric"
              maxLength={1}
               placeholder="-"
            />
             <TextInput
              style={styles.input}
           
              placeholderTextColor="#BABABA"
              keyboardType="numeric"
              maxLength={1}
               placeholder="-"
            />
          
          
            </View>
          </View>
         
          <View>
                     
                     
                     <Pressable
                       style={({ pressed }) => [styles.btn, pressed && { opacity: 0.5 }]}
                       onPress={() => router.push("/")}
                     >
                     
                       <Text style={styles.btnText}>Create Account</Text>
                     </Pressable>
                     
                   </View>
        
        
          <Text style={styles.text}>
            Didn't receive the code? <Link href={"/"}><Text style={styles.link}>Resend</Text></Link>
          </Text>
       
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
 

  headerTitle: {
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
    marginBottom: 20,
  },

  otpContainer: {
    
    marginTop: 24,
    flexDirection: 'row',
    gap: 12,
  },
  input: {
    width: 48,
    height: 44,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#CBD2E0",
    padding: 10,
    marginTop: 4,
    
    textAlign: "center",
    fontSize: 20,
  },
 


  forgotPasswordText: {
    fontSize: 14,
    color: "#1443C3",
    fontWeight: "medium",
  },
  

  btn: {
    backgroundColor: "#1443C3",
    padding: 12,
    borderRadius: 50,
    marginTop: 40,
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
