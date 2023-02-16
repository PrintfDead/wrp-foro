import React, {useState, useContext} from 'react';
import AuthContext from '../Contexts/AuthContext';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import validator from 'validator';
import axios from 'axios';
import { useNavigate, Navigate } from 'react-router-dom';

const theme = createTheme();

export default function SignIn() {
    const history = useNavigate();
    const { user, setUser } = useContext(AuthContext);
    const [ email, setEmail ] = useState("");
    const [ emailError, setEmailError ] = useState(null);

    const [ password, setPassword ] = useState("");
    const [ passwordError, setPasswordError ] = useState(null);

    if(!user) {
        history("/");
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setEmailError(null);
        setPasswordError(null);
        let errors = 0;

        if (!validator.isEmail(email)) {
            setEmailError("Email must be in correct format");
            errors++;
        }

        if (!password) {
            setPasswordError("Password is required.");
            errors++;
        }

        if (errors) return;

        const data = {
            email,
            password
        };

        try {
            const response = await axios.post("/api/auth/login", data);
            const { token, user } = response.data;
            localStorage.setItem("token", token);
            setUser(user);
            history("/");
        } catch (e) {
            const message = e.response.data.message;

            if (message === 'user_not_found') {
                setEmailError('No users with this email were found');
            } else if (message === 'wrong_password') {
                setPasswordError('Wrong Password');
            }
        }

        
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <TextField
                            required
                            fullWidth
                            label="Email Address"
                            autoFocus
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            error={!!emailError}
                            sx={{ mb: 1 }}
                        />
                        <TextField
                            required
                            fullWidth
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            error={!!passwordError}
                            helperText={passwordError}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                        Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                Forgot password?
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Container>
        </ThemeProvider>
    );
}