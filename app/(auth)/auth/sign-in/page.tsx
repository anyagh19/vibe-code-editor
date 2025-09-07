import SignInFormClient from '@/modules/auth/components/sign-in-form-client'
import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <>
    <Image src="/login.svg" alt='login' width={200} height={200} className='m-6 object-cover' />
    <SignInFormClient />
    </>
  )
}

export default page