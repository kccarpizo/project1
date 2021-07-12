import React from 'react'
import {TextField, Button, Grid} from '@material-ui/core';
import '../assets/css/bootstrap.css';

const Register = () => {
    return (
        <div className="register">
            <div className="sign">
            <form className="form">
                <Grid > 
                        Sign In
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
                                label="Password"
                                variant="outlined"
                                color="secondary"
                                required
                            />
                        
                    </Grid>
                    <Grid container justify="center">
                        <Grid item>
                            <Button
                            type="submit"
                            variant="contained"
                            color="secondary">
                                Log In
                            </Button>
                        </Grid>

                    </Grid>
                    <Grid container justify="center">
                        <Grid item>
                            <Button
                            type="submit"
                            variant="contained"
                            outline color="secondary">
                                Create an Account
                            </Button>
                        </Grid>

                    </Grid>
                 
            </form> 
            </div>     
        </div>
        
    )
}

export default Register