import React, { useEffect, useState } from 'react'

const ImageSlider = () => {

    const techLogos = ['html.svg', 'css.svg', 'bootstrap.svg', 'js.svg', 'react.svg', 'next.svg', 'gatsby.png', 'redux.svg', 'git.svg'];

    const angle = 360 / techLogos.length;
    const [rotateIndex, setRotateIndex] = useState(0);
    const [distance , setDistance] = useState(200)

    useEffect(() => {
        const interval = setInterval(() => {
            setRotateIndex(prev => prev + 1);
        }, 2000);

        return () => clearInterval(interval);
    }, [techLogos.length]);

    useEffect(() => {
        const handleResize = () => {
            setDistance(window.innerWidth <= 576 ? 130 : 200);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <h3 className='section-title mb-4'>Technology Known</h3>
                <div className="circle-container">
                    {techLogos.map((img, i) => {
                        return (
                            <>
                                <img key={i} src={`${process.env.PUBLIC_URL}/${img}`} alt={img} className={`${img.replace("/", "").split('.')[0]} circle-img`} style={{
                                    transform: ` rotate(${i * angle + rotateIndex * angle}deg) translate(${distance}px)  rotate(-${i * angle + rotateIndex * angle}deg)`,
                                }} />
                            </>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ImageSlider;
