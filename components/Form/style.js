import { StyleSheet } from "react-native";

import color from "../../contains/color";
const styles =  StyleSheet.create({
    addTask: {
        bottom: 30,
        paddingHorizontal: 20,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    input: {
        height: 42,
        width: "85%",
        backgroundColor: color.white,
        borderWidth: 1,
        borderColor: color.primary,
        borderRadius: 15,
        paddingHorizontal: 20
    },
    iconWrapper:{
        width: 44,
        height: 44,
        backgroundColor: color.primary,
        borderRadius: 44,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: color.background
    },
    icon: {
        fontSize: 22,
        color: color.white
    },
})

export default styles