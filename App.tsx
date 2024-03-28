import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

let App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}> Todo List</Text>
      </View>
      <ScrollView>
        <TouchableOpacity>
          <View style={styles.item}>
            <View style={styles.square}>
              <Text style={styles.number}>01</Text>
            </View>
            <Text style={styles.content}> Lau nhà</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.item}>
            <View style={styles.square}>
              <Text style={styles.number}>01</Text>
            </View>
            <Text style={styles.content}> Lau nhà</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.item}>
            <View style={styles.square}>
              <Text style={styles.number}>01</Text>
            </View>
            <Text style={styles.content}> Lau nhà</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.item}>
            <View style={styles.square}>
              <Text style={styles.number}>01</Text>
            </View>
            <Text style={styles.content}> Lau nhà</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.item}>
            <View style={styles.square}>
              <Text style={styles.number}>01</Text>
            </View>
            <Text style={styles.content}> Lau nhà</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.item}>
            <View style={styles.square}>
              <Text style={styles.number}>01</Text>
            </View>
            <Text style={styles.content}> Lau nhà</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.item}>
            <View style={styles.square}>
              <Text style={styles.number}>01</Text>
            </View>
            <Text style={styles.content}> Lau nhà</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.item}>
            <View style={styles.square}>
              <Text style={styles.number}>01</Text>
            </View>
            <Text style={styles.content}> Lau nhà</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.item}>
            <View style={styles.square}>
              <Text style={styles.number}>01</Text>
            </View>
            <Text style={styles.content}> Lau nhà</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.item}>
            <View style={styles.square}>
              <Text style={styles.number}>01</Text>
            </View>
            <Text style={styles.content}> Lau nhà</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.item}>
            <View style={styles.square}>
              <Text style={styles.number}>01</Text>
            </View>
            <Text style={styles.content}> Lau nhà</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.item}>
            <View style={styles.square}>
              <Text style={styles.number}>01</Text>
            </View>
            <Text style={styles.content}> Lau nhà</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.item}>
          <View style={styles.square}>
            <Text style={styles.number}>02</Text>
          </View>
          <Text style={styles.content}> Rửa chén</Text>
        </View>
      <View style={styles.input}></View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  body: {
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: 40,
  },
  item: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {},
  header: {
    fontSize: 24,
    color: "blue",
    fontWeight: "bold",
  },
  square: {
    height: 45,
    width: 36,
    borderRadius: 10,
    backgroundColor: "#53d6f2",
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    fontSize: 16,
    color: "#fff",
  },
  content: {
    width: "80%",
  },
});
