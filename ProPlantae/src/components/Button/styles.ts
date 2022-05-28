import { StyleSheet } from "react-native";
import colors from '../../styles/colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 20
    },
    buttonGoogle: {
        backgroundColor: colors.retGoogle,
        justifyContent: 'center'
    },
    buttonFace: {
        backgroundColor: colors.retFace,
        justifyContent: 'center'
    },
    buttonEmail: {
        backgroundColor: colors.retEmail,
        justifyContent: 'center'
    },
    text: {
        textAlign: 'center',
        color: colors.black,
        fontSize: 20,
        fontWeight: 'bold'
    },
})

export default styles