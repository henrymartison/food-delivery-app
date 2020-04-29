import React, { Component } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
  FlatList
} from "react-native";
import { SimpleLineIcons, Entypo, Ionicons } from "@expo/vector-icons";

import Text from "../components/common/CustomText";
import Button from "../components/common/button";
import Colors from "../utils/Colors";
import LogoAlt from "../components/dummy/logo_alt";
import CartIcon from "../components/dummy/cartIcon";
import { gs } from "../utils/styles";
import { meals } from "../assets/data";

class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: null,
      headerLeft: () => <LogoAlt style={{ marginLeft: 10 }} />,
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
    };
  };

  _renderFlatlist = ({ item }) => {
    return (
      <View style={styles.listItemContainer}>
        <Image
          source={{ uri: item.poster }}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={{ height: "33%", ...gs.center, padding: 3 }}>
          <Text numOfLines={1} style={{ textTransform: "capitalize" }}>
            {item.name}
          </Text>
        </View>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <Text
            type="medium"
            style={{ textAlign: "center", margin: 13, fontSize: 16 }}
          >
            Welcome back, John!
          </Text>
          <View style={styles.mainImage}>
            <ImageBackground
              style={{
                ...gs.imageFill,
                borderRadius: 6,
                justifyContent: "flex-end"
              }}
              imageStyle={{ borderRadius: 5 }}
              resizeMode="cover"
              source={{
                uri:
                  "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              }}
            >
              <View style={{ margin: 13 }}>
                <Text type="medium" style={{ color: "white", fontSize: 17 }}>
                  NEW!
                </Text>
                <Text style={{ color: "white", textTransform: "uppercase" }}>
                  Monster burger
                </Text>
              </View>
            </ImageBackground>
          </View>

          <Button
            style={{
              ...gs.block_button,
              ...gs.rowBetween,
              paddingHorizontal: 12
            }}
          >
            <Text type="medium" style={{ color: "white" }}>
              Weekly OFFERS
            </Text>
            <View style={{ ...gs.row }}>
              <Text type="medium" style={{ color: "white", marginRight: 5 }}>
                See now
              </Text>
              <Entypo name="chevron-thin-right" color="white" size={10} />
            </View>
          </Button>
          <View style={{ marginTop: 28 }}>
            <Text style={{ fontSize: 17 }}>Your Recent Orders</Text>
            <FlatList
              data={meals}
              renderItem={this._renderFlatlist}
              keyExtractor={(item, index) => index.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
            <Button transparent style={styles.listFooter}>
              <Text type="medium" style={styles.listFooterText}>
                View All Orders
              </Text>
              <Ionicons
                name="ios-arrow-round-forward"
                size={20}
                color={Colors.primary}
              />
            </Button>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Colors,
    paddingHorizontal: 10
  },
  mainImage: {
    height: 220,
    backgroundColor: "#e2e2e2",
    borderRadius: 6
  },
  listItemContainer: {
    height: 117,
    width: 113,
    backgroundColor: "white",
    margin: 5,
    borderRadius: 3,
    ...gs.box_shadow,
    shadowRadius: 5,
    shadowOffset: { height: 2, width: 0 },
    shadowColor: "grey"
  },
  image: {
    ...gs.imageFill,
    borderTopRightRadius: 3,
    borderTopLeftRadius: 3
  },
  listFooter: {
    borderBottomColor: "#e2e2e2",
    borderBottomWidth: 1,
    height: 40,
    ...gs.rowBetween
  },
  listFooterText: {
    color: Colors.primary,
    marginLeft: 8
  }
});
