import { Header as MantineHeader, Container, ActionIcon, useMantineColorScheme } from '@mantine/core'
import { Sun, MoonStars } from 'tabler-icons-react';
import { HEADER_HEIGHT } from './constants';

const Header = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();

    const dark = colorScheme === "dark"

    return (
        <MantineHeader
            height={HEADER_HEIGHT}
            p="xs"
        >
            <Container
                styles={(theme) => ({
                    root: {
                        display: "flex",
                        alignItems: "center",
                        height: "100%",
                        justifyContent: "end"
                    }
                })}
            >
                <ActionIcon
                    variant="outline"
                    color={dark ? 'yellow' : 'blue'}
                    onClick={() => toggleColorScheme()}
                    title="Toggle color scheme"
                >
                    {dark ? <Sun size={18} /> : <MoonStars size={18} />}
                </ActionIcon>
            </Container>
        </MantineHeader>
    )
}

export default Header