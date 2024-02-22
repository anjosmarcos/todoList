import { TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native';
import { styles } from './styles';
import { TaskProps } from '../../@types/type';
import { CheckBox } from 'react-native-elements';

export function Task({ name, completed, onRemove, isDone }: TaskProps) {
    return (
        <View style={styles.task}>
            <CheckBox
                checked={completed}
                onPress={() => {
                    isDone(name);
                }}
                checkedColor={completed ? 'green' : 'black'}

            />

            <View style={styles.textTask}>
                <Text style={[styles.taskText, completed && styles.completedTaskText]}>
                    {name}
                </Text>
            </View>

            <TouchableOpacity
                style={styles.trash}
                onPress={onRemove} // Chama a função onRemove ao pressionar o botão
            >
                <Text style={styles.trashIcon}>X</Text>
            </TouchableOpacity>
        </View>
    );
}
