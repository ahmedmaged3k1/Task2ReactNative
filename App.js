import React from "react";
import { SafeAreaView, StyleSheet, TextInput , Button, View , Alert} from "react-native";

const UselessTextInput = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={newEmail => setEmail(newEmail)}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={newPassword => setPassword(newPassword)}
        
        placeholder="Password"
        keyboardType="visible-password"
      />
      <View  
      style={
        {
          backgroundColor: "#f194ff",
          borderBottomColor: '#000000',
        }
      }
      >
      <Button
      title="Submit"
      onPress={showAlert}
      color="#fff"
      >

      </Button>
      </View>
    
    </SafeAreaView>
  );
  function  showAlert()   {
    Alert.alert(
       'email is '+email+ ' and password is  '+password
    )
  }
 
};


const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

 
export default UselessTextInput;