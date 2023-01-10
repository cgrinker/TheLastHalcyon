import {Box, HStack, Switch, useColorMode, useColorModeValue, useTheme} from "@chakra-ui/react";

import { FaSun, FaMoon } from 'react-icons/fa';
import MenuDrawer from "./drawer";


export function MenuBar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const theme = useTheme();
    const bg = useColorModeValue("vaporwave.purple", "vaporwave.violet");
   
    return (
        <Box bgColor={bg} alignItems="center" display="flex" justifyContent={"space-between"} h="80px" w="100%">
            <Box flex="1" pl="1em">
                <MenuDrawer />
            </Box>
            <Box flex="1">
                
            </Box>
            <Box display={"flex"} flexDir="row-reverse" flex="1">
                <HStack spacing={"8px"} p="2em" display={"flex"}>
                    <FaSun size={"24px"} color={theme.colors.vaporwave.orange}  />
                    <Switch  onChange={toggleColorMode} color={theme.colors.vaporwave.blue}/>
                    <FaMoon size={"24px"}  />
                </HStack>


            </Box>
        </Box>
    )
}