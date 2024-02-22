import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1A1A1A',
        flex: 1,
    },
    wrapperLogo: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 173,
        backgroundColor: '#0D0D0D',
    },
    image: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    form: {
        paddingLeft: 24,
        paddingRight: 24,
        marginTop: -26,

        width: '100%',
        flexDirection: 'row',
    },
    input: {
        backgroundColor: '#262626',
        color: '#808080',
        height: 54,
        padding: 16,
        fontSize: 16,
        borderRadius: 6,

        flex: 1,
        marginRight: 4,
    },
    button: {
        height: 52,
        width: 52,
        backgroundColor: '#1E6F9F',
        borderRadius: 6,

        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#F2F2F2',
        fontSize: 16,
        
    },
    listInput: {
        color: '#808080',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 32,
    },
    containerFlatLis : {
        marginTop: 32,
        // marginLeft: 24,
        // marginRight: 24,

    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 24,
        marginRight: 24,
    },
    created: {
        color: '#4EA8DE',
        fontSize: 14,
        fontWeight: 'bold',
    },
    done: {
        color: '#8284FA',
        fontSize: 14,
        fontWeight: 'bold',
    },

})