import React, { useContext } from 'react';
import { Box, Container, Grid } from '@mui/material';
import { GlobalState } from '../../../GlobalState';
import ProductItem from '../utils/productItem/ProductItem';

const Products = () => {
  const state = useContext(GlobalState);
  const [products] = state.ProductsAPI.products;
  return (
    <Box my={5}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          {products.map((product) => {
            return (
              <Grid item xs={6} xl={3} key={product._id}>
                <ProductItem product={product} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Products;