import  { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import useAxios from "../../../Hooks/useAxios";

const Testimonials = () => {
    const axiosSecure = useAxios();
    const [testimonials, setTestimonials] = useState([])
    useEffect(() => {
        axiosSecure.get("/reviews")
        .then(res => {
            setTestimonials(res.data)
        })
    },[axiosSecure])
    return (
        <div className="my-10">
              <section>
                    <SectionTitle
                    subHeading={"---What Our Clients Say---"}
                    heading={"TESTIMONIALS"}
                    ></SectionTitle>
                </section>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    testimonials.map(testimonial => 
                        <SwiperSlide
                        key={testimonial._id}
                        >
                            <div className="flex flex-col gap-3 justify-center items-center">
                            <Rating style={{ maxWidth: 150 }} value={testimonial?.rating} />
                                <img className="w-20" src="icon/comma.png" />
                                <p className="text-center text-xl lg:px-60">{testimonial?.details}</p>
                                <h5 className="text-3xl text-[#CD9003] font-medium">{testimonial?.name}</h5>
                            </div>
                        </SwiperSlide>
                    )
                }
      </Swiper>
            
        </div>
    );
};

export default Testimonials;