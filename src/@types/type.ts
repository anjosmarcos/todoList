export type TaskProps = {
    name: string,
    completed: boolean,
    onRemove: () => void,
    isDone: (taskName: string) => void
}