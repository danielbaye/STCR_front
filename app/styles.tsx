import { StyleSheet } from "react-native"
import { COLORS } from "./constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        
    },
    text: {
        fontSize: 16,
        textAlign: "center"
    },
    wrapperCustom: {
        borderRadius: 8,
        padding: 6,
    },
    logBox: {
        padding: 20,
        margin: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#f0f0f0',
        backgroundColor: '#f9f9f9',
    },
    safeArea: {
        flex: 1, backgroundColor
            : COLORS.lightWhite
    },
    textInput: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingLeft: 10 },
    row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    headerRow: {
        backgroundColor: '#f0f0f0',
        fontWeight: 'bold',
    },
    cell: {
        flex: 1,
        padding: 10,
        textAlign: 'center',
        borderStyle: "solid",
        borderBlockColor: "black",
        borderWidth: 1
    }
});

