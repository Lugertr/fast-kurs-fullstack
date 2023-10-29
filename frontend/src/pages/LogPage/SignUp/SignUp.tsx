import useTokenStore from 'entities/store';
import cl from '../LogPage.module.scss'
import React, { useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames';
import { authPost } from 'entities/axios';

const SignUp = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const { setToken } = useTokenStore();

    const handleLogin = async () => {
        const body = {
            username: username,
            password: password,
            userType: 1,
        }

        await authPost('test',body).then((res)=>{
            setToken('your-jwt-token');
        });
    };


    return (
        <div className={classNames(cl.Navbar,{}, ['log'])}>
            <h1>Авторизация</h1>
            <div>
                <div>
                    <label>Логин:</label>
                    <input placeholder='Логин' onChange={(e) => setUsername(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label>Пароль:</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={togglePasswordVisibility}>
                        {showPassword ? 'Hide' : 'Show'} Password
                    </button>
                </div>
            </div>
            <button onClick={handleLogin}>Войти</button>
        </div>
    )
}

export default SignUp;