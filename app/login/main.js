
'use strict';


import React,{
    View,
    Text,
	Component,
    TouchableOpacity,
	
} from 'react-native';

import LoginPageComponent from './login';

 class MainPageComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    _pressButton() {
        this.props.navigator.pop();
    }

    render() {
    return (
            <View>
                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                    <Text>点我跳回去</Text>
                </TouchableOpacity>
            </View>
    );
    }
}
export default MainPageComponent;