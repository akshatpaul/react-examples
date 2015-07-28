/**
 * React Native Webview Shell
 * Author : Akshat Paul
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView
} = React;

var WebviewShell = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <WebView url={'https://www.facebook.com/'} />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('WebviewShell', () => WebviewShell);
