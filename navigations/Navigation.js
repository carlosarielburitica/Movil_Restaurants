import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'

import AccountStack from './AccountStack'
import FavoriteStack from './FavoriteStack'
import RestaurantStack from './RestaurantStack'
import SearchStack from './SearchStack'
import TopRestaurantStack from './TopRestaurantStack'

const Tab = createBottomTabNavigator()

export default function Navigation() {
    const screenOptions = (route, color) =>{
        let iconName
        switch (route.name) {
            case "restaurants":
                iconName = "compass-outline"
                break;
            case "favorites":
                iconName = "heart-outline"
                break;
            case "top-restaurants":
                iconName = "star-outline"
                break;
            case "search":
                iconName = "magnify"
                break;
            case "account":
                iconName = "home-outline"
                break;
            default:
                break;
        }
        return (
            <Icon
                type="material-community"
                name={iconName}
                size={22}
                color={color}
            />
        )
    }
    return (
        <NavigationContainer>
            <Tab.Navigator 
                initialRouteName="restaurants"
                tabBarOptions={{ 
                    inactiveTintColor: "#a17dc3", 
                    activeTintColor: "#442484"
                }} 
                screenOptions= {({ route }) => ({
                    tabBarIcon: ({color}) => screenOptions(route, color)
                })}
            >
                <Tab.Screen
                    name="restaurants"
                    component={RestaurantStack} 
                    options={{ title:"Restaurantes" }}
                />
                <Tab.Screen
                    name="favorites"
                    component= {FavoriteStack}
                    options={{ title:"Favoritos" }}
                />
                <Tab.Screen
                    name="top-restaurants"
                    component={TopRestaurantStack}
                    options={{ title:"Top-5" }} 
                />
                <Tab.Screen
                    name="search"
                    component={SearchStack} 
                    options={{ title:"Buscar" }}
                />
                <Tab.Screen
                    name = "account"
                    component = {AccountStack} 
                    options={{ title:"Cuenta" }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}


