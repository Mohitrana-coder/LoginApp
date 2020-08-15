import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Button
} from 'react-native';

import { colorPalette, Strings, NormalAlert } from '../utils/index';




const LoginComponent = (props) => {
    const [userName, setuserName] = useState("");
    const [userPassword, setuserPassword] = useState("");

    function loginMethod() {
        if (userName === "") {
            NormalAlert('', Strings.alertText.enterEmail);
        } else if (userPassword === "") {
            NormalAlert('', Strings.alertText.enterPassword);
        } else if (!userPassword.includes('admin')) {
            NormalAlert('', Strings.alertText.passwordIncorrect);
        } else {
            props.loginsuccess([userName, userPassword]);
        }
    }

    return (
        <>
            <View style={styles.ViewStyle}>
                <Text style={styles.textStyle}>{Strings.name}</Text>
                <TextInput
                    style={styles.textInputStyle}
                    placeholder={Strings.placeholderEnterName}
                    autoCorrect={false}
                    onChangeText={(value) => setuserName(value)}
                    value={userName}
                />
                <Text style={styles.textStyle}>{Strings.password}</Text>
                <TextInput
                    style={styles.textInputStyle}
                    placeholder={Strings.placeholderEnterPassword}
                    autoCorrect={false}
                    onChangeText={(value) => setuserPassword(value)}
                    value={userPassword}
                    secureTextEntry={true}
                />
                <Button title={Strings.login}
                    onPress={() => loginMethod()}></Button>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    ViewStyle: {
        flex: 1, backgroundColor: colorPalette.white, padding: 8, justifyContent: "center"
    },
    textInputStyle: {
        height: 50, width: "100%", padding: 8, borderRadius: 5, fontSize: 18,
        borderWidth: 1, borderColor: colorPalette.black, marginBottom: 20
    },
    textStyle: {
        fontSize: 20, color: colorPalette.black, marginVertical: 5
    }
});

export default LoginComponent;