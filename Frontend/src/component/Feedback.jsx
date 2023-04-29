import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBTextArea
}
from 'mdb-react-ui-kit';
import { useState } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
function Feedback() {
  const [data,setdata] = useState({
    firstName:"",
    lastName:"",
    email:"",
    feedbackmsg:"",
  })
  const handleChange = (e)=>{
    const {name,value} = e.target;
    setdata({...data,[name]:value})
  } 
  const handleClick = async()=>{
   await axios.post('http://127.0.0.1:3001/feedback',data).then((res)=>{
    alert(res.data.message);
   });
  }
  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden' style={{height:'100vh'}}>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
            Feedback <br />
            <span style={{color: 'hsl(218, 81%, 75%)'}}>how's your experience</span>
          </h1>

        </MDBCol>

        <MDBCol md='6' className='position-relative'>

          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

          <MDBCard className='my-5 bg-glass'>
            <MDBCardBody className='p-5'>

              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='First name' name="firstName" value={data.firstName} onChange={(e)=>handleChange(e)} id='form1' type='text'/>
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Last name' name="lastName" value={data.lastName} onChange={(e)=>handleChange(e)} id='form2' type='text'/>
                </MDBCol>
              </MDBRow>

              <MDBInput wrapperClass='mb-4' label='Email' name="email" value={data.email} onChange={(e)=>handleChange(e)} id='form3' type='email'/>
              <MDBTextArea wrapperClass='mb-4' label='Feedback' name="feedbackmsg" value={data.feedback} onChange={(e)=>handleChange(e)} row={3} id='form4'></MDBTextArea>
              <Button color='primary' variant='contained' onClick={()=>handleClick()} defaultValue="Send">Send</Button>
    
            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Feedback;