import {
  Card,
  Stack,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

export const ProductCard = ({
    productId,
  productName,
  productPrice,
  countInCart,
  onAdd,
  onRemove,
}) => {
  return (
    <Card maxW="xs" mb={10} display="block">
      <CardBody>
        <Stack>
          <Heading size="md">{productName}</Heading>
          <Text color="blue.600" fontSize="2xl">
            ${productPrice}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter justifyContent={"center"}>
        <ButtonGroup spacing="2">
          <Button variant="ghost" colorScheme="blue" onClick={onRemove}>
            -
          </Button>
          <Text color="blue.600" fontSize="2xl">
            {countInCart}
          </Text>
          <Button variant="solid" colorScheme="blue" onClick={onAdd}>
            +
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
