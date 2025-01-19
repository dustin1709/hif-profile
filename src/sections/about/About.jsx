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
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Timeline from "./Timeline";
import useScrollTriggeredCountUp from "./useScrollTriggerCountUp";

function About() {
    const ref = useRef(null);

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
                <motion.div initial={{ opacity: 0, x: -250 }} transition={{ duration: 1.5, ease: 'easeOut' }} whileInView={{ opacity: 1, x: 0 }} className="border-2 m-5 border-yellow-500 rounded-lg">
                    <h2 className="p-5 text-center text-2xl">Real Estate Development</h2>
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
                <motion.div initial={{ opacity: 0, x: -225 }} transition={{ duration: 1.0, ease: 'easeOut' }}  whileInView={{ opacity: 1, x: 0 }} className="border-2 m-5 border-yellow-500 rounded-lg">
                    <h2 className="p-5 text-center text-2xl">Real Estate Management</h2>
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
                <motion.div initial={{ opacity: 0, x: -200 }} transition={{ duration: 0.5, ease: 'easeOut' }} whileInView={{ opacity: 1, x: 0 }} className="border-2 m-5 border-yellow-500 rounded-lg">
                    <h2 className="p-5 text-center text-2xl">Education Consulting</h2>
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

        <div className="about-timeline pl-7 pt-7 pb-10" style={{width: '95%'}}>
        <h1 className="text-4xl pb-5 pt-7">Our Development Timeline</h1>
        <div style={{margin: '1%', width: '87%'}}>
            <VerticalTimeline layout="1-column-left" animate={true}>
                {
                    Timeline.map((element) => {
                        let content = element.content;
                        return (
                            <VerticalTimelineElement
                                key={element.id}
                                position="right"
                                className=""
                                shadowSize="large"
                                contentStyle={{ color: '#000', marginLeft: '18vh', borderTop: '2px solid #C19C2B', borderLeft:  '2px solid #C19C2B'}}
                                contentArrowStyle={{ borderRight: '10px solid  #C19C2B' }}
                                date={element.year}
                                iconStyle={{ background: '#fff', color: '#C19C2B', width: '15vh', height: '15vh' }}
                                icon={<motion.h1 initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.0, ease: 'easeOut' }} whileInView={{ opacity: 1, x: 0 }} className="text-center text-4xl" style={{paddingTop: '35px'}}>{element.year}</motion.h1>}
                            >
                                <motion.p initial={{ opacity: 0, x: 50 }} transition={{ duration: 1.75, ease: 'easeOut' }} whileInView={{ opacity: 1, x: 0 }} className="text-2xl">
                                {content}
                                </motion.p>
                            </VerticalTimelineElement>
                        )
                    })
                }
            </VerticalTimeline>
        </div>
        </div>
        <div className="p-7 about-section-finale">
            <div>
                <motion.img initial={{ opacity: 0, x: -50 }} transition={{ duration: 0.75, ease: 'easeOut' }} whileInView={{ opacity: 1, x: 0 }} src="/about-pics/flag.png" alt="Greece Flag"/>
            </div>
            <div className="pb-7 children">
                <div>    
                </div>
                <div>
                    <h1 className="text-4xl pt-2">Our Vision</h1>
                    <p className="pt-5 pb-7">
                        We are always focused on delivering practical value and maximizing benefits for our partners. Operating under the motto "Building Together – Growing Together," we are committed to creating sustainable and long-term collaborative opportunities.
                        <br />
                        We are committed to delivering high-quality products and comprehensive management services, focusing on a B2B collaboration model with international partners. Our guiding principle, again, is "Shared Benefits – Mutual Growth."
                    </p>
                    <div className="p-7 clear-both"></div>
                </div>
            </div>
            <div>
                <motion.img initial={{ opacity: 0, x: 35 }} transition={{ duration: 0.5, ease: 'easeOut' }} whileInView={{ opacity: 1, x: 0 }} src="/about-pics/eu.png" width="90%" alt="EU Flag"/>
                <motion.img initial={{ opacity: 0, x: -100 }} transition={{ duration: 0.55, ease: 'easeOut' }} whileInView={{ opacity: 1, x: 0 }} src="/about-pics/globe.png" width="70%" alt="EU Flag"/>
            </div>
        </div>
        <div className="p-7 clear-both"></div>
        <div className="p-5 clear-both"></div>
            <h1 className='pl-10 pr-8 text-4xl'>
                Our markets
            </h1>
            <p className='pl-10 pr-8 pt-8' >At HIF, each project is carefully selected for its location, ensuring convenient transportation and placement in areas with optimal living amenities. HIF is committed to developing projects that offer the highest quality living environment for investors.
                We are proud to be a trusted and quality property developer who can support your client's family in their new journey of owning and managing foreign properties.
            </p>
            <ul className='pl-10 pb-5 pt-2 pr-8 text-center'>
                    <li className="listItem">
                        <div className="flex justify-center">
                            <h1 className="textCount" ref={ref}>{useScrollTriggeredCountUp(ref, 73)}+</h1>
                        </div>
                        <h1 className='text-xl blue'>Apartment Buildings</h1>
                    </li>
                    
                    <li className="listItem">
                    <div className="flex justify-center">
                        <h1 ref={ref} className="textCount">{useScrollTriggeredCountUp(ref, 892)}+</h1>
                    </div>
                        <h1 className='text-xl blue'>Apartments</h1>
                    </li>
                    
                    <li className="listItem">
                    <div className="flex justify-center">
                        <h1 ref={ref} className="textCount">{useScrollTriggeredCountUp(ref, 787)}+</h1>
                    </div>
                        <h1 className='text-xl blue'>Successful applications</h1>
                    </li>
                    
                    <li className="listItem">
                    <div className="flex justify-center">
                        <h1 ref={ref} className="textCount">{useScrollTriggeredCountUp(ref, 7)}+</h1>
                    </div>
                    <h1 className='text-xl blue'>Countries Partners</h1>
                    </li>
                </ul>
            
            <div className='pl-10 pr-8'>
                <ul>
                    <li>73+ Buildings: Each project is carefully selected for its location, ensuring convenient transportation and placement in areas with optimal living amenities. HIF is committed to developing projects that offer the highest quality living environment for investors.</li>
                    <li>892+ Apartments: The apartments are designed with modern aesthetics and high-quality amenities. HIF is committed to developing and constructing only top-tier properties, with the goal of providing an exceptional and comfortable living space for investors.</li>
                    <li>787+ Successful applications: HIF's documentation is always detailed, clear, and transparent, making it easy for partners and investors to monitor and evaluate. The files are managed by a team of professional lawyers, ensuring that all necessary information for relevant parties is thoroughly provided.</li>
                    <li>Partners in 7+ countries: HIF takes pride in its extensive international network, comprising partners from seven different countries. This global collaboration not only enhances our reputation but also expands our operational reach, creating new development opportunities and diversifying our investment portfolio.</li>
                </ul>
            </div>
        <div className="p-10 clear-both"></div>
        </div>
    )
}

export default About
