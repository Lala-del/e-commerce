import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/apis";
import { useSelector } from "react-redux";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
      center;
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

const Register = () => {
  const [name, setName]= useState("")
  const [lastname,setLastname] = useState("")
  const [email, setEmail]= useState("")
  const [password,setPassword] = useState("")
  const dispatch = useDispatch()
  const {isFetching, error} = useSelector((state) => state.user)
  const data = parseInt(password)
  const handleClick = (e) => {
    e.preventDefault();
    register(dispatch, {name,lastname,email,password})

  }

  return (
    <Container>
      <Wrapper>
        <Title>Register</Title>
        <Form>
          <Input placeholder="name" required  onChange= {(e) => setName(e.target.value)} />
          <Input placeholder="last name"  required  onChange= {(e) => setLastname(e.target.value)}/>
          <Input placeholder="email" required  onChange= {(e) => setEmail(e.target.value)} />
          <Input placeholder="password" required  onChange= {(e) => setPassword(e.target.value)} />
          <Button onClick={handleClick} disabled={isFetching}>CREATE</Button>
          { error && <Error>Something went wrong...</Error>}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
