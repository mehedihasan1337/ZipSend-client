import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { Quote } from "lucide-react";
import "./TestimonialsStyles.css";
import customer from "../../../assets/customer-top.png"
const testimonials = [
  {
    name: "Awlad Hossin",
    role: "Senior Product Designer",
    message:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
  },
  {
    name: "Rasel Ahamed",
    role: "CTO",
    message:
      "It provides consistent posture support, helping you maintain proper alignment effortlessly throughout your workday.",
  },
  {
    name: "Nasir Uddin",
    role: "CEO",
    message:
      "A posture corrector ensures stability and helps relieve pain by aligning your spine naturally with ease.",
  },
  {
    name: "Maruf Hasan",
    role: "UX Engineer",
    message:
      "It keeps your shoulders in place and helps build muscle memory for correct posture even when you’re not wearing it.",
  },
  {
    name: "Sadia Noor",
    role: "Marketing Lead",
    message:
      "This posture corrector boosts your confidence by helping you stand tall and feel more energized.",
  },
  {
    name: "Fahim Rahman",
    role: "Software Engineer",
    message:
      "Using it daily helps improve back support, reduces strain, and encourages healthier posture habits.",
  },
  {
    name: "Nasir Uddin",
    role: "CEO",
    message:
      "A posture corrector ensures stability and helps relieve pain by aligning your spine naturally with ease.",
  },
  {
    name: "Maruf Hasan",
    role: "UX Engineer",
    message:
      "It keeps your shoulders in place and helps build muscle memory for correct posture even when you’re not wearing it.",
  },
  {
    name: "Sadia Noor",
    role: "Marketing Lead",
    message:
      "This posture corrector boosts your confidence by helping you stand tall and feel more energized.",
  },
  {
    name: "Fahim Rahman",
    role: "Software Engineer",
    message:
      "Using it daily helps improve back support, reduces strain, and encourages healthier posture habits.",
  },
  {
    name: "Awlad Hossin",
    role: "Senior Product Designer",
    message:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
  },
  {
    name: "Rasel Ahamed",
    role: "CTO",
    message:
      "It provides consistent posture support, helping you maintain proper alignment effortlessly throughout your workday.",
  },
  {
    name: "Nasir Uddin",
    role: "CEO",
    message:
      "A posture corrector ensures stability and helps relieve pain by aligning your spine naturally with ease.",
  },
  {
    name: "Maruf Hasan",
    role: "UX Engineer",
    message:
      "It keeps your shoulders in place and helps build muscle memory for correct posture even when you’re not wearing it.",
  },
  {
    name: "Sadia Noor",
    role: "Marketing Lead",
    message:
      "This posture corrector boosts your confidence by helping you stand tall and feel more energized.",
  },
  {
    name: "Fahim Rahman",
    role: "Software Engineer",
    message:
      "Using it daily helps improve back support, reduces strain, and encourages healthier posture habits.",
  },
  {
    name: "Awlad Hossin",
    role: "Senior Product Designer",
    message:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
  },
  {
    name: "Rasel Ahamed",
    role: "CTO",
    message:
      "It provides consistent posture support, helping you maintain proper alignment effortlessly throughout your workday.",
  },
  {
    name: "Nasir Uddin",
    role: "CEO",
    message:
      "A posture corrector ensures stability and helps relieve pain by aligning your spine naturally with ease.",
  },
  {
    name: "Maruf Hasan",
    role: "UX Engineer",
    message:
      "It keeps your shoulders in place and helps build muscle memory for correct posture even when you’re not wearing it.",
  },
  {
    name: "Sadia Noor",
    role: "Marketing Lead",
    message:
      "This posture corrector boosts your confidence by helping you stand tall and feel more energized.",
  },
  {
    name: "Fahim Rahman",
    role: "Software Engineer",
    message:
      "Using it daily helps improve back support, reduces strain, and encourages healthier posture habits.",
  },
];

export default function Testimonials() {
  return (
    <div  className=" testimonials-container rounded-4xl mt-10 bg-white ">
      <img className="mx-auto mb-6" src={customer} alt="" />
      <h2 className="title">What our customers are sayings</h2>
      <p className="subtitle">
        Enhance posture, mobility, and well-being 
        effortlessly with Posture Pro. Achieve proper alignment,
         reduce pain, and strengthen your body with ease!
      </p>

      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper "
      >
        {testimonials.map((item, index) => (
          <SwiperSlide  key={index} className="testimonial-card">
            <Quote className="quote-icon" />
            <p className="message">{item.message}</p>
            <div className="author">
              <div className="avatar">{item.name.charAt(0)}</div>
              <div>
                <h4>{item.name}</h4>
                <p>{item.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
