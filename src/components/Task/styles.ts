import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    task: {
        flexDirection: 'row',
        backgroundColor: '#262626',
        borderRadius: 8,
        height: 64,
        marginTop: 20,
    },
    check: {
        borderColor: '#4EA8DE',
        borderWidth: 1,
        width: 18,
        height: 18,
        borderRadius: 999,

        marginBottom: 20,
        marginTop: 20,
        marginLeft: 8,
        marginRight: 8,

    },
    textTask: {
        flex: 1,
        justifyContent: 'center',
    },
    tastText: {
        color: '#F2F2F2',
        fontSize: 16,
    }, 
    trash: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 25,
        marginLeft: 25,
    },
    trashIcon: {
        color: '#808080',
        fontSize: 16,
        fontWeight: 'bold',
    }
})