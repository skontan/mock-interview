import { ChakraProvider, Flex, Heading } from "@chakra-ui/react";
import { ProductCard } from "./components/ProductCard";

const PRODUCTS = [
  { productId: 0, productName: "Banana", productPrice: 5 },
  { productId: 1, productName: "Apple", productPrice: 1 },
  { productId: 2, productName: "Pear", productPrice: 10 },
  { productId: 3, productName: "Candy", productPrice: 2 },
];

/* TODO:
  1. Make a cart state that can keep track of products in cart
  2. Pass a correct countInCart
  3. Display correct total sum

  Bonus: Create a "buy X pay for Y" deal system.
*/

function App() {
  const handleAdd = () => {
    console.log("handleAdd");
  };
  const handleRemove = () => {
    console.log("handleRemove");
  };

  const getCartTotal = () => {
    return 18;
  };

  return (
    <ChakraProvider>
      <Flex
        flexDirection="row"
        justifyContent={"space-between"}
        flexWrap="wrap"
        p={10}
      >
        {PRODUCTS.map((product) => (
          <ProductCard
            {...product}
            countInCart={1}
            onAdd={handleAdd}
            onRemove={handleRemove}
          />
        ))}
      </Flex>
      <Flex justify="center">
        <Heading>Total: ${getCartTotal()}</Heading>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
