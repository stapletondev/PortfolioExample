import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Danny!";
const bio1 = "A frontend developer";
const bio2 = "I like building things";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
    <Avatar size='xl' src='https://danielstapleton.dev/assets/img/me.jpeg' />
      <Heading as='h6' size='xs'>{greeting}</Heading>
      <Heading as='h2' size='3xl' mt='50px !important'>{bio1}</Heading>
      <Heading as='h2' size='3xl'>{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
