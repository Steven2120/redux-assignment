import { Box } from "@mui/system";
import React from "react";
import CartItem from "../CartItem/CartItem";
import { useShoppingCart } from "../Context/ShoppingCartContext";
import Layout from "../Layout/Layout";

const CartPage = () => {
  const { shoppingCart } = useShoppingCart();

  if (shoppingCart.length < 1) {
    return <Layout>No items to show</Layout>;
  }

  return (
    <Layout>
      <Box>
        {shoppingCart.map((item) => (
          <Box key={item.id}>
            <CartItem item={item} />
          </Box>
        ))}
      </Box>
    </Layout>
  );
};

export default CartPage;
