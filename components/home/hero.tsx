import {Box, Text, Image, Heading} from '@chakra-ui/react';



export default function HomeHero() {
    return (
        <Box display={"flex"} justifyContent="center" flexDir={"column"}  w="100%" h="800px" backgroundSize={"cover"} bgImage="home_hero.png">
            <Heading textTransform={"uppercase"} color={"vaporwave.orange"} as="h1" fontSize={"96px"} textAlign={"center"} >The Last Halcyon</Heading>
            <Heading color={"vaporwave.orange"} as="h1" fontSize={"72px"} textAlign={"center"} >A Sci-Fi Storyt</Heading>
        </Box>
    );
}