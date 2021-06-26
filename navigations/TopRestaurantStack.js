import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import Restaurants from '../screens/Restaurants'
import Favorites from '../screens/Favorites'
import TopRestaurants from '../screens/TopRestaurants'
import Search from '../screens/Search'
import Account from '../screens/account/Account'

const Stack = createStackNavigator()

export default function TopRestaurantStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name = "top-restaurants"
                component = {TopRestaurants}
                options = {{title:"Top-5"}}
            />
        </Stack.Navigator>
    )
}
