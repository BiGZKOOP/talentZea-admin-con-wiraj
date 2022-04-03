import '@styles/react/libs/swiper/swiper.scss'
import {CardBody} from "reactstrap"
import {Swiper, SwiperSlide} from "swiper/react/swiper-react"

const BreakPointSwipper = ({ isRtl, images, count }) => {

    const params = {
        slidesPerView: count,
        spaceBetween: 50,
        pagination: {
            clickable: true
        },
        breakpoints: {
            1024: {
                slidesPerView: count,
                spaceBetween: 40
            },
            768: {
                slidesPerView: count,
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
                            <img src={image} height="150px" alt={`swiper ${index}`} className='object-fit'/>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </CardBody>
    </div>
}

export default BreakPointSwipper