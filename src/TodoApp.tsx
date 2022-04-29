import { Button, Center, Checkbox, Container, Paper, TextInput, Stack, Text } from "@mantine/core"
import { useState } from "react"

interface TodoItem {
    value: string
    isDone: boolean
}

const TodoApp = () => {
    const [input, setInput] = useState("")
    const [list, setList] = useState<TodoItem[]>([])

    const addItem = () => {
        if (!input) return
        setList((list) => [...list, { value: input, isDone: false }])
        setInput("")
    }

    const toggleItem = (index: number) => {
        const newList = [...list]
        newList[index].isDone = !newList[index].isDone
        setList(newList)
    }

    return (
        <Container size="md">
            <Center>
                <Stack>
                    <Center>
                        <TextInput
                            placeholder="New todo item"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <Button
                            ml="xs"
                            disabled={input.length < 1}
                            onClick={addItem}
                        >
                            Add
                        </Button>
                    </Center>

                    <Paper
                        p="md"
                        shadow="l"
                        withBorder
                    >
                        {list.length === 0 && <Text size="xs" color="dimmed" align="center">Add a new todo item to see your todos</Text>}
                        <Stack>
                            {list.map((item, index) => {
                                return <Checkbox key={index} label={item.value} checked={item.isDone} onChange={() => toggleItem(index)} />
                            })}
                        </Stack>
                    </Paper>
                </Stack>
            </Center>
        </Container>
    )
}

export default TodoApp