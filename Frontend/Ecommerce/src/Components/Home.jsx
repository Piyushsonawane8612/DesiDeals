import React from "react";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import banner from "../assets/Images/banner.jpg";
import banner2 from "../assets/Images/banner2.jpg";
import banner3 from "../assets/Images/banner3.jpg";
import banner4 from "../assets/Images/banner4.jpg";
import Card2 from "../assets/Images/Card2.png";
import Card3 from "../assets/Images/Card3.png";
import Commitment from "./Commitment";
import Testimonial from "./Testimonial";

const banners = [banner, banner2, banner3, banner4];

const cards = [
  {
    imgSrc:
      "https://github.com/DigvijayRajebhosale9697/E-Com/blob/main/public/Image/Home3.png?raw=true",
    linkText: "Explore More",
    category: "Electronic Gadget",
    path: "/electronic-gadgets",
  },
  {
    imgSrc: Card2,
    linkText: "Explore More",
    category: "Home Appliances",
    path: "/kitchen-appliances",
  },
  {
    imgSrc: Card3,
    linkText: "Explore More",
    category: "Cloths",
    path: "/Clothes",
  },
  {
    imgSrc: "https://pngfre.com/wp-content/uploads/book-79-275x300.png",
    linkText: "Explore More",
    category: "Books",
    path: "/books",
  },
];

function Home() {
  const navigate = useNavigate();

  const handleExploreMoreClick = (path) => {
    navigate(path);
  };

  return (
    <div className="backgroundColorContainer">
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {banners.map((bannerImage, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              data-bs-interval={index === 0 ? 5000 : 2000}
            >
              <img
                src={bannerImage}
                className="d-block w-100 imageCarousel"
                alt={`slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev custom-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next custom-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* cards */}
      <div className="CardContainer container">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <img
              src={card.imgSrc}
              className="cardImgTop"
              alt={`Card ${index + 1}`}
            />
            <div className="card-body">
              <button
                className=" card-link btn "
                onClick={() => handleExploreMoreClick(card.path)}
              >
                {card.linkText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Commitment */}
      <Commitment />

      {/* Testimonial */}
      <Testimonial />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
