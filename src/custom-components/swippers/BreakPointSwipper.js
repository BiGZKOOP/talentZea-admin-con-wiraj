import '@styles/react/libs/swiper/swiper.scss'
import {CardBody} from "reactstrap"
import {Swiper, SwiperSlide} from "swiper/react/swiper-react"

const BreakPointSwipper = ({ isRtl, images }) => {

    const params = {
        slidesPerView: 1,
        spaceBetween: 50,
        pagination: {
            clickable: true
        },
        breakpoints: {
            1024: {
                slidesPerView: 1,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    }

    return <div>
        <CardBody>
            <Swiper dir={isRtl ? 'rtl' : 'ltr'} {...params}>
                {
                    images?.map((image, index) => {
                        return <SwiperSlide className="grabbing p-0">
                            <img src={image} alt={`swiper ${index}`} className='img-fluid'/>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </CardBody>
    </div>
}

export default BreakPointSwipper