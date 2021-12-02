import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import Instabug from 'instabug-reactnative';

const App = () => {
  useEffect(() => {
    Instabug.start('APP_TOKEN', [Instabug.invocationEvent.floatingButton]);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{uri: 'https://google.com/'}} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
