import { Alert, Box, Button, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footor from "../Component/Footer";
import Navbar from "../Component/Navbar";
import Navbar1 from "../Component/Navbar1";




export default function SignUp(){
    const [formState, setFormState] = useState({
        fname:"",
        lname:"",
        email: "",
        password: "",

      })
    
      const navigate = useNavigate()
    
      const handleChange = (e) => {
        const { name, value } = e.target
        setFormState({
          ...formState,
          [name]: value
        });
      }

      const handleSubmit = (e) =>{
        e.preventDefault()
        Alert('Account Succesfully Created!')
        navigate('/login')
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

    return(
        <Box>
        <Box > {Change? <Navbar1/> : <Navbar/>}</Box>

        <Box >

        <Text  textAlign='center' fontSize='2rem'>Create An Account</Text>
    <Box  h='40rem' mt='3rem' w='22rem' ml='31rem'>
    <Link to='https://www.facebook.com/login/'>
          <Box boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' fontSize='.9rem' pl='5' pt='2' fontWeight='500' display='flex' justifyContent='space-between' pr='2'  h='2.4rem' color='white' bg='#3b5997' >Sign in with Facebook  <Box mt='-.2rem' color='white' fontSize='2xl'><ion-icon  name="logo-facebook"></ion-icon></Box></Box>
          </Link>
          <Link to='https://accounts.google.com/signin/'>
          <Box boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' mt='2' fontSize='.9rem' pl='5' pt='2' fontWeight='500' display='flex' justifyContent='space-between' pr='2' h='2.4rem' color='white'  bg='#dd4b39' >Sign in with Google  <Box mt='-.2rem' color='white' fontSize='2xl'> <ion-icon name="logo-google"></ion-icon></Box></Box>
          </Link>
    <FormControl onSubmit={handleSubmit}>
         <Box>
         <FormLabel fontSize='sm' mt='1rem' color='grey' >
      <Text display='flex'>First Name<Text color='red'>*</Text></Text>
      <Input w='21.9rem' mt='1rem' type="email"  value={formState.fname} name="fname" onChange={handleChange} />
      </FormLabel>
         </Box>
         <Box>
         <FormLabel fontSize='sm' mt='1rem' color='grey'>
         <Text display='flex'>Last Name<Text color='red'>*</Text></Text>
      <Input w='21.9rem' mt='1rem' type="email"  value={formState.lname} name="lname" onChange={handleChange} />
      </FormLabel>
         </Box>
      <Box>
   
      <FormLabel fontSize='sm' mt='1rem' color='grey'>
      <Text display='flex'>Email Address<Text color='red'>*</Text></Text>
      <Input w='21.9rem' mt='1rem' type="email"  value={formState.email} name="email" onChange={handleChange} />
      </FormLabel>
    </Box>
    <Box >
    <FormLabel fontFamily='sm' color='grey' >
      <Text display='flex'>Password<Text color='red'>*</Text></Text>
      <Input w='21.9rem' mt='1rem'  type="password"
        value={formState.password} name="password" onChange={handleChange} />
   </FormLabel>

    </Box>
 
 
      <Box>
      <Input bg='#e5b95f' mt='1rem' _hover={{bg:'black',color:"white"}} fontWeight='400' fontSize='1.1rem'  type="submit" value="Create an Account"  onSubmit={handleSubmit}/>
    
    </Box>
  </FormControl>
  <Box display='flex' textAlign='center' mt='6' >
    <Box w='11rem' mt='1rem'  border='1px solid grey' height='1px'></Box>
    <Text ml='2rem'>Or</Text>
    <Box w='11rem' mt='1rem' ml='2.75rem' border='1px solid grey' height='1px'></Box>
    </Box>
   <Box>
    <Link to='/login'>
    <Button mt='2rem' _hover={{bg:'black',color:"white"}} w='100%' bg='#e5b95f'>
      Sign in
    </Button>
    </Link>
   </Box>
  </Box>
  
  </Box>
  <Box mt='2rem'><Footor/></Box>
</Box>
    )
}