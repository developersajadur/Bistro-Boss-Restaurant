import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import img1 from "../../../../public/home/slide1.jpg"
import img2 from "../../../../public/home/slide2.jpg"
import img3 from "../../../../public/home/slide3.jpg"
import img4 from "../../../../public/home/slide4.jpg"
import img5 from "../../../../public/home/slide5.jpg"
import SectionTitle from '../../../Components/SectionTitle';
const Category = () => {
    return (
        <div>
                <section>
                    <SectionTitle
                    subHeading={"---From 11:00am to 10:00pm---"}
                    heading={"ORDER ONLINE"}
                    ></SectionTitle>
                </section>
             <Swiper
        slidesPerView={4}
        spaceBetween={10}
        loop={true}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
            <img src={img1}/>
            <h5 className="text-white font-medium text-center -mt-20 text-4xl">Salads</h5>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img2}/>
            <h5 className="text-white font-medium text-center -mt-20 text-4xl">Soups</h5>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img3}/>
            <h5 className="text-white font-medium text-center -mt-20 text-4xl">pizzas</h5>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img4}/>
            <h5 className="text-white font-medium text-center -mt-20 text-4xl">desserts</h5>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img5}/>
            <h5 className="text-white font-medium text-center -mt-20text-4xl">Salads</h5>
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Category;