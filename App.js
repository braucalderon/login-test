import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeSreen";
import Login from "./src/screens/Login";


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: Login

  },
  {
    initialRouteKey: 'Home',
    defaultNavigationOptions: {
      title: 'Learnabi',
    },
  }

);
export default createAppContainer(navigator);
