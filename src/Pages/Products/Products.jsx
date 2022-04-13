import React from "react";
import { Grid } from "@mui/material";

import Product from "./product/Product";

// const products = [
//   {
//     id: 1,
//     name: "shoes",
//     description: "Running shoes",
//     price: "$5",
//     image:
//       "https://images.pexels.com/photos/6847398/pexels-photo-6847398.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
//   },
//   {
//     id: 2,
//     name: "Macbook",
//     description: "Apple macbook",
//     price: "$12",
//     image:
//       "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
//   },
// ];


const Products = ({products, onAddToCart}) => {
  return (
    <main>
      <Grid container spacing={4} style={{ display:'flex', justifyContent:'center', marginTop:'50px' }} >
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart}/>
          </Grid>
        ))}
      </Grid>
    </main>
  );
};
 
export default Products;