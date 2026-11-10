import React from 'react'
import Profile from './Profile'
import SearchInput from './SearchInput'




function Header() {
  return (
    <div className='header flex items-center justify-between px-8 my-4'>
      <SearchInput placeholder="Search applications..." />
      <Profile src='/profile-photo.jpg' alt='profile photo' name='Maryam' width={40} height={40} />

    </div>
  )
}

export default Header
