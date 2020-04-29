import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import {
  MaterialCommunityIcons,
  Feather,
  Ionicons,
  FontAwesome,
  SimpleLineIcons
} from "@expo/vector-icons";

import Home from "../main-tab-screens/Home";
import Menu from "../main-tab-screens/Menu";
import Table from "../main-tab-screens/Table";
import Favorites from "../main-tab-screens/Favorites";
import More from "../main-tab-screens/More";
import Colors from "../utils/Colors";
import Register from "../auth-screens/Register";
import Login from "../auth-screens/Login";
import Intro from "../auth-screens/Intro";
import { TouchableOpacity } from "../components/common/TouchableOpacity";
import Address from "../auth-screens/Address";
import MenuSelect from "../screens/Menu";
import Button from "../components/common/button";
import { gs } from "../utils/styles";
import CartIcon from "../components/dummy/cartIcon";
import DetailScreen from "../screens/DetailScreen";
import ConfirmationPage from "./ConfirmationPage";
import CartScreen from "../screens/Cart";

const CartStack = createStackNavigator(
  {
    Cart: CartScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      title: navigation.getParam("title") || "header title",
      headerTitleStyle: { textTransform: "capitalize" },
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ paddingLeft: 13 }}
        >
          <Ionicons
            name="ios-arrow-round-back"
            color={Colors.defBlack}
            size={30}
          />
        </TouchableOpacity>
      )
    })
  }
);

const HomeStack = createStackNavigator({
  Home: Home,
  Cart: {
    screen: CartStack,
    navigationOptions: { headerShown: false }
  }
});

const MenuStack = createStackNavigator(
  {
    Menu: Menu,
    MenuSelect: MenuSelect,
    Details: DetailScreen,
    ConfirmationPage: ConfirmationPage,
    Cart: {
      screen: CartStack,
      navigationOptions: { headerShown: false }
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      title: navigation.getParam("title"),
      headerTitleStyle: { textTransform: "capitalize" },
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ paddingLeft: 13 }}
        >
          <Ionicons
            name="ios-arrow-round-back"
            color={Colors.defBlack}
            size={30}
          />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View style={{ marginRight: 14, ...gs.row }}>
          <Button transparent style={{ marginRight: 14 }}>
            <SimpleLineIcons
              name="location-pin"
              size={18}
              color={Colors.defBlack}
            />
          </Button>
          <CartIcon />
        </View>
      )
    })
  }
);

const tabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: ({ navigation }) => {
        let tabBarVisible = true;
        if (navigation.state.index > 0) {
          tabBarVisible = false;
        }
        return {
          tabBarVisible,
          tabBarLabel: "Explore",
          tabBarIcon: ({ tintColor, focused }) => (
            <MaterialCommunityIcons
              name={focused ? "compass" : "compass-outline"}
              size={24}
              color={tintColor}
            />
          )
        };
      }
    },
    Menu: {
      screen: MenuStack,
      navigationOptions: ({ navigation }) => {
        let tabBarVisible = true;
        if (navigation.state.index > 0) {
          tabBarVisible = false;
        }
        return {
          tabBarVisible,
          tabBarLabel: "Menu",
          tabBarIcon: ({ tintColor }) => (
            <MaterialCommunityIcons
              name="book-open-page-variant"
              size={20}
              color={tintColor}
            />
          )
        };
      }
    },
    Table: {
      screen: Table,
      navigationOptions: ({ navigation }) => {
        let tabBarVisible = true;
        if (navigation.state.index > 0) {
          tabBarVisible = false;
        }
        return {
          tabBarVisible,
          tabBarLabel: "Book Table",
          tabBarIcon: ({ tintColor, focused }) => (
            <MaterialCommunityIcons
              name={!focused ? "calendar-blank-outline" : "calendar-star"}
              size={20}
              color={tintColor}
            />
          )
        };
      }
    },
    Favorites: {
      screen: Favorites,
      navigationOptions: ({ navigation }) => {
        let tabBarVisible = true;
        if (navigation.state.index > 0) {
          tabBarVisible = false;
        }
        return {
          tabBarVisible,
          tabBarIcon: ({ tintColor, focused }) => {
            const Icon = focused ? FontAwesome : Feather;
            return <Icon name="star" size={20} color={tintColor} />;
          }
        };
      }
    },
    More: {
      screen: More,
      navigationOptions: ({ navigation }) => {
        let tabBarVisible = true;
        if (navigation.state.index > 0) {
          tabBarVisible = false;
        }
        return {
          tabBarVisible,
          tabBarIcon: ({ tintColor }) => (
            <Feather name="more-horizontal" size={25} color={tintColor} />
          )
        };
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.primary,
      inactiveTintColor: Colors.defBlack
    }
  }
);

const AuthStack = createStackNavigator(
  {
    Register: Register,
    Login: Login,
    Address: Address
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: () => {
          if (navigation.state.index > 0) {
            return (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ paddingLeft: 13 }}
              >
                <Ionicons
                  name="ios-arrow-round-back"
                  color={Colors.defBlack}
                  size={30}
                />
              </TouchableOpacity>
            );
          }
        }
      };
    }
  }
);

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      Main: tabNavigator,
      Auth: AuthStack,
      Intro: Intro
    },
    {
      initialRouteName: "Main"
    }
  )
);

export default AppContainer;
