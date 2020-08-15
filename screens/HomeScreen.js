import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  BackHandler,
  Text
} from 'react-native';

import {
  Header_Component,
  BottomTabs_Component,
  Login_Component
} from '../components/index';

import { colorPalette, Strings, ExitAppAlert } from '../utils';

class HomeScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      userName: "",
      password: ""
    }
  }

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this.backAction
    );
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  backAction = () => {
    ExitAppAlert('Exit', 'Are you sure you want to exit app.').then((value) => {
      BackHandler.exitApp();
    }).catch((error) => {

    })
    return true;
  };


  logoutClick_Method = () => {
    this.setState({ userName: '' });
    this.setState({ password: '' });
  }


  render() {
    const { userName, password } = this.state;
    return (
      <>
        <SafeAreaView style={styles.safeContainer_Style}>
          {
            !userName
              ? this.loginComponet_Method()
              : this.homescreenComponet_Method()

          }
        </SafeAreaView>
      </>
    );
  }

  loginComponet_Method = () => {
    const { userName, password } = this.state;
    return (
      <>
        <Header_Component headerText={Strings.login} />
        <Login_Component loginsuccess={(value) => {
          this.setState({ userName: value[0] }),
            this.setState({ password: value[1] })
        }} />
      </>
    )
  }

  homescreenComponet_Method = () => {
    return (
      <>
        <Header_Component headerText={Strings.tabScreenName.home.toUpperCase()} />
        {this.homeScreenRender_Method()}
        <BottomTabs_Component />
      </>
    )
  }

  homeScreenRender_Method = () => {
    return (
      <View style={styles.homeScree_Style}>
        <Text style={styles.textStyle}>{`Hi,  ${this.state.userName}`}</Text>
        <Button title={Strings.logout}
          onPress={() => this.logoutClick_Method()} />
      </View>
    )
  }

};

const styles = StyleSheet.create({
  safeContainer_Style: {
    flex: 1, backgroundColor: colorPalette.white
  },
  homeScree_Style: {
    flex: 1, justifyContent: "center", alignItems: "center"
  },
  textStyle: {
    fontSize: 25, color: colorPalette.green, marginVertical: 20
  }
});

export default HomeScreen;
