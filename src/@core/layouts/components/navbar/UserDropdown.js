// ** React Imports
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Utils
import { isUserLoggedIn } from '@utils'

// ** Store & Actions
import { useDispatch } from 'react-redux'
// eslint-disable-next-line no-unused-vars
import { handleLogout } from '@store/authentication'

// ** Third Party Components
import {User, Mail, CheckSquare, MessageSquare, Settings, CreditCard, HelpCircle, Power, Key} from 'react-feather'

// ** Reactstrap Imports
import { UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap'

// ** Default Avatar Image
import defaultAvatar from '@src/assets/images/portrait/small/avatar-s-11.jpg'
import {Auth} from "aws-amplify"

const UserDropdown = () => {
  // ** Store Vars
    // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch()

  // ** State
  const [userData, setUserData] = useState(null)

  //** ComponentDidMount
  useEffect(() => {
    if (isUserLoggedIn() !== null) {
      setUserData(JSON.parse(localStorage.getItem('userData')))
    }
  }, [])

  //** Vars
  const userAvatar = (userData && userData.avatar) || defaultAvatar
    
    const signoutUser = async () => {
      await Auth.signOut().then(() => {
          window.localStorage.removeItem("user")
          window.location.reload()
      })
    }

  return (
      <UncontrolledDropdown tag='li' className='dropdown-user nav-item'>
        <DropdownToggle href='/' tag='a' className='nav-link dropdown-user-link' onClick={e => e.preventDefault()}>
          <div className='user-nav d-sm-flex d-none'>
            <span className='user-name fw-bold'>Admin</span>
            <span className='user-status'>admin</span>
          </div>
          <Avatar img={userAvatar} imgHeight='40' imgWidth='40' status='online'/>
        </DropdownToggle>
        <DropdownMenu end className="pb-0">
          {
            isUserLoggedIn() && <DropdownItem className="btn btn-danger w-100" onClick={signoutUser}>
              <Power size={14} className='me-75'/>
              <span className='align-middle'>Logout</span>
            </DropdownItem>
          }
          {
            !isUserLoggedIn() && <DropdownItem className="btn btn-danger" tag={Link} to='/login'
                                               onClick={() => dispatch(handleLogout())}>
              <Key size={14} className='me-75'/>
              <span className='align-middle'>Login</span>
            </DropdownItem>
          }
        </DropdownMenu>
      </UncontrolledDropdown>
  )
}

export default UserDropdown
