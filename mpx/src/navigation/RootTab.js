import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import React from 'react'
import AntIcon from 'react-native-vector-icons/AntDesign'
import HomePage from './HomeNavigator'
import Page1 from './PageNavigator1'
import My from './PageNavigator2'

const TabNavigator = createBottomTabNavigator({
    Home:{
        screen:HomePage,
    },
    Page1:{
        screen:Page1,
    },
    My:{
        screen:My,
    },
},{
    initialRouteName:"My",
    defaultNavigationOptions: ({navigation}) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'Home') {
              iconName = "home";
            } else if (routeName === 'Page1') {
              iconName = `hearto`;
            } else if (routeName === 'My') {
                iconName = `user`;
            }
            return <AntIcon name={iconName} size={24} color={tintColor}/>;
        },
        tabBarOptions: {
            activeTintColor: '#1b9fe2',
            inactiveTintColor: 'gray',
        },
    })
})

export default createAppContainer(TabNavigator)