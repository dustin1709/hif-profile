import React from "react";
import "./Education.css";

function Education() {
    return (
        <div id="education-consulting">
        
        <div style={{ 
            backgroundImage: `url('/pexels-nurseryart-346885.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: '0.87',
            paddingLeft: '5%', paddingRight: '5%', paddingTop: '3%', paddingBottom: '17%'
        }}>
            <div className="p-10 clear-both"></div>
            <h1 style={{color: "black", fontSize: '350%'}}>
                Education Consulting
            </h1>
            <div style={{
                    backgroundColor: 'rgb(245, 243, 242, 75%)',
                    padding: '2.8%'
                }}>
                    <div className="edu-grid">
                        <div>
                            <div className="desc-text-right">
                            <h1 className="text-4xl">A Pathway to success</h1>
                            <p className="text-2xl">
                                By the education consulting arm of HIF, we maintain close connections with both international and public schools in Greece, ensuring a healthy and exceptional educational environment for the children of our investors.
                                <br />
                                Therefore, we have developed support services such as academic program consulting, exam preparation, and application guidance to help students secure offers from top universities.
                            </p>
                            <p className="text-2xl p-5">
                                A solid foundation based on the IB (International Baccalaureate) model fosters intellectual, character, and skill development, opening up new opportunities and contributing to the creation of a progressive and civilized society.
                            </p>
                            </div>
                        </div>
                        <div></div>
                        <figure className="desc-img-left">
                            <img src='/EDUCATION.jpg'  alt='university-of-Athens'/>
                            <figcaption className="text-xl text-center">University of Athens. <i>Src: Unsplashed.</i></figcaption>
                        </figure>
                    </div>
                    
                    <div style={{padding: '1.5%', clear: 'both'}}></div>
                    <h1 className="text-3xl">Our Partners</h1>
                    <img src='/colleges.png' alt='partners-college' className="pb-5" />
            </div>
            <div className="p-12 clear-both"></div>
        </div>
        </div>
    )
}

export default Education
