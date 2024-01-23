import { StyleSheet } from "react-native"


export const COLORS = {
    lightWhite: "#F5F5F5",
    lightgrey: "#D3D3D3"
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',

    },
    form: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
    },
    button: {
        width: 300,
        height: 35,
        backgroundColor: "#5995ef",
        color: "#fff",
        borderRadius: 3
    },
    safeArea: {
        flex: 1, backgroundColor
            : COLORS.lightWhite
    },
    input: {
        width: 300,
        height: 35,
        borderRadius: 1,
        borderColor: "CCC",
        backgroundColor: "#FFF"

    }

})

