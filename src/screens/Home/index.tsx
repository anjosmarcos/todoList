import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import React, { useState } from 'react'; // Add this line to import the useState hook
import { Task } from '../../components/Task';


export function Home() {
    const [tasks, setTasks] = useState<{ name: string, completed: boolean }[]>([]);

    const [newTask, setNewTask] = useState('')

    function handleAddNewTask() {
        if (!newTask) {
            return Alert.alert('Atenção', 'Digite o nome da tarefa')
        }

        if (tasks.some(tasks => tasks.name === newTask)) {
            return Alert.alert('Atenção', 'Já existe uma tarefa com esse nome');
        }
        setTasks(prevTasks => [...prevTasks, { name: newTask, completed: false }]);
        setNewTask('')
    }

    // function handleRemoveTask(item: string) {
    //     return () => {
    //         setTasks((prevState) => prevState.filter((task) => task.name !== item));
    //     };
    // }
    
    function handleRemoveTask(item: string) {
        return () => {
            // Verificar se a tarefa está marcada como concluída
            const taskToRemove = tasks.find(task => task.name === item);
            if (taskToRemove && taskToRemove.completed) {
                // Remover a tarefa apenas se estiver marcada como concluída
                setTasks(prevState => prevState.filter(task => task.name !== item));
            } else {
                Alert.alert('Atenção', 'Você só pode excluir tarefas concluídas');
            }
        };
    }
    

    function countCreatedTask() {
        return tasks.length
    }

    function handleTaskDone(taskName: string) {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.name === taskName ? { ...task, completed: !task.completed } : task
            )
        );
        // Alert.alert('Tarefa concluída');
    }

    function countCompletedTasks() {
        return tasks.reduce((total, task) => {
            if (task.completed) {
                return total + 1;
            }
            return total;
        }, 0);
    }
    

    return (
        <View style={styles.container}>

            <View style={styles.wrapperLogo}>
                <Image style={styles.image} source={require('../../../assets/Logo.png')} />
            </View>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Adicione uma nova tarefa"
                    // onChangeText={e => setNewTask(e)}
                    onChangeText={setNewTask}
                    value={newTask}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleAddNewTask}
                >
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.containerFlatLis}>
                <View style={styles.info}>
                    <Text style={styles.created}>
                        Criadas: {countCreatedTask()}
                    </Text>
                    {/* <Text style={styles.done}>Concluídas 2</Text> */}
                    <Text style={styles.done}>
                        Concluídas: {countCompletedTasks()}
                    </Text>
                </View>

                <FlatList
                    data={tasks}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <Task
                            name={item.name}
                            completed={item.completed}
                            onRemove={handleRemoveTask(item.name)}
                            isDone={() => handleTaskDone(item.name)}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <Text style={styles.listInput} >
                            Você ainda não tem tarefas cadastradas.Crie tarefas e organize seus itens a fazer
                        </Text>
                    )}
                />

            </View>



        </View>
    )
}