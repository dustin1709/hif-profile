import React from "react";
import "./RealEstate.css";
import { motion } from "framer-motion";

function RealEstate() {
    return (
        <div id="real-estate-development">
            <div className="child1 pt-5">
                <div>
                    <motion.img initial={{ opacity: 0, x: -50 }} transition={{ duration: 2.1, ease: 'easeOut' }} whileInView={{ opacity: 1, x: 0 }} src="/real-estates/CrownPalace.png" alt="Crown Palace Project"/>
                </div>
                <div className="pl-5 pr-5 child1-child">
                    <div>
                        <h1 className="pt-5">Your Trusted Real Estate Developer</h1>
                        <p className="pt-5 pb-7">
                            With a proven track record of successfully completing high-quality projects, HIF prioritizes transparency, integrity, and professionalism in all dealings, ensuring clear communication, timely project delivery, and adherence to budgets. With a strong focus on client satisfaction, HIF consistently delivers value by selecting prime locations, using top-notch materials, and maintaining strict quality control throughout the development process. HIF's commitment to ethical practices and long-term relationships makes it a dependable partner for investors and stakeholders alike.
                        </p>
                    </div>
                    <div>
                        <motion.img initial={{ opacity: 0, x: 40 }} transition={{ duration: 1.5, ease: 'easeOut' }} whileInView={{ opacity: 1, x: 0 }} src="/real-estates/EliteEstate.png" alt="Elite Estate Project"/>
                    </div>
                </div>
            </div>
            <div className="pt-7 child2">
                <div>
                    <h1 className="pt-7">Greece Real Estate insights</h1>
                    <p className="pt-5">Property prices in Greece are expected to continue rising in 2024, though at a slower rate than in recent years. According to the Bank of Greece, property prices saw a 7.9% increase in 2023, reflecting a robust recovery since the financial crisis. Athens and Thessaloniki have emerged as key players in Greece's real estate resurgence, particularly since 2018. Athens, in particular, has experienced a strong surge in demand for residential properties. These areas have attracted significant attention thanks to their proximity to cultural landmarks, lively urban environments, and recent infrastructure upgrades.</p>
                </div>
                <div className="child2-child">
                    <motion.img initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                            src="/real-estates/active-graphs/1.png" alt="Graph" />
                    <motion.img initial={{ opacity: 0, y: 150 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                            src="/real-estates/active-graphs/2.png" alt="Graph" />
                    <motion.img initial={{ opacity: 0, y: 250 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.75, ease: 'easeOut' }} 
                            src="/real-estates/active-graphs/3.png" alt="Graph" />
                    <motion.img initial={{ opacity: 0, y: 350 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.0, ease: 'easeOut' }}  
                            src="/real-estates/active-graphs/4.png" alt="Graph" />
                    <motion.img initial={{ opacity: 0, y: 450 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.25, ease: 'easeOut' }}  
                            src="/real-estates/active-graphs/5.png" alt="Graph" />
                </div>
            </div>
            <div className="pb-10">
                <p className="pt-2">Furthermore, Greece's booming tourism industry has a substantial influence on the real estate market, especially in high-demand locations such as Santorini, Mykonos, and Crete. Properties in these regions, frequently utilized as short-term rentals, offer strong returns, particularly during peak tourist seasons. The rising popularity of Greece as a tourist hotspot—drawing over 33 million visitors in 2023—continues to drive growth in this segment of the real estate market.</p>
                <p className="pt-5">Data from the Bank of Greece indicates that residential property prices in central Athens surged by over 35% between 2018 and 2023, as the surge in foreign investment, along with the resurgence of domestic demand, has been a key driver of this growth.</p>
                <p className="pt-5">The Greek government has implemented several tax incentives to boost the real estate market, including reductions in the ENFIA property tax and the suspension of VAT on new construction until 2025. These initiatives have effectively drawn both domestic and foreign investors, fueling market growth. However, the stability of these incentives is uncertain. Future governments may revise or withdraw these tax policies, potentially impacting property values and investor returns.</p>
            </div>
            <div className="pb-12 last-child">
                <div>
                <video controls className="p-5">
                    <source src='https://hif-greece.s3.ap-northeast-1.amazonaws.com/intro.MOV' type="video/mp4" />
                </video>
                </div>
                <div></div>
                <div>
                    <h1>Our commitment to B2B</h1>
                    <p className="pt-5">
                        HIF is committed to safeguarding the interests of our B2B partners, which is why we do not engage in direct property sales to investors. Instead, all sales are conducted exclusively through our trusted network of local agencies. This approach ensures that our partners maintain a competitive edge and reinforces our dedication to building strong, mutually beneficial relationships within the industry. By prioritizing the rights of our B2B partners, we create a reliable and transparent business environment that benefits all parties involved.
                    </p>
                    <p className="pt-5 pb-5">
                        We firmly believe that the success of our projects is rooted in the strength of our partnerships. By working hand-in-hand with local agencies, we ensure that investors receive expert guidance tailored to the nuances of their respective markets. This collaborative approach not only protects our partners' business interests but also fosters trust and long-term cooperation. We are dedicated to supporting the growth and success of our partners while maintaining the highest standards of professionalism and integrity in every transaction.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RealEstate
