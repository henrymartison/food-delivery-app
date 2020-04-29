import React, { PureComponent } from "react";
import { View, StyleSheet, FlatList, ImageBackground } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

import Text from "../components/common/CustomText";
import LogoAlt from "../components/dummy/logo_alt";
import Button from "../components/common/button";
import CartIcon from "../components/dummy/cartIcon";
import Colors from "../utils/Colors";
import { gs } from "../utils/styles";
import { categories } from "../assets/data";
import { TouchableOpacity } from "../components/common/TouchableOpacity";

const numOfColumns = 2;

const formatData = (data, numOfColumns) => {
  const numOfFullRows = Math.floor(data.length / numOfColumns);

  let numOfElementsLastRow = data.length - numOfFullRows * numOfColumns;
  while (numOfElementsLastRow !== numOfColumns && numOfElementsLastRow !== 0) {
    data.push({ name: `Blank-${numOfElementsLastRow}`, empty: true });
    numOfElementsLastRow = numOfElementsLastRow + 1;
  }

  return data;
};

class Menu extends PureComponent {
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

  _renderItem = ({ item }) => (
    <ImageBackground
      source={{ uri: item.img }}
      style={styles.imageBackground}
      imageStyle={{ borderRadius: 3 }}
    >
      <TouchableOpacity
        style={styles.overlay}
        onPress={() =>
          this.props.navigation.navigate("MenuSelect", { title: item.title })
        }
      >
        <Text type="bold" style={styles.overlayText}>
          {item.title}
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={formatData(categories, numOfColumns)}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={numOfColumns}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<Heading />}
        />
      </View>
    );
  }
}
export default Menu;

const Heading = () => (
  <Text
    style={{
      fontSize: 18,
      textTransform: "capitalize",
      textAlign: "center",
      margin: 10
    }}
  >
    Pick from our food categories
  </Text>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5
  },
  imageBackground: {
    height: 180,
    margin: 5,
    flex: 1
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,.5)",
    flex: 1,
    borderRadius: 3,
    ...gs.center
  },
  overlayText: {
    color: "white",
    fontSize: 20,
    letterSpacing: 0.5
  }
});
