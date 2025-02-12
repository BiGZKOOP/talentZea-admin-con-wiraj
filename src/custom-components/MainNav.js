import {Button, Collapse, DropdownItem, Nav, Navbar, NavItem, NavLink} from "reactstrap"
import {AlignJustify, Briefcase, Home, Info, Key, LogIn, LogOut, Phone, Power, Rss} from "react-feather"
import {useState} from "react"
import logo from "../assets/custom_images/logo.png"
import Avatar from "../@core/components/avatar"
import {useHistory} from "react-router-dom"

const MainNav = () => {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    const history = useHistory()

    return <Navbar container={false}
                   className='d-flex justify-content-between justify-content-md-between w-100 bg-transparent'
                   expand='md' light>
        <Button color='dark' className='btn-icon navbar-toggler mr-2' onClick={toggle}>
            <AlignJustify size={21}/>
        </Button>
        <Collapse isOpen={isOpen} navbar>
            <div className='profile-tabs d-flex justify-content-between w-100 flex-wrap mt-1 mt-md-0'>
                <div className="ml-2 ml-lg-0 brand-nav-img clickable"
                >
                    <img width="100px" className="object-fit" src={logo}/>
                </div>
                <Nav className='mb-0' pills>
                    <NavItem className="ml-5">
                        <NavLink
                            className='fw-bold' active>
                            <span className='d-none d-md-block text-light'>THIS IS THE PREVIEW</span>
                            <Home className='d-block d-md-none' size={14}/>
                        </NavLink>
                    </NavItem>
                    <NavItem className="ml-5">
                        <NavLink
                            onClick={() => history.goBack()}
                            className='fw-bold btn btn-outline-danger'>
                            <span className='d-none d-md-block text-danger'>BACK</span>
                            <Home className='d-block d-md-none' size={14}/>
                        </NavLink>
                    </NavItem>
                </Nav>
                <div className="d-flex align-items-center">
                    <div className="clickable mr-2">
                        <Avatar
                            img={"https://cdn.vox-cdn.com/thumbor/8eRpMBfVFeMnzzTz95UZQnnqqtE=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/20103707/Screen_Shot_2020_07_21_at_9.38.25_AM.png"}
                            imgHeight='40' imgWidth='40' status='online'/>
                    </div>
                </div>
            </div>
        </Collapse>
    </Navbar>
}

export default MainNav