import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { fetchProducts } from "../../fetchData";
import Layout from "../Layout/Layout";
import ProductList from "../ProductList/ProductList";

const HomePage = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetchProducts().then((productData) => {
      setProductData(productData);
    });
  }, []);

  return (
    <Layout>
      <Box sx={{ height: "500px" }}>
        <ProductList products={productData} />
      </Box>
    </Layout>
  );
};

export default HomePage;
