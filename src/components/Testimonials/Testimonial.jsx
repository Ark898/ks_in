import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      rating:5,
      review:
        "Smart Aid Glasses have been a godsend for my grandmother, who is visually impaired. The ease of use and accurate voice commands have made everyday tasks more manageable for her. Whether it's reading mail, identifying groceries, or navigating unfamiliar places, these glasses have truly enhanced her quality of life. Thank you, Smart Aid, for bringing back her independence.",
    },
    {
      img: profilePic2,
      rating:5,
      review:
        "Smart Aid Glasses have been a game-changer for our family. Our son, who is deaf, now has a newfound sense of independence. The real-time transcription of spoken language has opened up doors for him, allowing him to engage more fully in conversations and classroom settings",
    },
    {
      img: profilePic3,
      rating:5,
      review:
        "I've always struggled to express myself verbally due to my mute condition, but Smart Aid Glasses have given me a voice. With its intuitive interface and text-to-speech feature, I can communicate effortlessly with those around me. It's not just a device; it's a lifeline for me.",
    },
    {
      img: profilePic4,
      rating:5,
      review:
        "Working with visually impaired individuals, I've seen firsthand the impact that Smart Aid Glasses have had on their lives. The built-in object recognition and navigation assistance features have significantly enhanced their mobility and independence. It's truly remarkable to witness the newfound freedom and confidence they gain with this technology",
    },
    {
      img: profilePic3,
      rating:5,
      review:
        "I bought Smart Aid Glasses for my friend who is deaf, and the transformation has been incredible. Not only has it improved his communication with others, but it has also boosted his confidence and sense of inclusion in social situations. Smart Aid Glasses are not just a gadget; they're a bridge to a more connected world.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Empowering Testimonials: </span>
        <span> Hear What Our Customers</span>
        <span> Have to Say!</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
                {client.rating && (
                  <div className="rating">
                    {[...Array(client.rating)].map((star, i) => (
                      <span key={i} className="star" style={{ background: "var(--purple)" }}>&#9733;</span>
                    ))}
                  </div>
                )}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
