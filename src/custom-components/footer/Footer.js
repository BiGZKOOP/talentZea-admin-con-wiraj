// ** Icons Import
import {Facebook, Heart, Instagram, Mail, Phone} from 'react-feather'
import {Card} from "reactstrap"

const Footer = () => {
    return (
        <Card className="m-0 bg-tumblr container-fluid text-light p-1 d-center bg-semi-dark">
            <p className="f-Londrina">Connect with us</p>
            <div className="d-flex mb-2">
                <Facebook className="mr-1 footer-icon"/>
                <Instagram className="mr-1"/>
                <Mail className="mr-1"/>
                <Phone className="mr-1"/>
            </div>
            <p className='clearfix mb-0 word-break-all'>
      <span className='float-md-start d-block d-md-inline-block mt-25 f-Londrina text-medium'>
        COPYRIGHT © {new Date().getFullYear()}{' '}
          <span className="text-purple font-bold text-large">Talent Zea</span>
          , All rights Reserved
      </span>
            </p>
        </Card>
    )
}
export default Footer
