import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import "./AboutUs.css";
import Commitment from "./Commitment";
import Testimonial from "./Testimonial";
import { useNavigate } from "react-router-dom";

const phrases = [
  "Your One-Stop Shop for Quality and Convenience",
  "Shop Smart, Shop Sustainable",
  "Discover Endless Possibilities, Delivered to Your Doorstep",
  "Where Style Meets Convenience",
  "Empowering Your Shopping Experience",
  "Innovative Products, Unbeatable Prices",
  "Explore, Shop, Smile",
  "Your Trusted Partner in Online Shopping",
  "Transforming Trends into Your Wardrobe",
  "Elevate Your Lifestyle with Every Purchase",
];

const services = [
  {
    title: "Our Humble Beginning",
    text: "It all started with a simple idea: to create a platform that not only offers a wide range of products but also transforms the way you shop online. In 2024, a group of enthusiasts gathered with a shared vision to build DesiDeals, an E-Com destination that goes beyond the ordinary.",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.6AwfvMS9Z_ujYPRtHs1fYgHaFb%26pid%3DApi&f=1&ipt=a76e1498cf18cb57672c26c7ed3bf280824a663662e27ff50d8838205bc23902&ipo=images",
    path: "/electronic-gadgets",
  },
  {
    title: "Our Mission",
    text: "Our mission is clear - to bring joy to your doorstep. We strive to curate a diverse selection of high-quality products that cater to every need and desire. Whether you're seeking the latest trends, timeless classics, or innovative gadgets, DesiDeals is your one-stop destination.",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.kBkAqHE4jyEvjyN0DjCEeAHaFj%26pid%3DApi&f=1&ipt=6c5cc3bf90e8b1e0bffbb62b289d0707b12f69f94e4e7dea2f8f786f8fc0472b&ipo=images",
    path: "/kitchen-appliances",
  },
  {
    title: "INNOVATION",
    text: "Flipkart technology drives path-breaking, customer-focused innovation that makes high quality products accessible to Indian shoppers, besides making the online shopping experience convenient, intuitive, and seamless.",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.ib8sfaPieLQmSt3715SIggHaEk%26pid%3DApi&f=1&ipt=71b6009f516ad5df53b59f08c2ba8a527cba15cdb592b40a85fe1b90a5ec77f5&ipo=images",
    path: "/Clothes",
  },
  {
    title: "Sustainability",
    text: "The future of e-commerce is sustainable, equitable and inclusive. As we continue to drive changes across key areas of our operations, our commitment is embedded in our vision to create a positive impact, for the planet and communities.",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.mW0X-kZE_E9nw8W5v8O0jgHaE8%26pid%3DApi&f=1&ipt=553584e58a102ea3dc858398a9f109eb6b0915bda1cf35c2610d81356b7b394f&ipo=images",
    path: "/books",
  },
];

function AboutUs() {
  const [currentPhrase, setCurrentPhrase] = useState(
    phrases[Math.floor(Math.random() * phrases.length)]
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPhrase(phrases[Math.floor(Math.random() * phrases.length)]);
    }, 2000); // Update every 2 seconds

    return () => clearInterval(intervalId); // Cleanup function to prevent memory leaks
  }, []);

  const navigate = useNavigate();

  const handleDiscoverClick = (path) => {
    navigate(path);
  };

  return (
    <div>
      <div>
        <video
          className="video"
          controls
          autoPlay
          muted
          loop
          src="https://corporate.flipkart.net/assets/images/48MB.mp4"
        ></video>
      </div>
      <div className="container my-5">
        <h1 className="FutureH1">The Future is Sustainable</h1>
        <p className="mt-5">
          <strong>
            Welcome to our sustainable e-commerce platform, where we're paving
            the way towards a cleaner future. Powered by solar energy, running
            on batteries, and transported by electric vehicles, we are committed
            to reducing our carbon footprint and promoting eco-friendly
            practices.
          </strong>
        </p>
        <p>
          <strong>
            Explore the latest innovations in our products, discover the
            positive impact we're making on people and communities, and learn
            about our sustainable supply chain. Together, let's create a more
            sustainable world for generations to come.
          </strong>
        </p>
      </div>
      <div className="backgroundImgAbout">
        <div className="Aboutcum">
          <h1 className="mb-3 Aboutcumh1">Shop Smarter, Live Better</h1>
          <p className="Aboutcumpara">
            <strong>{currentPhrase}</strong>
          </p>
        </div>
      </div>
      <div className="container">
        {services.map((service, index) => (
          <div className="row justify-content-around mb-4" key={index}>
            {index % 2 === 0 ? (
              <>
                <div className="col-lg-5">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="serviceImg"
                  />
                </div>
                <div className="col-lg-5 d-flex align-items-center">
                  <div>
                    <h1 className="text-center mt-4">{service.title}</h1>
                    <p>{service.text}</p>
                    <button
                      className="discoverButton"
                      onClick={() => handleDiscoverClick(service.path)}
                    >
                      Discover
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="col-lg-5 order-lg-2">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="serviceImg"
                  />
                </div>
                <div className="col-lg-5 order-lg-1 d-flex align-items-center">
                  <div>
                    <h1 className="text-center mt-4">{service.title}</h1>
                    <p>{service.text}</p>
                    <button
                      className="discoverButton"
                      onClick={() => handleDiscoverClick(service.path)}
                    >
                      Discover{" "}
                    </button>
                  </div>
                </div>
              </>
            )}
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

export default AboutUs;
