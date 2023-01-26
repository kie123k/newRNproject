import {
  createMaterialTopTabNavigator,
  createAppContainer
} from "react-navigation";

const SwipeTabs = createMaterialTopTabNavigator(
  {
    screen1: { screen: screen1},
    screen2: { screen: screen2},
    screen3: { screen: screen3}
  },
  {
    initialRouteName: "screen2",
    animationEnabled: true,
    tabBarOptions: {
      showLabel: false,
      showIcon: false,
      style: { height: 0 }
    }
  }
);

export default createAppContainer(SwipeTabs);