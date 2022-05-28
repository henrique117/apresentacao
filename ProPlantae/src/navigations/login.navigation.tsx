import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginStackParamList } from "../types/Screen.types";

const Stack = createStackNavigator<LoginStackParamList>();

export default function LoginNavigation() {
    return (
        <Stack.Navigator>
            
        </Stack.Navigator>
    )
}