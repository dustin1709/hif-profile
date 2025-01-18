import React from "react";
import { FaCopyright, FaMapPin } from "react-icons/fa";
import { Link } from 'react-scroll';
import './Footer.css';

function Footer() {
    return (
        <div>
        <div className="footerbanner" style={{ 
            backgroundImage: `url('/footer.jpg')`,
            backgroundSize: 'cover'
        }}>
            <div className='footercover' style={{backgroundColor: 'rgba(255, 255, 255, 0.51393)'}}>
                <div>
                    <h1 className='pl-7 pt-7 text-3xl'>Our Locations</h1>
                    <ul className='pl-12 pr-2 pb-3'>
                        <li className="pt-2 flex items-center cursor-pointer"><FaMapPin /> Greece: ALIMOS, ATHENS, GREECE, 17455</li>
                        <li className="pt-2 flex items-center cursor-pointer"><FaMapPin /> Vietnam: HUD TOWER, LE VAN LUONG, THANH XUAN, HANOI, VIETNAM, 100000</li>
                        <li className="pt-2 flex items-center cursor-pointer"><FaMapPin /> Turkey: ZZET PAŞA MAH. YENİ YOL CAD. NUROL TOWER NO: 3 İÇ KAPI NO: 157- Kat22, No 2204</li>
                    </ul>
                </div>
                <div>
                    <h1 className="pl-7 pt-7 text-3xl">Quick Access</h1>
                    <ul className="pl-12 pt-1 pb-3">
                        <li className="cursor-pointer"><Link to='home'>Home</Link></li>
                        <li className="cursor-pointer"><Link to='about-us'>About</Link></li>
                        <li className="cursor-pointer"><Link to='real-estate-development'>Real Estate Development</Link></li>
                        <li className="cursor-pointer"><Link to='property-management'>Property Management</Link></li>
                        <li className="cursor-pointer"><Link to='projects'>Projects</Link></li>
                        <li className="cursor-pointer"><Link to='education-consulting'>Education Consulting</Link></li>
                        <li className="cursor-pointer"><Link to='golden-visa-immigration'>Golden Visa Immigration</Link></li>
                    </ul>
                    <div className='p-10 clear-both'></div>
                    <div className='p-10 clear-both'></div>
                </div>
            </div>
            <hr />
            <p style={{backgroundColor: 'rgba(255, 255, 255, 0.51393)'}} className='pl-5 pt-3 pb-5 pr-5 flex items-center gap-[12px]'><FaCopyright/><span>Copyright of Hellenic Investment Fund Co IKE - All rights reserved {(new Date().getFullYear())}</span></p>
        </div>
        </div>
    )
}

export default Footer
