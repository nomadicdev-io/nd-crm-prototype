"use client"

import { ButtonGroup, ButtonLink, IconButton } from "@/components/common/Button"
import Main from "@/components/common/Main"
import SearchUI from "@/components/common/SearchUI"
import Alert from "@/components/form/Alert"
import axios from "axios"
import { atom, useAtom } from "jotai"
import { useEffect } from "react"
import { FiArrowLeft, FiEdit, FiPlus } from "react-icons/fi"

const clientData = atom([])

const Clients = () => {

    const [data, setData] = useAtom(clientData);

    const getData = ()=> {
        axios.get('http://localhost:8080/api/v1/client')
        .then((res)=> 
            setData(res.data)
        ).catch(err=> console.log(err))
    }

    useEffect(()=> {
        getData();
    })

  return (
    <Main>
        <section className="section_">
            <div className="container_">

                <div className="section_header">
                    <h2>Clients</h2>

                    <ButtonGroup>
                        <SearchUI />
                        <ButtonLink className={'secondary_'} title={'Add Client'} href={'/clients/create'}><FiPlus /></ButtonLink>
                        <IconButton href={'/'}><FiArrowLeft /></IconButton>
                    </ButtonGroup>
                </div>

                {
                    data.length ? 
                    <div className="table_">
                        <table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Client Name</th>
                                    <th>Emirate</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                    {
                                        data.map((item, index)=>  
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.client_name}</td>
                                            <td>{item.client_emirate}</td>
                                            <td>
                                                <ButtonGroup>
                                                    <IconButton href={`/clients/${item.id}`} className="sm_ primary_"><FiEdit /></IconButton>
                                                </ButtonGroup>
                                            </td>
                                        </tr>
                                    )
                                    }
                            </tbody>
                        </table>
                    </div>

                    : 

                    <Alert message={'No data found !'}/>
                }

                

                
            </div>
        </section>
    </Main>
  )
}

export default Clients