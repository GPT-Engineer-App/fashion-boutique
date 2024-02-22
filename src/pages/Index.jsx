import { Box, Container, SimpleGrid, Image, Text, Heading, Stack, Button, useColorModeValue } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const Index = () => {
  const products = [
    {
      id: 1,
      name: "Classic Tee",
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1629956356549-63b8a150c8ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwdGVlfGVufDB8fHx8MTcwODYxNTEzOHww&ixlib=rb-4.0.3&q=80&w=1080',
    },
    {
      id: 2,
      name: "Denim Jacket",
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZW5pbSUyMGphY2tldHxlbnwwfHx8fDE3MDg2MTUxMzl8MA&ixlib=rb-4.0.3&q=80&w=1080',
    },
    {
      id: 3,
      name: "Leather Boots",
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1613673720017-56e42d90fee4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwYm9vdHN8ZW58MHx8fHwxNzA4NjE1MTM5fDA&ixlib=rb-4.0.3&q=80&w=1080',
    },
    // Add more products as needed
  ];

  return (
    <Container maxW={"7xl"} p="12">
      <Heading as="h1" mb="8" textAlign="center">
        Trendy Clothing Store
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {products.map((product) => (
          <Box key={product.id} bg={useColorModeValue("white", "gray.800")} boxShadow={"2xl"} rounded={"md"} overflow={"hidden"} p="6">
            <Image src={product.image} alt={product.name} objectFit="cover" width="100%" height="300px" mb="6" />

            <Stack>
              <Text color={"gray.500"} textTransform={"uppercase"} fontWeight={800} fontSize={"sm"} letterSpacing={1.1}>
                {product.name}
              </Text>
              <Text color={"gray.900"} fontSize={"2xl"} fontWeight={"500"}>
                ${product.price.toFixed(2)}
              </Text>
            </Stack>
            <Button leftIcon={<FaShoppingCart />} mt="4" w="full" colorScheme="blue">
              Add to Cart
            </Button>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Index;
