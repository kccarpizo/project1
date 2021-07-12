import React from 'react'
import {TextField, Button, Grid} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import '../assets/css/bootstrap.css';

const Register = () => {
    return (
        <div className="register">
            <div className="sign">
            <form className="form">
                <Grid > 
                        Create a New Account
                </Grid>
                <Grid>

                        <TextField 
                            label="First Name"
                            variant="outlined"
                            color="secondary"
                            required
                        />
                </Grid>
                <Grid>
                        <TextField 
                            label="Last Name"
                            variant="outlined"
                            color="secondary"
                            required
                        />
                    
                </Grid>
                    <Grid >
                        <TextField 
                            label="Email"
                            variant="outlined"
                            color="secondary"
                            required
                        />
                    </Grid>
                    <Grid>
                        
                            <TextField 
                                label="Set Password"
                                variant="outlined"
                                color="secondary"
                                required
                                
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
