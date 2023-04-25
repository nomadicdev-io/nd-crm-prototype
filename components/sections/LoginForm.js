"use client";

import { atom, useAtom } from "jotai";
import { Button, ButtonGroup } from "../common/Button";
import InputUI from "../form/InputUI";
import axios from "axios";
import Loader from "../common/Loader";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {FiArrowRight} from 'react-icons/fi';

const loginData = atom({
    credentials: {},
    loader: false,
})

const LoginForm = () => {

    const router = useRouter()
    const [data, setData] = useAtom(loginData)

    const formControl = (value, name)=> {
        setData({
            ...data,
            credentials: {
                ...data.credentials,
                [name]: value
            }
        })
    }

    const login = (event)=> {
        event.preventDefault();

        if(data.credentials.username && data.credentials.password) {
            setData({
                ...data,
                loader: true
            })
            console.log(data);
        }
        
    }

    return (
        <div className="login_wrapper">

            <div className="login_logo">
                <Image 
                    src={'/logo-icon.svg'}
                    width={'80'}
                    height={'80'}
                    alt="CRM"
                />
            </div>

            <form className="form_grid" onSubmit={login}>

                <div className="form_title">Welcome Back!</div>

                <InputUI 
                    label={'Username'}
                    name={'username'}
                    value={''}
                    type={'text'}
                    setValue={formControl}
                    fullCol={true}
                />
                <InputUI 
                    label={'Password'}
                    name={'password'}
                    value={''}
                    type={'password'}
                    setValue={formControl}
                    fullCol={true}
                />

                <ButtonGroup fullCol={true}>
                    <Button type={'submit'} title={'Login'}>
                        <i><FiArrowRight /></i>
                    </Button>
                </ButtonGroup>

            </form>

            {
                data.loader && <Loader />
            }
        </div>
    )
}

export default LoginForm