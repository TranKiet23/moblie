import { StyleSheet } from "react-native";
import color from "../../contains/color";

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        backgroundColor: color.white,
        marginBottom: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "space-between",
      },
      square: {
        height: 45,
        width: 40,
        borderRadius: 10,
       
        alignItems: "center",
        justifyContent: "center",
      },
      even : {
        backgroundColor: color.green,
      },
      odd: {
        backgroundColor: color.sencond,
      },

      number: {
        fontSize: 16,
        color:  color.white,
      },
      content: {
        width: "80%",
      },
})

export default styles