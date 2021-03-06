/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var SearchPage = require('./SearchPage');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  Component
} = React;

class HelloWorld extends Component {
    constructor() {
        super();
    }

    render () {
        return (
            <Text style={styles.text}>Hello World</Text>
        );
    }
}

class PropertyFinder extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
                    title: 'Property Finder',
                    component: SearchPage
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
