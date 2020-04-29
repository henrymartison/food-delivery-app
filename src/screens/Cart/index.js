import React, { PureComponent } from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import Text from "../../components/common/CustomText";
import CartItemCard from "../../components/cards/CartItemCard";
import { gs } from "../../utils/styles";
import Button from "../../components/common/button";
import Colors from "../../utils/Colors";

class CartScreen extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
          <CartItemCard />
          <CartItemCard />
          <View style={styles.summaryContainer}>
            <View style={{ ...gs.rowBetween, marginBottom: 12 }}>
              <Text type="medium" style={styles.summaryTitle}>
                Subtotal
              </Text>
              <Text type="medium" style={styles.summaryValue}>
                $20.79
              </Text>
            </View>
            <View style={{ ...gs.rowBetween, marginBottom: 12 }}>
              <Text type="medium" style={styles.summaryTitle}>
                Delivery
              </Text>
              <Text type="medium" style={styles.summaryValue}>
                $3.00
              </Text>
            </View>
            <View style={{ ...gs.rowBetween, marginBottom: 12 }}>
              <Text type="medium" style={styles.summaryTitle}>
                Taxes
              </Text>
              <Text type="medium" style={styles.summaryValue}>
                $3.09
              </Text>
            </View>
            <View style={{ ...gs.rowBetween, marginBottom: 12 }}>
              <Text style={{ fontSize: 28 }}>Total</Text>
              <View style={{ ...gs.row }}>
                <Text
                  type="medium"
                  style={[{ color: Colors.primary, fontSize: 13 }]}
                >
                  2 ITEMS
                </Text>
                <Text type="bold" style={{ paddingLeft: 5, fontSize: 19 }}>
                  $26.88
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <Button
            style={styles.mainButton}
            onPress={() => this.props.navigation.navigate("#")}
          >
            <Text type="medium" style={styles.mainButtonText}>
              Checkout
            </Text>
          </Button>
        </View>
      </View>
    );
  }
}
export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  footer: {
    height: 80,
    backgroundColor: "white",
    ...gs.center
  },
  mainButton: {
    backgroundColor: Colors.primary,
    height: "60%",
    width: "90%",
    borderRadius: 5
  },
  mainButtonText: {
    color: "white",
    fontSize: 17
  },
  summaryContainer: {
    height: "100%",
    marginTop: 12,
    backgroundColor: "white",
    padding: 15
  },
  summaryTitle: {
    color: "grey",
    fontSize: 17
  },
  summaryValue: {
    fontSize: 17
  }
});
