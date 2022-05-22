// ** Logo
// import logo from '@src/assets/images/logo/logo.png'
import logo from '../../../assets/custom_images/logo.png'

const SpinnerComponent = () => {
    return (
        <div className='fallback-spinner app-loader'>
            <img className='fallback-logo animate__animated animate__bounce' style={{width: "200px"}} src={logo} alt='logo' />
            {/*<div className='loading'>*/}
            {/*  <div className='effect-1 effects'></div>*/}
            {/*  <div className='effect-2 effects'></div>*/}
            {/*  <div className='effect-3 effects'></div>*/}
            {/*</div>*/}
        </div>
    )
}

export default SpinnerComponent
