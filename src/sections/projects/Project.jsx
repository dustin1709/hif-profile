import React from "react";
import "./Project.css";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Listings from "./Listing";

function Project() {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 700,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2
                }
              },
              {
                breakpoint: 930,
                settings: {
                  slidesToShow: 1
                }
              }
        ]
    };

    return (
        <div id="projects" className="p-7" style={{backgroundImage: `url('/CP_background.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'}}>
                <h1 className="pt-12 pl-5">Our Projects</h1>
                <div className="childrenp pb-7">
                    <div>
                        <motion.img initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, y: 0, x: 0 }}
                            transition={{ duration: 2.25, ease: 'easeOut' }} src="/Campus_Nest.png" alt="Project-banner" />
                    </div>
                    <div></div>
                    <div>
                        <motion.p initial={{ opacity: 0, y: -150 }}
                            whileInView={{ opacity: 1, y: 0, x: 0 }}
                            transition={{ duration: 2.25, ease: 'easeOut' }} className="pl-5 pt-7 pr-7">
                            At HIF, we specialize in premium real estate projects, handpicked for their unbeatable locations and designed with renters in mind. Whether you're looking for easy access to public transportation, vibrant local communities, or proximity to key amenities, our properties offer unparalleled convenience. Each project is thoughtfully developed to provide an effortless rental experience, ensuring tenants enjoy both comfort and accessibility. Invest in a space where location meets lifestyle, making renting simpler, faster, and more enjoyable. Secure your future today with HIF—your gateway to prime living.
                        </motion.p>
                    </div>
                </div>
                <h2>Interior Design Tailored to Market Demands</h2>
                <div className="children2">
                    <div>
                        <motion.div initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, y: 0, x: 0 }}
                            transition={{ duration: 1.25, ease: 'easeOut' }}>
                            <p className="pt-5">Our project’s interior design seamlessly blends functionality, aesthetics, and modern trends to meet the diverse demands of today’s market. Each space is meticulously crafted to cater to the preferences of discerning homeowners and tenants, ensuring a perfect balance of comfort and style.
                                <br />Key highlights include:
                            </p>
                            <ul>
                                <li>- Contemporary Aesthetics: Sleek, modern finishes and clean lines define every corner, creating a timeless yet fresh appeal.</li>
                                <li>- Space Optimization: Thoughtful layouts maximize usability, ensuring every square meter is practical and inviting.</li>
                                <li>- Premium Materials: High-quality materials such as hardwood floors, quartz countertops, and energy-efficient fixtures emphasize durability and luxury.</li>
                                <li>- Customizable Features: Flexibility in design elements allows buyers to personalize their spaces, making them truly feel like home.</li>
                                <li>- Sustainability: Eco-friendly materials and energy-efficient systems align with the growing market trend toward green living.</li>
                            </ul>
                            <p>Whether it’s for young professionals, growing families, or investors seeking high rental potential, our interiors are designed to exceed expectations and adapt to a range of lifestyles.</p>
                        </motion.div>
                    </div>
                    <div></div>
                    <div>
                        <motion.img initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, y: 0, x: 0 }}
                            transition={{ duration: 2.25, ease: 'easeOut' }} src="/balcony.png" alt="yard" />
                    </div>
                </div>
                <h2>Notable Projects</h2>
                <div className="slider-container w-8/9 m-auto">
                <Slider {...settings}>
                    {
                        Listings.slice(0).reverse().map((property) => {return (
                            <div key={property.id} className='pl-3 pr-3 pb-3 pt-2 flex items-center justify-center'>
                                <img src={property.image} alt={property.id} />
                            </div>
                        )})
                    }
                </Slider>
                </div>
                <div className="p-5 clear-both"></div>
                <h2>Summarized Video</h2>
                <video controls className="p-5">
                    <source src='https://hif-greece.s3.ap-northeast-1.amazonaws.com/PROJECT.mp4' type="video/mp4" />
                </video>
                <div className="p-10 clear-both"></div>
        </div>
    )
}

export default Project
