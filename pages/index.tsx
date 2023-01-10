import {Box, useColorMode, useColorModeValue} from '@chakra-ui/react';
import { useTheme } from '@emotion/react';
import HomeHero from '../components/home/hero';
import {MenuBar} from '../components/sys';
import HeadInfo from '../components/sys/Head';

export default function Index() {
    const theme = useTheme();

    return (
        <Box  minH="100vh" w="100%">
            <HeadInfo />
            <MenuBar />
            <HomeHero  />
        </Box>
    )
}