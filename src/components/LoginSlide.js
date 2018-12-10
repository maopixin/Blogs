import React from "react";
import { View, Text, Image, TouchableOpacity , StyleSheet, Dimensions } from "react-native";

export default class LoginSide extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    const empryFunc = () => {}
    const { title, leftImg, rightImg, onLeftPress = empryFunc, onRightPress = empryFunc } = this.props;

    return (
        <View style={[styles.container, {backgroundColor: this.props.backgroundColor}]}>
            {
                leftImg
                ?
                (
                    <TouchableOpacity style={styles.leftContainer} onPress={onLeftPress}>
                        {
                            leftImg
                        }
                    </TouchableOpacity>
                )
                :
                null
            }
            <View style={{width: width - 100, flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={styles.title} numberOfLines={1}>{title}</Text>
            </View>
            {
                rightImg ?
                <TouchableOpacity style={styles.rightContainer} onPress={onRightPress}>
                    {
                        rightImg
                    }
                </TouchableOpacity >
                :
                null
            }
        </View>
    );
  }
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        height:50,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth:1,
        borderBottomColor:"#E4E7ED"
    },
    leftContainer: {
        position: 'absolute',
        left: 15,
        zIndex:999
    },
    rightContainer: {
        position: 'absolute',
        right: 15
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#303133'
    }
})