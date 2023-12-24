import React, { useMemo } from 'react'

import { Outlet } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'

const Page = () => {
  const header = useMemo(() => <Header />, [])
  const footer = useMemo(() => <Footer />, [])

  return (
    <div className='content'>
      <div className='wrapper'>
        {header}
        <main className='main'>
          <div className='content__text'>
            <Outlet />
          </div>
        </main>
        {footer}
      </div>
    </div>
  )
}

export default Page
