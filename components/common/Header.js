import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/public/logo-icon.svg'
import { Button, ButtonGroup, IconButton } from './Button'
import { FiSettings, FiLogOut } from 'react-icons/fi'
import { BiAddToQueue } from 'react-icons/bi'


function Header() {
  return (
    <header className='header_'>
        <div className='container_'>
            <div className='nav_wrapper'>
                <Link href={'/'} className='nav_logo'>
                    <Image src={logo} alt='CRM' width={100} height={100} />
                </Link>

                <ButtonGroup>
                    <IconButton href={'/settings'}>
                        <FiSettings />
                    </IconButton>

                    <IconButton href={'/settings'}>
                        <FiLogOut />
                    </IconButton>

                    <Button 
                    title='Add Client'
                    type='button'
                    >
                        <BiAddToQueue />
                    </Button>
                </ButtonGroup>

            </div>
        </div>
    </header>
  )
}

export default Header
