import React from 'react'
import NextLink from 'next/link';

import {
    Drawer,
    IconButton,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Link,
    Box,
    HStack
} from '@chakra-ui/react'

import { FaBars, FaGithub, FaInstagram, FaSpotify } from 'react-icons/fa'




export default function MenuDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <IconButton aria-label='open nav menu' ref={btnRef} onClick={onOpen} icon={<FaBars />} />
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>The Last Halcyon</DrawerHeader>

                    <DrawerBody>
                        
                    <Box fontSize={"24px"}>
                        <Box>
                            <Link as={NextLink} href='/'>
                                Home
                            </Link>
                        </Box>
                        <Box>
                            <Link as={NextLink} href='/chapters'>
                                Chapters
                            </Link>
                        </Box>
                        <Box>
                            <Link as={NextLink} href='/music'>
                                Music
                            </Link>
                        </Box>
                        <Box>
                            <Link as={NextLink} href='/about'>
                                About
                            </Link>
                        </Box>
                    </Box>
                    </DrawerBody>

                    <DrawerFooter>
                        <HStack>
                            <a href="https://www.instagram.com/ob1_clark/">
                                <FaInstagram color='purple' size="28px" />
                            </a>

                            <a href="https://open.spotify.com/artist/4ql357h8uSwvQwmmAKk5h1?si=bSN1cRxETV-hkiQqkYwQBQ">
                                <FaSpotify color="green" size="28px" />
                            </a>
                            <a href="https://github.com/cgrinker/TheLastHalcyon" >
                                <FaGithub size="28px" />
                            </a>
                        </HStack>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}