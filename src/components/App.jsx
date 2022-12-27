
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { theme } from "../theme/theme";
import { Contact } from "./ContactList/ContactList";
import Container from "./Container/Conteiner.styled";
import { ContactForm } from "./Form/Form";
import { Filter } from "./Filter/Filter";
import { PrimaryTitle, SecondaryTitle } from "./Titles/Titles";

import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/opirations';

export const initContacts =[
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]

export const App = () =>{
  const dispatch = useDispatch();
  const {isLoading} = useSelector(state => state.contacts)

  useEffect(() => {
    dispatch(fetchContacts())
   
  }, [dispatch])
  

  return (

    <ThemeProvider theme={theme}>
      <Container>
        <ToastContainer/>

        <Container
          display="flex"
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          bg='#ededf0'
          p={4}
          boxShadow="0px 2px 10px -3px rgba(0,0,0,0.3)"
          
        >
          <PrimaryTitle>Phonebook</PrimaryTitle>
            <ContactForm />
        </Container>

        <Container
          display="flex"
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
        >
          <SecondaryTitle>Contact</SecondaryTitle>
            <Filter title="Find contacs by name"/>
            {isLoading 
              ? <p>Loading contacts...</p>
              : <Contact/>
              }
            
        </Container>

      </Container>
    </ThemeProvider>
  );
    

}
