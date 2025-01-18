import React, { useEffect, useRef } from "react";
import "./About.css";
import {
    motion,
    useAnimation,
    useInView,
    useScroll,
    useTransform,
  } from "framer-motion";
import { Link } from 'react-scroll';
import { FaExternalLinkSquareAlt } from "react-icons/fa";

function About() {

    return (
        <div id="about-us" className="pt-5 mt-5">
        <div className="about-section p-7">
            <div>
                <motion.img initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.0, ease: 'easeOut' }} 
                            src="/about-framer/Frame0.png" alt="pic0" />
                <motion.img initial={{ opacity: 0, y: 150 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: 'easeOut' }}
                            src="/about-framer/Frame1.png" alt="pic1" />
                <motion.img initial={{ opacity: 0, y: 225 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.3, ease: 'easeOut' }}
                            src="/about-framer/Frame2.png" alt="pic2" />
                <motion.img initial={{ opacity: 0, y: 235 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.4, ease: 'easeOut' }}
                            src="/about-framer/Frame3.png" alt="pic3" />
            </div>
            <div></div>
            <div>
                <motion.h1 initial={{ opacity: 0, y: 150 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: 'easeOut' }} className="text-4xl">About Our Company</motion.h1>
                <motion.p initial={{ opacity: 0, x: -250 }} whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 2.5, ease: 'easeOut' }} className="pt-5">
                Hellenic Investment Fund Co IKE takes pride in its team of highly experienced professionals in financial investment, real estate development, construction, education, and international relations.
                Our company focuses on real estate development, construction, and planning in Europe, offering premium properties such as apartments, homestays, and various types of homes, including subdivided houses or villas, for investors.
                <br />
                At HIF, we have built over 73 apartments building across Athens, as clients can choose from a wide variety of apartments we offer.
                <br />
                By focusing on B2B business model across global partners, we uphold our philosophy of 'Common Interests – Mutual Benefits', the core of our business.
                </motion.p>
            </div>
        </div>
        <div className="pl-7 pt-7 pr-7 pb-5">
            <h1 className="text-4xl">What we do</h1>
            <div className="about-section2 pt-5">
                <motion.div initial={{ opacity: 0, x: -250 }} transition={{ duration: 1.5, ease: 'easeOut' }} whileInView={{ opacity: 1, x: 0 }} className="border-2 m-5 border-blue-900 rounded-lg">
                    <h2 className="p-5 text-center text-2xl">Real Estate development</h2>
                    <ul className="p-5">
                        <li>Developing real estate cash projects like student residence in Athens, Greece, to cater to investors participating in the Greek Golden Visa program.</li>
                        <li>Selecting prime project locations with easy access to business and academic hubs to deliver strong and sustainable ROI as well as maximize financial benefits for investors over the long haul.</li>
                        <li>Developing value projects such as luxury family apartments, serviced apartments and hotels, providing an exceptional living experience for our partners and investors.</li>
                        <motion.li whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "#d1d5db",
              color: "black",
            }}
            transition={{ bounceDamping: 10, bounceStiffness: 600 }}><Link className="p-2 flex items-center gap-[5px]" style={{color: "#042954"}} to='real-estate-development'>More info <FaExternalLinkSquareAlt /></Link></motion.li>
                    </ul>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: -225 }} transition={{ duration: 1.0, ease: 'easeOut' }}  whileInView={{ opacity: 1, x: 0 }} className="border-2 m-5 border-blue-900 rounded-lg">
                    <h2 className="p-5 text-center text-2xl">Real Estate management</h2>
                    <ul className="p-5">
                        <li>Building a professional management team to ensure efficient operations and deliver the best services to our clients.</li>
                        <li>Optimizing management and maintenance processes to minimize costs and enhance profitability.</li>
                        <li>Developing promotional programs and special offers to attract long-term tenants.</li>
                        <motion.li whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "#d1d5db",
              color: "black",
            }}
            transition={{ bounceDamping: 10, bounceStiffness: 600 }}><Link className="p-2 flex items-center gap-[5px]" style={{color: "#042954"}} to='property-management'>More info <FaExternalLinkSquareAlt /></Link></motion.li>
                    </ul>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: -200 }} transition={{ duration: 0.5, ease: 'easeOut' }} whileInView={{ opacity: 1, x: 0 }} className="border-2 m-5 border-blue-900 rounded-lg">
                    <h2 className="p-5 text-center text-2xl">Education consulting</h2>
                    <ul className="p-5">
                        <li>Developing high-quality courses for international students, focusing on providing the essential knowledge and skills needed to succeed academically in Greece.</li>
                        <li>Offering support services such as academic counseling, exam preparation, and application guidance to help students secure offers from top universities.</li>
                        <li>Building relationships with international and public universities in Greece to create a diverse and enriching educational environment for students.</li>
                        <motion.li whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "#d1d5db",
              color: "black",
            }}
            transition={{ bounceDamping: 10, bounceStiffness: 600 }}><Link className="p-2 flex items-center gap-[5px]" style={{color: "#042954"}} to='education-consulting'>More info <FaExternalLinkSquareAlt /></Link></motion.li>
                    </ul>
                </motion.div>
            </div>
        </div>
        </div>
    )
}

export default About
