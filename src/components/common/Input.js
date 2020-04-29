import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";

import { TouchableOpacity } from "./TouchableOpacity";
import Colors from "../../utils/Colors";
import Text from "./CustomText";

const CustomInput = ({
  label,
  formikProps,
  formikKey,
  pass = false,
  subText = false,
  ...rest
}) => {
  const inputStyles = {
    borderBottomWidth: 1,
    borderBottomColor: "#e2e2e2",
    padding: 10,
    paddingLeft: 0,
    marginBottom: 3
  };

  const inputStyles2 = {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "#e2e2e2",
    borderBottomWidth: 0.5
  };

  if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
    inputStyles.borderBottomColor = "red";
    inputStyles.borderBottomWidth = 2;
  }
  if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
    inputStyles2.borderBottomColor = "red";
    inputStyles2.borderBottomWidth = 2;
  }

  return (
    <View style={{ marginHorizontal: 20, marginBottom: 34 }}>
      {!pass ? (
        <View>
          <Text
            type="bold"
            style={{
              marginBottom: 3,
              color: Colors.defBlack
            }}
          >
            {label}
          </Text>
          <TextInput
            style={inputStyles}
            onChangeText={formikProps.handleChange(formikKey)}
            onBlur={formikProps.handleBlur(formikKey)}
            selectionColor={Colors.accent}
            // onFocus={onFocus}
            {...rest}
          />
          <Text style={{ color: "red" }}>
            {formikProps.touched[formikKey] && formikProps.errors[formikKey]}
          </Text>
        </View>
      ) : (
        <View>
          <View
            style={[
              inputStyles2,
              { alignItems: subText ? "flex-end" : "center" }
            ]}
          >
            <View style={{ flex: 1 }}>
              <View>
                <Text
                  type="bold"
                  style={{
                    marginBottom: 3,
                    color: Colors.defBlack
                  }}
                >
                  {label}
                </Text>
                {subText ? (
                  <Text>
                    Must include a symbol or number and have at least 8
                    characters.
                  </Text>
                ) : null}
              </View>
              <TextInput
                style={{ paddingTop: 10, marginTop: 20 }}
                onChangeText={formikProps.handleChange(formikKey)}
                onBlur={formikProps.handleBlur(formikKey)}
                selectionColor={Colors.accent}
                // onFocus={onFocus}
                {...rest}
              />
            </View>
            <TouchableOpacity onPress={null}>
              <Text
                type="medium"
                style={{
                  color: Colors.accent,
                  fontSize: 16,
                  paddingBottom: subText ? 10 : null
                }}
              >
                Show
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={{ color: "red", paddingTop: 2 }}>
            {formikProps.touched[formikKey] && formikProps.errors[formikKey]}
          </Text>
        </View>
      )}
    </View>
  );
};

export { CustomInput as Input };
