import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

const styledButton = (props) => {

    // const type = props.type;
    // const content = props.content;
    // const onPress = props.onPress;

    const {type, content, onPress} = props;
    
    const backgroundcolor = type == 'primary' ? '#171A20CC' : '#FFFFFFA6';
    const textColor = type == 'primary' ? '#FFFFFF' : '#171A20';


    return(
        <View style = {styles.container} >
            <Pressable
            style = {[styles.button, {backgroundColor: backgroundcolor}]}
            onPress={()=> onPress()}
            >
                <Text style ={[styles.text, {color:textColor}]}>{content}</Text>
            </Pressable>
       </View>
    );
};

export default styledButton;