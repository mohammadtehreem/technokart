import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import "@fontsource/outfit"; // Importing the Outfit font

const MotionHeading = motion(Heading);
const MotionText = motion(Text);

export const About = () => {
  return (
    <Box
      height="100vh"
      backgroundImage="url('https://images.unsplash.com/photo-1472289065668-ce650ac443d2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <Flex
        height="100%"
        alignItems="center"
        justifyContent="center"
        bg="rgba(0, 0, 0, 0.5)"
        color="white"
        textAlign="center"
        flexDirection="column"
        px={4}
      >
        <MotionHeading
          as="h1"
          fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
          fontFamily="Outfit, sans-serif"
          color="teal.200"
          mb={4}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Us
        </MotionHeading>
        <MotionText
          fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
          fontFamily="Outfit, sans-serif"
          color="gray.100"
          maxWidth="600px"
          mx="auto"
          mb={8}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          At Blogg, we are passionate about creating a space where voices are
          heard and stories are shared. Our team of dedicated writers and
          editors work tirelessly to bring you engaging and insightful content
          on a variety of topics. Join us as we explore the world through words
          and connect with a community of readers and writers alike.
        </MotionText>
      </Flex>
    </Box>
  );
};
