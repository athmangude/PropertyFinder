/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} = React;

class HelloWorld extends React.Component {
    constructor() {
        super();
    }

    render () {
        return (
            <Text style={styles.text}>Hello World</Text>
        );
    }
}

class PropertyFinder extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
                    title: 'Property Finder',
                    component: HelloWorld
                }}
             />
        );
    }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
      color: 'black',
      backgroundColor: 'white',
      fontSize: 30,
      margin: 80
  }
});

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);
