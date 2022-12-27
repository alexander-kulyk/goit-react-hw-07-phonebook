import { createSlice } from "@reduxjs/toolkit";
//import { nanoid } from 'nanoid';
//import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addContact, deleteContact, fetchContacts } from "./opirations";


const phoneBookSlice = createSlice({
    name: 'phoneBook',
    initialState:{
        items: [],
        isLoading: false,
        error: null
    },
    extraReducers:{
        [fetchContacts.pending](state){
            state.isLoading =true;
        },

        [fetchContacts.fulfilled](state, action){
            state.isLoading =false;
            state.error = null;
            state.items = action.payload;
        },
        [fetchContacts.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        [addContact.pending](state){
            console.log('pending')
            state.isLoading = true
        },
        [addContact.fulfilled](state, action){
            
            console.log('action.payload', action.payload)
            state.isLoading = false;
            state.items.push(action.payload)

            //const checkContact = state.items.find(item =>item.name === name);
           // const checkContact = contacts.some(item => item.name === name);

        //    if (checkContact  !== undefined) {
        //         toast.error(`${name} is already in contacts.`)
        //     }else{
        //     state.items.push({
        //         id: nanoid(),
        //         name,
        //         phone,})
        //     }

        },


        [deleteContact.pending](state) {
            state.isLoading = true;
        },
        [deleteContact.fulfilled](state, action) {
            console.log('action', action.payload)
            state.isLoading = false;
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
        [deleteContact.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
          },
    }

    // reducers:{
    //     fetchingInProgress (state){
    //         state.isLoading = true;
            
    //     },

    //     fetchingSuccess(state, action){
    //         state.isLoading = false;
    //         state.error = null;
    //         state.items = action.payload

    //     },
    //     fetchingError(state, action){
    //             state.isLoading =  true;
    //             state.error= action.payload;
    //     },

    //     addNewCotact(state, action){
    //         const name = action.payload.name;
    //         const phone = action.payload.number

    //         const checkContact = state.items.find(item =>item.name === name);
    //         // const checkContact = contacts.some(item => item.name === name);
            
    //         if (checkContact  !== undefined) {
    //             toast.error(`${name} is already in contacts.`)
    //         }else{
    //             state.items.push({
    //                 id: nanoid(),
    //                 name,
    //                 phone,
    //             })
    //         }
            
    //     },
    //     deleteContact(state, action){
    //         const contactId = action.payload.id
    //         state.contacts = state.contacts.filter(contact => contact.id !== contactId)
    //     },

    // }

});


export const {addNewCotact, fetchingInProgress, fetchingSuccess, fetchingError}  = phoneBookSlice.actions;

export default phoneBookSlice.reducer

