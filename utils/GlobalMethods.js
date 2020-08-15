import React from 'react';
import { Alert } from 'react-native';

export function NormalAlert(title, message) {
    Alert.alert(title, message,
        [
            {
                text: "OK",
                onPress: () => null
            }
        ],
        { cancelable: false }
    );
}

export function ExitAppAlert(title, message) {
    return new Promise((resolve,reject) => {
        Alert.alert(title, message,
            [
                {
                    text: 'Cancel',
                    onPress: () => reject("cancel"),
                    style: 'cancel'
                  },
                {
                    text: "OK",
                    onPress: () => resolve('Exit') 
                }
            ],
            { cancelable: false }
        );
    })
    
}