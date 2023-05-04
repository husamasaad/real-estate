import Link from "next/link"
import Image from "next/image"
import { Flex, Box, Text, Button, Divider } from "@chakra-ui/react"

import { baseUrl, fetchApi } from "@/utls/fetchApi"
import Property from "@/components/Property"
import bannerImage from "/assets/images/bannerImage.png"
import Contact from "@/components/Contact"



const Banner = ({ purpose, title1, title2, desc1, desc2, linkName, imageUrl, buttonText1, buttonText2 }) => (
  <Flex flexWrap={'wrap'} justifyContent={'center'} alignItems={'center'} m={'10'}>
    <Box p="5" marginBottom="5">
      <Text fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }} fontWeight="bold" bgGradient='linear(to-l, #865cf9, teal)'
  bgClip='text'>
        {title1}<br />{title2}
      </Text>
      <Text fontSize={{ base: 'm', lg: 'l' }} paddingTop="3" paddingBottom="5" color="gray.700" fontWeight="medium">
        {desc1}<br />{desc2}
      </Text>
      <Button fontSize="xl" marginRight="3" size='lg' colorScheme='teal' variant='outline' mb={{base: "3", md: "0"}} w="200px">
        <Link href={linkName}>{buttonText1}</Link>
      </Button>
      <Button fontSize="xl" size='lg' colorScheme='teal' variant='outline' w="200px">
        <Link href={linkName}>{buttonText2}</Link>
      </Button>
    </Box>
    <Image src={imageUrl} width={600} height={400} alt="Banner" className="bannerImage"/>
  </Flex>
)

export default function Home({ propertiesForSale, propertiesForRent }) {
  return (
    <Box>
      <Banner 
        purpose={"RENT A HOME"}
        title1="We Will Help You Find "
        title2="The Property Of Your Dreams."
        desc1="Creating quality urban lifestyles,building stronger communities, "
        desc2="Explore our Apartments, Villas, Homes and more"
        buttonText1="Buy a property"
        buttonText2="Rent a property"
        linkName="/search?purpose=for-rent"
        imageUrl={bannerImage}
      />
      <Flex alignItems="center" pt="20" pb="5" flexDirection="column">
        <Divider orientation='horizontal' />
        <Text pt="5" fontSize="4xl" color="#087E87" fontWeight="bold">Featured Properties</Text>
        <Text fontSize="l" color="gray.400" fontWeight="medium">For Rent</Text>
      </Flex>

      <Flex flexWrap="wrap" justifyContent="center">
        {propertiesForRent.map((property) => <Property property={property} key={property.id} />)}
      </Flex>

      <Button fontSize="xl" mx="auto" display="block" my="5" size='sm' colorScheme='teal' variant='outline'>
        <Link href="/search?purpose=for-rent">See more</Link>
      </Button>

      <Flex alignItems="center" pt="8" pb="5" flexDirection="column">
        <Divider orientation='horizontal' />
        <Text pt="5" fontSize="4xl" color="#087E87" fontWeight="bold">Featured Properties</Text>
        <Text fontSize="l" color="gray.400" fontWeight="medium">For Sale</Text>
      </Flex>

      <Flex flexWrap="wrap" justifyContent="center">
        {propertiesForSale.map((property) => <Property property={property} key={property.id} />)}
      </Flex>

      <Button fontSize="xl" mx="auto" display="block" my="5" size='sm' colorScheme='teal' variant='outline'>
        <Link href="/search?purpose=for-sale">See more</Link>
      </Button>

      <Contact />
    </Box>
  )
}


export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}