import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import React from 'react'
import AntIcon from 'react-native-vector-icons/AntDesign'
import HomePage from './HomeNavigator'
import Page1 from './PageNavigator1'
import Page2 from './PageNavigator2'

const TabNavigator = createBottomTabNavigator({
    Home:{
        screen:HomePage,
    },
    Page1:{
        screen:Page1,
    },
    Page2:{
        screen:Page2,
    },
},{
    defaultNavigationOptions: ({navigation}) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'Home') {
              iconName = "home";
            } else if (routeName === 'Page1') {
              iconName = `hearto`;
            } else if (routeName === 'Page2') {
                iconName = `user`;
            }
            return <AntIcon name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
        },
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    })
})

export default createAppContainer(TabNavigator)