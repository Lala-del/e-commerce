import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/apis";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
const Error = styled.span`
  color: red;
`;

const UserProfile = () => {
     
     const cart =  useSelector(state=>state.cart.products)
     console.log(cart)
     const products = useSelector(state => state.user)
     console.log(products)
    //   products.push.cart

    // const [data,setData] = useState({
    //     email: products.currentUser?.user?.email,
    //     name: products.currentUser?.user?.name, 
    //     lastname: products.currentUser?.user?.lastname
    // })

    const [email, setEmail] = useState(products.currentUser?.user?.email,)
    const [name, setName] = useState(products.currentUser?.user?.name)
    const [lastname, setLastname]= useState(products.currentUser?.user?.lastname)

    console.log(email)

    
   
  return (
    <Container>
      <Wrapper>
        <Title></Title>
        <Form>
          <Input placeholder="name" value={name} required  onChange= {(e) =>{setName(e.target.value)} }  />
          <Input placeholder="last name" value={lastname}  required onChange= {(e) =>{setLastname(e.target.value)} } />
          <Input placeholder="email" value={email} required  onChange= {(e) =>{setEmail(e.target.value)} } />
        </Form>
      </Wrapper>
    </Container>
  );
};

export default UserProfile;