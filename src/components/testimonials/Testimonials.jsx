import "./testimonials.css"
import avrt1 from '../../assets/port1.png'
import avrt2 from '../../assets/port2.jpg'
import avrt3 from '../../assets/port3.jpg'
import avrt4 from '../../assets/port4.jpg'
// importing swiper js
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination'

const Testimonials = () => {
    
    const TestimonialData = [
        {
            id: 1,
            img: avrt1,
            name: 'Abiodun Markoly',
            review : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ipsum dolor sit amet consectetur adipisicing.'
        },
        {
            id: 2,
            img: avrt2,
            name: 'Tope Adekunle',
            review : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ipsum ipsum dolor sit amet consectetur adipisicing elit. Obcaecati.'
        },
        {
            id: 3,
            img: avrt3,
            name: 'Sola Olutoke',
            review : 'Lorem ipsum dolor sit ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet consectetur adipisicing elit. Obcaecati, ipsum.'
        },
        {
            id: 4,
            img: avrt4,
            name: 'Adams Paul',
            review : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ipsum ipsum dolor sit amet consectetur adipisicing elit. Obcaecati.'
        }
    ]
    
    return (    
        <section id="testimonials">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <div className="container testimonialsContainer">
                
                    {
                        TestimonialData.map((data) => {
                            return (
                                <SwiperSlide key={data.key} className="testimonial">
                                    <div className="clientAvatar">
                                        <img src={data.img} alt={data.name} />
                                    </div>
                                    <h5 className="clientName">
                                        {data.name}
                                    </h5>
                                    <small className="clientReview">
                                        {data.review}
                                    </small>
                                </SwiperSlide>
                            )
                        })
                    }
                   
                
            </div>
        </section>
    );
}
 
export default Testimonials;