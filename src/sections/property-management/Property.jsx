import React from "react";
import "./Property.css";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hotelPhotos from "./hotelPhotos";

function Property() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1210,
                settings: {
                  slidesToShow: 2
                }
              },
              {
                breakpoint: 550,
                settings: {
                  slidesToShow: 1
                }
              }
        ]
    };

    return (
        <div id="property-management" className="p-7">
            <div className="p-5"></div>
            <div className="child">
                <div>
                    <h1 className="text-3xl">Expert Property Management: Maximizing Value, Minimizing Hassle.</h1>
                    <p className="pt-5">Our dedicated aftersales-property management team offers expert care for your property, whether it’s for personal use or rental investment. You can have absolute peace of mind, knowing that your property is maintained to the highest standards.</p>
                    <p className="pt-2 pb-5">We provide a top-tier management service, ensuring your property is well-cared for and your investment is protected.</p>
                </div>
                <div className="p-5">
                    <motion.img initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.25, ease: 'easeOut' }} src="/pm.png" alt="property-banner" />
                </div>
            </div>
            <p className="pb-2">For select properties and developments, we also offer a rental guarantee scheme, providing additional security and maximizing your returns. Our professional property management services in Greece are designed to enhance the value and performance of your real estate investments. We offer a comprehensive suite of services, including:</p>
            <ul className="pl-5">
                <motion.li initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.25, ease: 'easeOut' }}><span className="text-blue-900 font-bold">Tenant Relations:</span> We manage all aspects of tenant interactions, from finding and screening potential tenants to handling lease agreements and resolving any issues that arise during the tenancy.</motion.li>
                <motion.li initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5, ease: 'easeOut' }}><span className="text-blue-900 font-bold">Maintenance and Repairs:</span> Our team ensures that your property is well-maintained with regular inspections, prompt repairs, and proactive maintenance to preserve its value and appeal.</motion.li>
                <motion.li initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.75, ease: 'easeOut' }}><span className="text-blue-900 font-bold">Financial Management:</span> We handle rent collection, accounting, and financial reporting, providing you with clear and accurate records of your property’s financial performance.</motion.li>
                <motion.li initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2.0, ease: 'easeOut' }}><span className="text-blue-900 font-bold">Legal Compliance:</span> We ensure that your property complies with all local regulations and legal requirements, including tenant rights and property safety standards.</motion.li>
            </ul>
            <p className="pt-5 pb-7">Located in key areas such as Athens, our services leverage local knowledge and expertise to provide exceptional management tailored to the Greek real estate market. Enjoy the benefits of a well-managed property with reduced stress and increased profitability.</p>
            <h1 className="text-2xl pt-5 pb-5">Our Strategies for Success</h1>
            <p><span className="text-blue-900 font-bold">Enhanced Guest Experience:</span> The properties offer premium amenities and personalized services to attract and retain guests. This includes high-quality accommodations, exceptional customer service, and additional features such as concierge services and local tour recommendations.</p>
            <p><span className="text-blue-900 font-bold">Dynamic Pricing:</span> The use of dynamic pricing models helps optimize revenue by adjusting rates based on demand fluctuations. This approach ensures competitive pricing during off-peak periods while maximizing revenue during peak times.</p>
            <p><span className="text-blue-900 font-bold">Effective Marketing:</span> Targeted marketing efforts, including online advertising, social media promotions, and collaborations with travel influencers, help boost visibility and attract potential guests throughout the year.</p>
            <p><span className="text-blue-900 font-bold">Local Partnerships:</span> Collaborations with local businesses and tourism operators enhance the overall guest experience and provide additional value, encouraging longer stays and repeat visits.</p>
            
            <h1 className="text-2xl pt-7 pb-5">Athens Mosaico Luxury Suites & Apartments</h1>
            <div className="child1">
                <div>
                    <p className="pb-5 pt-7">One of our standout projects, Athens Mosaico Luxury Suites & Apartments, is centrally located in Athens and has been operating at full capacity. Its prime location offers the advantage of being close to numerous tourist attractions, enhancing its appeal and occupancy. All can be reach in walking distance, no longer than 2 miles.</p>
                    <ul>
                        <motion.li initial={{ opacity: 0, x: -50 }} transition={{ duration: 1.5, ease: 'easeOut' }} whileInView={{ opacity: 1, x: 0 }}>Lycabettus Hill - 1.3 miles.</motion.li>
                        <motion.li initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.65, ease: 'easeOut' }} whileInView={{ opacity: 1, x: 0 }}>Acropolis - 1.2 miles.</motion.li>
                        <motion.li initial={{ opacity: 0, x: -70 }} transition={{ duration: 1.75, ease: 'easeOut' }} whileInView={{ opacity: 1, x: 0 }}>Parthenon - 1.2 miles.</motion.li>
                        <motion.li initial={{ opacity: 0, x: -70 }} transition={{ duration: 1.85, ease: 'easeOut' }} whileInView={{ opacity: 1, x: 0 }}>Ancient Argora of Athens - 0.8 mile.</motion.li>
                        <motion.li initial={{ opacity: 0, x: -75 }} transition={{ duration: 1.95, ease: 'easeOut' }} whileInView={{ opacity: 1, x: 0 }}>Our hotel location: Mirrinousion 8, Athina 104 38, Greece. <a style={{color: "#042954", textDecoration: "underline"}} href="https://www.google.com/maps/dir//Mirrinousion+8,+Athina+104+38,+Greece/@37.9874991,23.6385558,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14a1bd28d7763fa3:0x71b99ea1f3748d08!2m2!1d23.7209574!2d37.9875086?entry=ttu&g_ep=EgoyMDI0MDkwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank">See on Google Maps</a></motion.li>
                        <motion.li initial={{ opacity: 0, x: -75 }} transition={{ duration: 2.05, ease: 'easeOut' }} whileInView={{ opacity: 1, x: 0 }}>Website: <a style={{color: "#042954", textDecoration: "underline"}} href="https://athensmosaico.com/" target="_blank">athensmosaico.com</a></motion.li>
                    </ul>
                </div>
                <div>
                    <motion.img initial={{ opacity: 0, x: 40 }} transition={{ duration: 1.75, ease: 'easeOut' }} whileInView={{ opacity: 1, x: 0 }} src="/hotel.png" alt="Mosaico Athens"/>
                </div>
            </div>
            <div className="pt-5 pb-7">
                <h1 className="text-xl">More Photos</h1>
                <motion.div initial={{ opacity: 0, y: 150 }} transition={{ duration: 1.75, ease: 'easeOut' }} whileInView={{ opacity: 1, x: 0 }} className="p-7">
                    <Slider {...settings}>
                    {
                        hotelPhotos.map((photo) => {return (
                            <div key={photo.id} className='pl-3 pr-3 pb-3 pt-2 flex items-center justify-center'>
                                <div className='flex justify-center rounded-t-xl pt-2'>
                                    <img src={photo.photo} className="md:h-[300px]" alt="album-image" />
                                </div>
                            </div>
                        )})
                    }
                    </Slider>
                </motion.div>
            </div>
            <h1 className="text-2xl">Advantages of hotel projects</h1>
            <p className="pt-5 pb-5">
                Hotel projects offering short-term rental services have demonstrated impressive performance metrics, with occupancy rates surpassing 90% during peak seasons and remaining above 65% during off-peak periods. Through a combination of excellent guest services, strategic pricing, and effective marketing, these projects successfully capitalize on market demand and ensure consistent revenue streams throughout the year.
            </p>

        <div className="p-7 clear-both"></div>
        </div>
    )
}

export default Property
