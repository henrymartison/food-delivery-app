import React, { PureComponent } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ListCard from "../../components/cards/mealCard";
import { meals } from "../../assets/data";

class MenuSelect extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={meals}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <ListCard
              style={{ marginVertical: 5 }}
              name={item.name}
              oldPrice={item.old_price}
              newPrice={item.new_price}
              img={item.poster}
              onPress={() =>
                this.props.navigation.navigate("Details", {
                  title: item.category
                })
              }
            />
          )}
        />

        {/* <ListCard /> */}
      </View>
    );
  }
}
export default MenuSelect;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 8
  }
});
