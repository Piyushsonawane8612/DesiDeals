import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";
import RatingStars from "react-rating-stars-component";

const testimonials = [
  {
    imgSrc:
      "https://demo.bosathemes.com/html/finsurance/assets/img/image05.jpg",
    text: "I was very impressed by the company services lorem ipsum is simply free text available used by copytyping refreshing. Neque porro est qui dolorem ipsum quia.",
    author: "Mike Hardson",
    rating: 4.5,
  },
  {
    imgSrc:
      "https://demo.bosathemes.com/html/finsurance/assets/img/image06.jpg",
    text: "I was very impressed by the company services lorem ipsum is simply free text available used by copytyping refreshing. Neque porro est qui dolorem ipsum quia.",
    author: "Jessica Brown",
    rating: 5,
  },
  {
    imgSrc:
      "https://demo.bosathemes.com/html/finsurance/assets/img/image015.jpg",
    text: "I was very impressed by the company services lorem ipsum is simply free text available used by copytyping refreshing. Neque porro est qui dolorem ipsum quia.",
    author: "Kevin Martin",
    rating: 4,
  },
];

function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="container">
      <div className="pt-5 mb-5">
        <h2 className="text-center">Testimonials</h2>
        <p className="text-center">
          Excepteur sint occaecat cupidatat non proident sunt
        </p>
        <img
          className="mx-auto d-block"
          src="https://azim.commonsupport.com/Castro/assets/images/icons/separator-1.png"
          alt="separator"
        />
      </div>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-container">
            <div className="testimonial-Item">
              <div className="testimonial-content">
                <RatingStars
                  count={5}
                  value={testimonial.rating}
                  size={24}
                  edit={false}
                  isHalf={true}
                  activeColor="#ffd700"
                />
                <h4>{testimonial.author}</h4>

                <p>{testimonial.text}</p>
              </div>
              <img
                src={testimonial.imgSrc}
                alt={testimonial.author}
                className="testimonial-img"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Testimonial;
