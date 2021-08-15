import React,{useState}from 'react'
import {TextField, Button, Grid} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import '../assets/css/bootstrap.css';

const Register = () => {

    const [dQuest, setdQuest] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
  });

  const submitForm = (event) => {
      event.preventDefault();

      fetch ("http://localhost:8080/users",{
        method: "POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify(dQuest)

      })
      .then(res=>res.json())
      .then(data => {
        alert("Sucessfully added");
        
      })
      

  }

    return (
        <div className="register">
            <div className="sign">
            <form className = "form" action="/" method = "POST" onSubmit={submitForm}>
                <Grid > 
                        Create a New Account
                </Grid>
                <Grid>

                        <TextField 
                            label="First Name"
                            variant="outlined"
                            color="secondary"
                            required
                            value = {dQuest.firstName} onChange = {(event) => {

                                setdQuest({
                                  ...dQuest,
                                  firstName:event.target.value
                                })}}
                        />
                </Grid>
                <Grid>
                        <TextField 
                            label="Last Name"
                            variant="outlined"
                            color="secondary"
                            required
                            value = {dQuest.lastName} onChange = {(event) => {

                                setdQuest({
                                  ...dQuest,
                                  lastName:event.target.value
                                })}}
                        />
                    
                </Grid>
                    <Grid >
                        <TextField 
                            label="Email"
                            variant="outlined"
                            color="secondary"
                            required
                            value = {dQuest.email} onChange = {(event) => {

                                setdQuest({
                                  ...dQuest,
                                  email:event.target.value
                                })}}
                        />
                    </Grid>
                    <Grid>
                        
                            <TextField 
                                label="Set Password"
                                variant="outlined"
                                color="secondary"
                                required
                                value = {dQuest.password} onChange = {(event) => {

                                    setdQuest({
                                      ...dQuest,
                                      password:event.target.value
                                    })}}
                                
                            />
                        
                    </Grid>
                    <Grid container justify="center">
                        <Grid item>
                            <Button
                                type="submit"
                                endIcon={<NavigateNextIcon />}
                                variant="contained"
                                color="secondary">
                                Sign up
                            </Button>
                        </Grid>
                    </Grid>
                 
            </form> 
            </div>     
        </div>
        
    )
}

export default Register
