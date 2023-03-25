import React, {useState, useContext} from 'react';
import AuthContext from '../Contexts/AuthContext';
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
            const { token, rows } = response.data;
            localStorage.setItem("token", token);
            console.log(token);
            console.log(rows);
            setUser(rows);
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
        <main>
            <div className="div-center">
                <div className="content login">
                    <h1 className="text-center mb-3">
                        <img src="" alt="Logo" id="brand-logo" />
                    </h1>
                    <div className="card card-body w-25">
                        <h1 className="text-center mb-3">PANEL DE USUARIO</h1>
                        <p className="text-center mb-3">Introduce tu correo electronico y contraseña</p>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <div className="form-group">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text"><i class="fas fa-envelope-open-text"></i></span>
                                        <input 
                                        id="email" 
                                        name="email" 
                                        type="email" 
                                        className="form-control" 
                                        placeholder="Correo eléctronico" 
                                        autoComplete="current-email"
                                        value={email}
                                        error={!!emailError}
                                        helperText={emailError}
                                        required
                                        fullWidth
                                        autoFocus
                                        onChange={e => setEmail(e.value.email)}/>
                                    </div>
                                    <div className="input-group mb-2">
                                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                                        <input 
                                        type="password" 
                                        name="password" 
                                        id="password" 
                                        className="form-control" 
                                        placeholder="Contraseña"
                                        autoComplete='currrent-password'
                                        value={password}
                                        error={!!passwordError}
                                        helperText={passwordError}
                                        required
                                        fullWidth
                                        onChange={e => setPassword(e.value.password)}/>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-sucess btn-block" fullWidth variant="contained">Ingresar</button>
                                <br />
                                <a href="/reset">
                                    <p className="text-center mb-3">¿Haz olvidado la contraseña?</p>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}