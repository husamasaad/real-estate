import React from "react";
import { chakra, Box, Flex, SimpleGrid, Icon, Image, Button, IconButton, Text } from "@chakra-ui/react";
import bannerImage from "../assets/images/pexels-photo-1732414.jpeg"

import { FiExternalLink } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

export default function Contact(){

    console.log(bannerImage);
    return (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={0}>
        <Flex bg="brand.400" py="20" justifyContent="center">
            <Image
            className="bannerImage"
            src={bannerImage.src}
            fit="cover"
            height={400}
            bg="gray.100"
            loading="lazy"
            opacity={0.9}
            alt="contact"
            m="auto"
            />
        </Flex>
        <Flex
            direction="column"
            alignItems={{ base: "center", md: "start" }}
            justifyContent="center"
            px={{ base: 4, md: 8, lg: 20 }}
            pb={24}
            zIndex={3}
        >
            <chakra.span
            color="gray.500"
            fontSize="lg"
            textTransform="uppercase"
            >
            Looking For something special?
            </chakra.span>
            <chakra.h1
            mb={4}
            fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}
            fontWeight="bold"
            color="teal"
            lineHeight="shorter"
            textShadow="2px 0 currentcolor"
            >
            We&apos;re here to help
            </chakra.h1>
            <chakra.p
            pr={{ base: 0, lg: 16 }}
            mb={4}
            fontSize="lg"
            color="brand.600"
            _dark={{ color: "gray.400" }}
            letterSpacing="wider"
            >
            Get in touch with highly trained team that will help you find the perfect place for you.
            </chakra.p>
            <Box display="inline-flex" rounded="md" shadow="md">
                <Link href="https://wa.link/u7f6r3" target="_blank">
                    <Button fontSize="xl" size='lg' colorScheme='teal' variant='outline' alignItems="center" justifyContent="space-between" mr="3">
                        <Icon as={BsWhatsapp}/>
                        <Text p="3">
                            Lets Talk 
                        </Text>
                    </Button>
                </Link>
                <Link href="mailto:husamibnasaad@gmail.com" target="_blank">
                    <Button fontSize="xl" size='lg' colorScheme='teal' variant='outline' alignItems="center" justifyContent="space-between" mr="3">
                        <Icon mt="1" as={AiOutlineMail}/>
                        <Text p="3">
                            Email Us  
                        </Text>
                    </Button>
                </Link>
            </Box>
        </Flex>
        </SimpleGrid>
    );
};