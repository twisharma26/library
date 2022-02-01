import React, {Component} from "react"
import {NavigationContainer} from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import SearchClass from "../screens/searchscreen"
import TransactionClass from "../screens/transactionscreens"

const tab = createBottomTabNavigator()

export default class TabNavigatorClass extends Component {
    render() {
        return(
            <NavigationContainer> 
                <Tab.Navigator> 
                    <Tab.Screen name = "transaction" component = {TransactionClass} />
                    <Tab.Screen name = "search" component = {SearchClass} />
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}


