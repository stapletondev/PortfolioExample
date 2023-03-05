import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack align='start' bg='white' borderRadius={20}>
      <Image src={imageSrc} alt='' objectFit='cover' height={300} width='100%' borderRadius={20} />
      <VStack p={10} align='start'>
        <Heading as='h4' size='md' color='black'>{title}</Heading>
        <Text fontSize='sm' color='black'>{description}</Text>
        <HStack>
          <Text color='black'>See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" color='black'/>
        </HStack>
      </VStack>
      </VStack>
  ) 
};

export default Card;
