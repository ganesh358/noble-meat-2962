


import { Box, Button, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import {Link, useNavigate} from "react-router-dom"
import Footor from "../Component/Footer";
import Navbar from "../Component/Navbar";
import Navbar1 from "../Component/Navbar1";
import { AuthContext } from "../Context/AppContext";


function Login() {
  const {loginUser}=useContext(AuthContext)

  const [formState, setFormState] = useState({
    email: "",
    password: ""
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState({
      ...formState,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://reqres.in/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formState)
    })
      .then((res) => res.json())

      .then((res) => {

        console.log(res)
        loginUser(res.token)
        navigate("/dashboard")
      });
  }

  const [Change, setchange] = useState(false);
    const changeNavbar = () =>{
       if(window.scrollY >= 1){
         setchange(true);
       }
       else{
         setchange(false);
       }
    };
    window.addEventListener('scroll', changeNavbar);
  return (
    
        <Box  >
              <Box > {Change? <Navbar1/> : <Navbar/>}</Box>

              <Box >

              <Text  textAlign='center' fontSize='2rem'>Sign In</Text>
       <Box  h='30rem' mt='3rem' w='22rem' ml='31rem'>
          <Box fontSize='.9rem' pl='5' pt='1' fontWeight='500' display='flex' justifyContent='space-between' pr='2'  h='2.4rem' color='white' bg='#3b5997' >Sign in with Facebook  <Box color='white' fontSize='2xl'><ion-icon  name="logo-facebook"></ion-icon></Box></Box>
          <Box mt='2' fontSize='.9rem' pl='5' pt='1' fontWeight='500' display='flex' justifyContent='space-between' pr='2' h='2.4rem' color='white'  bg='#dd4b39' >Sign in with Google  <Box color='white' fontSize='2xl'> <ion-icon name="logo-google"></ion-icon></Box></Box>
        <FormControl onSubmit={handleSubmit}>
       
            <Box>
         
            <FormLabel fontSize='sm' mt='1rem' color='grey'>
            Email Address*
            <Input w='21.9rem' mt='1rem' type="email"  value={formState.email} name="email" onChange={handleChange} />
            </FormLabel>
          </Box>
          <Box >
          <FormLabel fontFamily='sm' color='grey' >
            Password*
            <Input w='21.9rem' mt='1rem'  type="password"
              value={formState.password} name="password" onChange={handleChange} />
         </FormLabel>

          <Box display='flex' justifyContent='space-between' fontWeight='400'  fontSize=".95rem">
            <Text color='red.400'>* Required Fields</Text>
            <Text>Forget your password?</Text>
          </Box>
          </Box>
       
       
            <Box>
            <Input bg='#e5b95f' mt='1rem' _hover={{bg:'black',color:"white"}} fontWeight='400' fontSize='1.1rem'  type="submit" value="Sign in"  onClick={handleSubmit}/>
          
          </Box>
        </FormControl>
        <Box display='flex' textAlign='center' mt='6' >
          <Box w='11rem' mt='1rem'  border='1px solid grey' height='1px'></Box>
          <Text ml='2rem'>Or</Text>
          <Box w='11rem' mt='1rem' ml='2.75rem' border='1px solid grey' height='1px'></Box>
          </Box>
         <Box>
          <Button mt='2rem' _hover={{bg:'black',color:"white"}} w='100%' bg='#e5b95f'>
            Create an Account
          </Button>
         </Box>
        </Box>
        
        </Box>
        <Box mt='2rem'><Footor/></Box>
      </Box>
  );
}
export default Login;