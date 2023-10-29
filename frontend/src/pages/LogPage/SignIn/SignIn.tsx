import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react'
import cl from '../LogPage.module.scss'
import { authPost } from 'entities/axios';
import useTokenStore from 'entities/store';

const SignIn = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const { setToken } = useTokenStore();

    const handleReg = async () => {
        const body = {
            username: username,
            password: password,
            userType: 1,
        }

        await authPost('test',body).then((res)=>{
            if (res) {
                setToken(res);
            }
        });
    };


    return (
        <div className={classNames(cl.Navbar,{}, [])}>
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
        <button onClick={handleReg}>Войти</button>
    </div>
    )
}

export default SignIn;