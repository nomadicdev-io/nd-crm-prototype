"use client";

import { atom, useAtom } from "jotai";
import { Button, ButtonGroup } from "../common/Button";
import FileUploadUI from "../form/FileUploadUI";
import InputUI from "../form/InputUI";
import TextareaUI from "../form/TextareaUI";
import {FiArrowRight} from 'react-icons/fi';
import axios from "axios";
import Loader from "../common/Loader";
import CompletedSwal from "../common/CompletedSwal";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const createForm = atom({
    formData: {},
    loader: false,
    isFileUploaded: false,
    isSubmitted: false
})

const CreateForm = () => {

    const router = useRouter();
    const [data, setData] = useAtom(createForm)

    const uploadFile = (event)=> {

        setData({
            ...data,
            loader: true,
            isFileUploaded: false
        })

        const imageData = new FormData();
        imageData.append("file", event.target.files[0]);
        imageData.append("upload_preset", "crm_test");
        imageData.append("cloud_name", "dcenyn23l");
        imageData.append("folder", "crm_profile");

        axios.post( "https://api.cloudinary.com/v1_1/dcenyn23l/image/upload", imageData )
        .then((response) => { 
            setData({
                ...data,
                formData: {
                    ...data.formData,
                    imageUrl: response.data.secure_url
                },
                loader: false,
                isFileUploaded: true
            })
        }) .catch((error) => { c
            console.log(error);
         });

    }

    const formControl = (value, name)=> {
        setData({
            ...data,
            formData: {
                ...data.formData,
                [name]: value
            }
        })
    }

    const submitForm = (event)=> {
        event.preventDefault();
        
        if(!data.isFileUploaded) return;

        setData({
            ...data,
            loader: true
        })

        axios.post('http://localhost:8080/api/v1/company', data.formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            setData({
                ...data,
                loader: false,
                isSubmitted: true
            })
            console.log(response)
        })

       
    }

    useEffect(()=> {
        if(data.isSubmitted) {
            setTimeout(()=> {
               // router.push('/')
            }, 1500)
        }
    }, [data.isSubmitted])

  return (
    <div className="create_from_wrapper">
        <div className="form_title">Create Profile</div>

        <form className="form_grid" onSubmit={submitForm}>
            <InputUI 
                label={'Company Name'}
                name={'company_name'}
                value={''}
                type={'text'}
                setValue={formControl}
            />

            <InputUI 
                label={'Employer Name'}
                name={'employer_name'}
                value={''}
                type={'text'}
                setValue={formControl}
            />

            <InputUI 
                label={'TRN Number'}
                name={'trn_number'}
                value={''}
                type={'text'}
                setValue={formControl}
            />

            <InputUI 
                label={'Phone'}
                name={'phone_number'}
                value={''}
                type={'number'}
                setValue={formControl}
            />

            <InputUI 
                label={'Email'}
                name={'email'}
                value={''}
                type={'email'}
                setValue={formControl}
            />

            <InputUI 
                label={'Website'}
                name={'website'}
                value={''}
                type={'text'}
                setValue={formControl}
            />

            <TextareaUI 
                label={'Address'}
                value={''}
                name={'address'}
                fullCol={true}
                setValue={formControl}
            />

            <FileUploadUI 
                label={'Upload Logo'}
                name={'logo'}
                uploadFile={uploadFile}
                isComplete={data.isFileUploaded}
            />

            <ButtonGroup fullCol={true}>
                <Button type={'submit'} title={'Create Profile'}>
                    <i><FiArrowRight /></i>
                </Button>
            </ButtonGroup>
        </form>

        {
            data.loader && <Loader />
        }

        {/* {
            data.isSubmitted && <CompletedSwal message={'Company Registration Completed'} sub={'Page will redirect to home page'}/>
        } */}


    </div>
  ) 
}

export default CreateForm