import React from "react";
import {
  VStack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

export const Login = () => {
  const [input, setInput] = useState({ username: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleSignin = (e) => {
    e.preventDefault();
    setLoading(true);
    // Handle signup logic here
    setLoading(false);
  };

  return (
    <Box className="signup-section" bg="gray.50" minH="100vh" py={40}>
      <form onSubmit={handleSignin}>
        <VStack
          spacing={4}
          bg="white"
          w={{ base: "90%", md: "50%", lg: "30%" }}
          m="auto"
          p={8}
          borderRadius="md"
          shadow="md"
        >
          <Heading color="teal.500">Log In</Heading>

          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={input.email}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              border="1px solid"
              borderColor="gray.300"
              focusBorderColor="teal.500"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={input.password}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              border="1px solid"
              borderColor="gray.300"
              focusBorderColor="teal.500"
            />
          </FormControl>
          <Button
            isLoading={loading}
            loadingText="Registering"
            type="submit"
            colorScheme="teal"
            width="full"
          >
            Login
          </Button>
          <Text mt={4} textAlign="center">
            Not registered? Try{" "}
            <Link as={RouterLink} to="/signup" color="teal.500">
              <Text as="u">SignUp</Text>
            </Link>
          </Text>
        </VStack>
      </form>
    </Box>
  );
};
