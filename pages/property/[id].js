import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Box, Flex, Text, Avatar, Spacer, chakra, SimpleGrid, Icon, Button, IconButton } from '@chakra-ui/react'
import { FaBath, FaBed } from 'react-icons/fa'
import { BsGridFill } from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'
import millify from 'millify'

import { FiExternalLink } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

import { baseUrl, fetchApi } from "@/utls/fetchApi"
import ImageSrollbar from '@/components/ImageScrollbar'


const PropertyDetails = ({ propertyDetails: { price, rentFrequency, rooms, title, baths, area, agency, isVerified, description, type, purpose, furnishingStatus, amenities, photos } }) => (
    <Box maxWidth='1000px' margin='auto' p='4'>
        {photos && <ImageSrollbar data={photos} />}
        <Box w='full' p='6'>
        <Flex paddingTop='2' alignItems='center'>
            <Box paddingRight='3' color='green.400'>{isVerified && <GoVerified />}</Box>
            <Text fontWeight='bold' fontSize='lg'>
            AED {price} {rentFrequency && `/${rentFrequency}`}
            </Text>
            <Spacer />
            <Avatar size='sm' src={agency?.logo?.url}></Avatar>
        </Flex>
        <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='blue.400'>
            {rooms}<FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
        </Flex>
        </Box>
        <Box marginTop='2'>
        <Text fontSize='lg' marginBottom='2' fontWeight='bold'>{title}</Text>
        <Text lineHeight='2' color='gray.600'>{description}</Text>
        </Box>
        <Flex flexWrap='wrap' textTransform='uppercase' justifyContent='space-between'>
        <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
            <Text>Type</Text>
            <Text fontWeight='bold'>{type}</Text>
        </Flex>
        <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
            <Text>Purpose</Text>
            <Text fontWeight='bold'>{purpose}</Text>
        </Flex>
        {furnishingStatus && (
            <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3' >
            <Text>Furnishing Status</Text>
            <Text fontWeight='bold'>{furnishingStatus}</Text>
            </Flex>
        )}
        </Flex>
        <Box>
        {amenities.length && <Text fontSize='2xl' fontWeight='black' marginTop='5'>Facilites:</Text>}
            <Flex flexWrap='wrap'>
            {amenities?.map((item) => (
                item?.amenities?.map((amenity) => (
                    <Text key={amenity.text} fontWeight='bold' color='blue.400' fontSize='l' p='2' bg='gray.200' m='1' borderRadius='5'>
                    {amenity.text}
                    </Text>
                ))
            ))}
            </Flex>
        </Box>

        <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            px={{ base: 4, md: 8, lg: 20 }}
            py={24}
            zIndex={3}
        >
            <chakra.span
            color="gray.500"
            fontSize="lg"
            textTransform="uppercase"
            >
            Interested in this property?
            </chakra.span>
            <chakra.h1
            mb={4}
            fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}
            fontWeight="bold"
            color="teal"
            lineHeight="shorter"
            textShadow="2px 0 currentcolor"
            >
            Let&apos;s make it Yours
            </chakra.h1>
            <chakra.p
            pr={{ base: 0, lg: 16 }}
            mb={4}
            fontSize="lg"
            color="brand.600"
            _dark={{ color: "gray.400" }}
            letterSpacing="wider"
            >
            Contact our team and let us schedule a time for you to vist your new property as soon as possible
            </chakra.p>
            <Box display="inline-flex" rounded="md" shadow="md" mt="8">
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
    </Box>
);



export default PropertyDetails


export async function getServerSideProps({ params: { id } }) {
    const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);
    
    return {
        props: {
        propertyDetails: data,
        },
    };
}