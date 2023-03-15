import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Main from "../screens/Main";
import BlogPage from "../screens/BlogPage";

const Stack = createStackNavigator();

function Navigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen component={Home} name="Home"/>
                <Stack.Screen component={Main} name="Main"/>
                <Stack.Screen component={BlogPage} name="BlogPage"/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;