"use client"

import { ButtonGroup, Button, ButtonLink, IconButton } from "@/components/common/Button"
import Main from "@/components/common/Main"
import InputUI from "../../../components/form/InputUI";
import axios from "axios"
import { atom, useAtom } from "jotai"
import { useEffect } from "react"
import { FiArrowLeft, FiArrowRight } from "react-icons/fi"
import { useParams } from 'next/navigation';
import SelectUI from "@/components/form/SelectUI"
import Loader from "@/components/common/Loader"

const clientData = atom({
    data: {},
    loader: false,
    isSubmited: false
  })

const EditClient = () => {

    const params = useParams();
    const [data, setData] = useAtom(clientData);

    const getDetails = async (id)=> {
        await axios.get(`http://localhost:8080/api/v1/client/${id}`)
        .then((res)=> {
            setData({
                ...data,
                data: res.data
            })
        })
    }

    const options = [
        { value: 'Abu Dhabi', label: 'Abu Dhabi' },
        { value: 'Dubai', label: 'Dubai' },
        { value: 'Sharjah', label: 'Sharjah' },
        { value: 'Ajman', label: 'Ajman' },
        { value: 'Umm Al Quwain', label: 'Umm Al Quwain' },
        { value: 'Ras Al Khaimah', label: 'Ras Al Khaimah' },
        { value: 'Fujairah', label: 'Fujairah' },
      ]

    const formControl = (value, name)=> {
        setData({
            ...data,
            data: {
                ...data.data,
                [name]: value
            }
        })
    }

    useEffect(()=> {
        getDetails(params.id)
    }, []) 

    const submitForm = async (event)=> {
        event.preventDefault();
    
        try {
    
          setData({
            ...data,
            loader: true,
          })
    
          axios.post(`http://localhost:8080/api/v1/client/${params.id}`, data.data)
          .then((res)=> 
            setData({
              ...data,
              loader: false,
            })
          )
    
        }catch(error){
          console.log(error)
        }
    
      }

  return (
    <Main>
        <section className="section_">
            <div className="container_">

                <div className="section_header">
                    <h2>Edit Client</h2>
                    <ButtonGroup>
                        <IconButton href={'/clients'}><FiArrowLeft /></IconButton>
                    </ButtonGroup>
                </div>

                <div className="body_container">
                    <form className="form_grid" onSubmit={submitForm}>

                        <InputUI 
                            label={'Client Name'}
                            name={'client_name'}
                            value={data.data.client_name}
                            type={'text'}
                            setValue={formControl}
                        />
            
                        <InputUI 
                            label={'Client Email'}
                            name={'client_email'}
                            value={data.data.client_email}
                            type={'email'}
                            setValue={formControl}
                        />
            
                        <InputUI 
                            label={'Client Phone'}
                            name={'client_phone'}
                            value={data.data.client_phone}
                            type={'number'}
                            setValue={formControl}
                        />
            
                        <InputUI 
                            label={'Client Address'}
                            name={'client_address'}
                            value={data.data.client_address}
                            type={'text'}
                            setValue={formControl}
                        />
            
                        <InputUI 
                            label={'Client Website'}
                            name={'client_website'}
                            value={data.data.client_website}
                            type={'text'}
                            setValue={formControl}
                        />
            
                        <SelectUI 
                        label={'Emirate'}
                        name={'client_emirate'}
                        options={options}
                        setValue={formControl}
                        />
            
                        <ButtonGroup fullCol={true}>
                            <Button type={'submit'} title={'Create Client'}>
                                <i><FiArrowRight /></i>
                            </Button>
                        </ButtonGroup>
            
                    </form>
        
                    {data.loader && <Loader />}
                </div>

            </div>
        </section>
    </Main>
  )
}

export default EditClient;