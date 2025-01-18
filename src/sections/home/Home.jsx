import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";

function Home() {
    return (
        <div className="home-main" id="home">
            <div className="home-overlay">
                <video src='https://hif-greece.s3.ap-northeast-1.amazonaws.com/stock-videos/asian-family-at-the-beach.mp4' autoPlay loop muted />
                <div className="home-content">
                    <h1 className="text-2xl">
                    <Typewriter
                        options={{
                            strings: ['Hope Ignites Faith', 'Đầu tư Hy Lạp - Thắp sáng tương lai', '投资希腊 - 投资希望', 'תקווה מעוררת אמונה', 'umut inancı ateşler'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Home
