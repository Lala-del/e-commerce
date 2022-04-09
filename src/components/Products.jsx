import { useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import { products } from "../dataa.json";
import Product from "./Product";
import axios from "axios";
import { useEffect } from "react";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap; 
    justify-content: space-between;
`;

const Products = ({cat, filters, sort}) => {
  console.log(cat,filters, sort)
  const [product, setProduct] = useState([])
  const[filteredProducts, setfilteredProducts] =useState([])

  useEffect(()=> {
    const getProducts = async() => {
      try{
        const result = await axios.get( "http://localhost:3001/products" ) 
        console.log(result)
        setProduct(result.data)
      }catch(err){}
    };
    getProducts()
  }, [])

  return (
    <Container>
      {cat 
      ? product.map((item) => (
        <Product item={item} key={item.id} />
      ))
      : product.map((item) => (
          <Product item={item} key={item.id} img={item.img} />
        ))
      }
    </Container>
  );
};

export default Products;
