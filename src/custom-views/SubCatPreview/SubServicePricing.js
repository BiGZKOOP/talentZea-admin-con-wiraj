// ** React Imports
import {Fragment } from 'react'
// ** Demo Components
import PricingFaqs from './PricingFaqs'

// ** Styles
import '@styles/base/pages/page-pricing.scss'

const Pricing = ({faq}) => {

    return (
        <div id='pricing-table'>
            {/*<PricingHeader duration={duration} setDuration={setDuration} />*/}
            {faq !== null ? (
                <Fragment>
                    <PricingFaqs data={faq} />
                </Fragment>
            ) : null}
        </div>
    )
}

export default Pricing
