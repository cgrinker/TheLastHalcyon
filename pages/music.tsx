import {Box, useColorMode, useColorModeValue} from '@chakra-ui/react';
import { useTheme } from '@emotion/react';
import {MenuBar} from '../components/sys';

export default function About() {
    const theme = useTheme();
    const bg = useColorModeValue("vaporwave.purple", "vaporwave.violet");

    return (
        <Box bgColor={bg} minH="100vh" w="100%">
            <MenuBar />

            Album Out Soon
        </Box>
    )
}