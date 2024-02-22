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
        flexDirection: 'row', // Adicione flexDirection: 'row' para alinhar itens horizontalmente
        alignItems: 'center', // Alinhe os itens verticalmente
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
    },
    taskText: {
        fontSize: 16,
        marginLeft: 8, // Adicione um espaço entre o checkbox e o texto
    },
    completedTaskText: {
        textDecorationLine: 'line-through',
        color: 'lightgrey',
    },
})