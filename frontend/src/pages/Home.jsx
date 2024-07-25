import React from "react";
import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import "@fontsource/outfit";

const MotionHeading = motion(Heading);
const MotionText = motion(Text);

export const Home = () => {
  return (
    <Box
      height="100vh"
      backgroundImage="url('https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      backgroundSize="cover"
      backgroundPosition="center calc(50% - 100px)"
      backgroundRepeat="no-repeat"
      backgroundAttachment="fixed"
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
          Welcome to Blogg
        </MotionHeading>
        <MotionText
          fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
          fontFamily="Outfit, sans-serif"
          color="gray.100"
          mb={8}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Discover amazing articles and stories from our talented writers.
        </MotionText>
        <Button
          as={RouterLink}
          to="/blogs"
          border="2px"
          borderColor="teal.500"
          color="teal.500"
          bg="transparent"
          size="lg"
          borderRadius="md"
          px={6}
          py={3}
          _hover={{
            bg: "teal.500",
            color: "white",
            borderRadius: "30px",
            transform: "scale(1.05)",
            transition:
              "background-color 0.4s ease, color 0.4s ease, border-radius 0.4s ease", // Slower border-radius transition
          }}
          _active={{
            bg: "teal.600",
            borderColor: "teal.600",
            transform: "scale(1)",
          }}
        >
          Read Our Blogs
        </Button>
      </Flex>
    </Box>
  );
};
