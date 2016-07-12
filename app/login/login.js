
'use strict';

import React,{
    View,
    Text,
	Component,
    TouchableOpacity,
	
} from 'react-native';

import MainPageComponent from './main'

 class LoginPageComponent extends Component {
   
    _pressButton() {
        this.props.navigator.push({
			title: 'MainPageComponent',
			component: MainPageComponent
		});
    }
    render() {
		
        return (
            <View>
                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                    <Text>点我跳转</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default LoginPageComponent;