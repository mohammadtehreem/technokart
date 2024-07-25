import React from "react";
import { Box, Flex, Text, Link } from "@chakra-ui/react";
import { FaPenNib } from "react-icons/fa";
import "@fontsource/outfit"; // Importing the Outfit font

export const Navbar = () => {
  return (
    <Box
      position="fixed" // Fixes the navbar at the top of the page
      top={0}
      left={0}
      width="100%"
      bg="rgba(255, 255, 255, 0)" // Transparent background
      px={4}
      py={2} // Added some padding for better spacing
      shadow="sm"
      border="none"
      fontFamily="Outfit, sans-serif"
      zIndex={1000} // Ensures the navbar stays on top of other content
    >
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <FaPenNib color="teal.500" size={24} />
          <Link
            href="/"
            _hover={{
              textDecoration: "none",
              color: "teal.400",
              transform: "scale(1.05)",
              transition: "transform 0.3s ease-in-out, color 0.3s ease-in-out",
            }}
            fontSize="2xl"
            fontWeight="bold"
            color="teal.300"
            ml={2}
          >
            blogg
          </Link>
        </Box>
        <Flex alignItems="center">
          {["Home", "About", "Login", "SignUp"].map((text, index) => (
            <Link
              key={index}
              px={3}
              py={1}
              rounded="md"
              _hover={{
                textDecoration: "none",
                bg: "teal.200",
                color: "teal.800",
                transform: "scale(1.1)",
                transition:
                  "background-color 0.3s ease-in-out, color 0.3s ease-in-out, transform 0.3s ease-in-out",
              }}
              href={text === "Home" ? "/" : `/${text.toLowerCase()}`}
              color="gray.400"
              fontWeight="medium"
              mx={2}
            >
              {text}
            </Link>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};
