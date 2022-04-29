
import "./App.css"
import { useState } from "react"
import { MantineProvider, ColorScheme, ColorSchemeProvider, AppShell } from "@mantine/core"
import { useColorScheme } from "@mantine/hooks"
import Header from "./Header"
import { HEADER_HEIGHT } from "./constants"
import TodoApp from "./TodoApp"

function App() {
  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState<ColorScheme>(preferredColorScheme);
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }}>
        <AppShell
          padding="md"
          header={<Header />}
          styles={(theme) => ({
            body: {
              height: `calc(100vh - ${HEADER_HEIGHT}px)`
            },
            main: {
              backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
            }
          })}
        >
          <TodoApp />
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default App
