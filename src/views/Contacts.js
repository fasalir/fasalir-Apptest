import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
  Link
} from "react-router-dom";
import Modal from "./../components/Modal";

import { useSelector, useDispatch } from 'react-redux';
import { setForm, resetForm, setModalForm } from './../redux/contactFormSlice';

function Contacts() {
  const contactStore = useSelector((state) => state.contact);
  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState(null);
  // const [successMessage, setSuccessMessage] = useState(null);
  const [contacts, setContacts] = useState([]);
  const [showmodal, setShowmodal] = useState(false);

  console.log(contactStore);

  const changeFirstname = (e)=> {
    dispatch(setForm({text: e.target.value, field: 'firstName'}))
  }

  const changeLastname = (e)=> {
    dispatch(setForm({text: e.target.value, field: 'lastName'}))
  }

  const changeAge = (e)=> {
    dispatch(setForm({text: e.target.value, field: 'age'}))
  }

  const changeImagelink = (e)=> {
    dispatch(setForm({text: e.target.value, field: 'imageLink'}))
  }

  const resetContactForm = ()=> {
    dispatch(resetForm());
  }

  const submitNewContact = ()=> {
    setErrorMessage(null);
    if(contactStore.firstName !== '' && contactStore.lastName !== '' && contactStore.age !== '' && contactStore.imageLink !== ''){
      var url = 'https://simple-contact-crud.herokuapp.com/contact';
      if(contactStore.id){
        url = 'https://simple-contact-crud.herokuapp.com/contact/'+contactStore.id;
      }

      let options = {
        method: contactStore.id ? 'PUT':'POST',
        url: url,
        data: {
          "firstName": contactStore.firstName,
          "lastName": contactStore.lastName,
          "age": contactStore.age,
          "photo": contactStore.imageLink
        }
      }
      axios(options)
      .then(function(response) {
        if(response.status >= 200){
          // setSuccessMessage(response.data.message);
        }
        dispatch(resetForm());
        // console.log(response.data.data)
      })
      .catch((e)=>{
        if(e.response.status === 400){
          setErrorMessage(e.response.data.message);
        }
        console.log(e.response, 'dsdsdsdsds')
      })
    }
  }

  const getContacts = ()=> {
    setErrorMessage(null);
    let options = {
      method: 'GET',
      url: 'https://simple-contact-crud.herokuapp.com/contact'
    }
    axios(options)
    .then(function(response) {
      if(response.status >= 200){
        setContacts(response.data.data);

        setTimeout(()=> {
          console.log(contactStore.contacts,'sasasas')
        },200)
      }
    })
    .catch((e)=>{
      
    })
  }

  const deleteContact = (id)=> {
    setErrorMessage(null);
    let options = {
      method: 'DELETE',
      url: 'https://simple-contact-crud.herokuapp.com/contact/'+id
    }
    axios(options)
    .then(function(response) {
      if(response.status >= 200){
        setContacts(response.data.data);

        setTimeout(()=> {
          console.log(contactStore.contacts,'sasasas')
        },200)
      }
    })
    .catch((e)=>{
      
    })
  }

  useEffect(() => {
    getContacts();
  }, []);

  const setContactForm = (item)=> {
    dispatch(setForm({text: item.firstName, field: 'firstName'}))
    dispatch(setForm({text: item.lastName, field: 'lastName'}))
    dispatch(setForm({text: item.age, field: 'age'}))
    dispatch(setForm({text: item.photo, field: 'imageLink'}))
    dispatch(setForm({text: item.id, field: 'id'}))
  }

  // Click on image 
  const selectContact = (item)=> {
    setShowmodal(true);
    dispatch(setModalForm(item));
    // setSelectedImage(item);
  }

  return (
    <div className="st-container">
      <div className="row" style={{backgroundColor: 'white'}}>
        <div className="col-md-7" style={{height: '420px', overflowY: 'auto',/*width: '60vw', *//*backgroundColor: 'white',*/ padding: '24px'}}>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <p>Save New Contact</p>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>First Name</label>
                <input value={contactStore.firstName} type="text" onChange={changeFirstname} className="form-control"/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Last Name</label>
                <input value={contactStore.lastName} type="text" onChange={changeLastname} className="form-control"/>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label>Age</label>
            <input value={contactStore.age} min="10" onChange={changeAge} type="number" className="form-control" style={{width: '50%'}}/>
          </div>
          <div className="form-group">
            <label>Image Link</label>
            <input value={contactStore.imageLink} type="text" onChange={changeImagelink} placeholder="Input your image link" className="form-control"/>
          </div>
          <hr/>
          <div style={{textAlign: 'right'}}>
            <button className="btn btn-secondary" onClick={resetContactForm}>Reset Form</button>&nbsp;
            <button className="btn btn-primary" onClick={submitNewContact}>Send</button><br/>
            {
              errorMessage ? <span style={{color: 'red'}}>{errorMessage}</span> : null
            }
          </div>
        </div>
        <div className="col-md-5" style={{height: '420px', overflowY: 'auto',/*width: '40vw', */backgroundColor: '#133f6f3d', padding: '24px'}}>
          {
            contacts.map((item)=>
              <div key={item.id} className="row" style={{justifyContent: 'space-between', height: '120px'}}>
                <div className="col-md-4">
                  <div style={{width: 60, height: 60, borderRadius: 60, backgroundColor: 'black', overflow: 'hidden'}}>
                    <img src={item.photo} width="60"/>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="row">
                    <div className="col-md-9">
                      <span onClick={()=> selectContact(item)} className="contact-name">{item.firstName} {item.lastName}</span><br/>
                      <span>{item.age} years old</span>
                    </div>
                    <div className="col-md-3" style={{textAlign: 'right', justifyContent: 'center'}}>
                      <i onClick={()=> deleteContact(item.id)} className="fa fa-close" style={{color: 'red', cursor: 'pointer'}}></i><br/>
                      <i onClick={()=> setContactForm(item)} className="fa fa-pencil" style={{color: '#257af8', cursor: 'pointer'}}></i>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
      <Modal show={showmodal}>
        <div onClick={()=> setShowmodal(false)} className="st-modal-1"></div>
        <div style={{top: '50%', left: '50%', transform: 'translate(-50%,-50%)', backgroundColor: 'white', position: 'absolute', zIndex: 10, width: '300px', height: '450px', textAlign: 'center', padding: '12px', justifyContent: 'center', alignItems: 'center'}}>
          <div style={{alignSelf: 'center', width: 150, height: 150, borderRadius: 150, backgroundColor: 'black', overflow: 'hidden'}}>
            <img src={contactStore.modalForm.photo} width="150"/>
          </div>
          <p>{contactStore.modalForm.firstName} {contactStore.modalForm.lastName}</p>
          <p>{contactStore.modalForm.age} years old</p>
        </div>
      </Modal>
    </div>
  );
}

export default Contacts;