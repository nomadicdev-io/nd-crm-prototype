"use client"

import { ButtonGroup, Button, IconButton } from "@/components/common/Button"
import Main from "@/components/common/Main"
import { atom, useAtom } from "jotai"
import { FiArrowLeft, FiArrowRight } from "react-icons/fi"
import InputUI from "../../../components/form/InputUI";
import SelectUI from "@/components/form/SelectUI"
import axios from "axios"
import { useEffect } from "react"
import Loader from "@/components/common/Loader"

const clientData = atom({
  data: {
    id: '',
    client_name: '',
    client_email: '',
    client_phone: '',
    client_address: '',
    client_website: '',
    client_quotations: [],
    client_emirate: ''
  },
  loader: false,
  isSubmited: false
})

const CreateClient = () => {

  const [data, setData] = useAtom(clientData);

  const options = [
    { value: 'Abu Dhabi', label: 'Abu Dhabi' },
    { value: 'Dubai', label: 'Dubai' },
    { value: 'Sharjah', label: 'Sharjah' },
    { value: 'Ajman', label: 'Ajman' },
    { value: 'Umm Al Quwain', label: 'Umm Al Quwain' },
    { value: 'Ras Al Khaimah', label: 'Ras Al Khaimah' },
    { value: 'Fujairah', label: 'Fujairah' },
  ]

  useEffect(()=> {
    const id_ = Date.now()
    setData({
      ...data,
      data: {
        ...data.data,
        id: id_
      }
    })
  }, [])

  const formControl = (value, name)=> {
    setData({
        ...data,
        data: {
            ...data.data,
            [name]: value
        }
    })
  }

  const submitForm = async (event)=> {
    event.preventDefault();

    try {

      setData({
        ...data,
        loader: true,
      })

      axios.post('http://localhost:8080/api/v1/client', data.data)
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
            <h2>Add Client</h2>

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
                <Button type={'submit'} title={'Update Client'}>
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

export default CreateClient