import React from "react";
import Footer from "./Footer";
import "./Service.css";
import { BsArrowUpRight } from "react-icons/bs";
import Commitment from "./Commitment";
import Testimonial from "./Testimonial";
import { useNavigate } from "react-router-dom";

const services = [
  {
    imgSrc:
      "https://azim.commonsupport.com/Castro/assets/images/service/service-1.jpg",
    title: "Fashion Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto autem tempore in.",
    path: "/Clothes",
  },
  {
    imgSrc:
      "https://github.com/DigvijayRajebhosale9697/E-Com/blob/main/public/Image/Home3.png?raw=true",
    title: "Electronic Gadgets",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto autem tempore in.",
    path: "/electronic-gadgets",
  },
  {
    imgSrc:
      "https://img.freepik.com/premium-photo/3d-set-home-appliances-white-background_751108-1072.jpg?size=626&ext=jpg&ga=GA1.1.1169876489.1707532994&semt=ais_user",
    title: "Home Appliances",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto autem tempore in.",
    path: "/kitchen-appliances",
  },
  {
    imgSrc:
      "https://static.vecteezy.com/system/resources/thumbnails/036/734/938/small_2x/ai-generated-books-stacked-isolated-on-transparent-background-free-png.png",
    title: "Books",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto autem tempore in.",
    path: "/books",
  },
];

function Service() {
  const navigate = useNavigate();

  const handleDiscoverClick = (path) => {
    navigate(path);
  };

  return (
    <React.Fragment>
      <div className="backgroundImgContainerServices">
        <div className="cum">
          <h1 style={{ color: "#fff" }}>Services</h1>
        </div>
      </div>
      <div className=" backgroundColorContainer ">
        <div className="container">
          {services.map((service, index) => (
            <div
              className="service-item row justify-content-around mb-4"
              key={index}
            >
              {index % 2 === 0 ? (
                <>
                  <div className="col-lg-5">
                    <img
                      src={service.imgSrc}
                      alt={service.title}
                      className="service-img"
                    />
                  </div>
                  <div className="col-lg-5 d-flex align-items-center">
                    <div className="">
                      <h1>{service.title}</h1>
                      <p>{service.description}</p>
                      <button
                        className="discover-button"
                        onClick={() => handleDiscoverClick(service.path)}
                      >
                        Discover <BsArrowUpRight className="arrow-icon" />
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-lg-5 order-lg-2">
                    <img
                      src={service.imgSrc}
                      alt={service.title}
                      className="service-img"
                    />
                  </div>
                  <div className="col-lg-5 order-lg-1 d-flex align-items-center">
                    <div className="">
                      <h1>{service.title}</h1>
                      <p>{service.description}</p>
                      <button
                        className="discover-button"
                        onClick={() => handleDiscoverClick(service.path)}
                      >
                        Discover <BsArrowUpRight className="arrow-icon" />
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
        {/* Testimonial */}
        <Testimonial />

        {/* Commitment */}
        <Commitment />

        {/* Footer */}
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default Service;
