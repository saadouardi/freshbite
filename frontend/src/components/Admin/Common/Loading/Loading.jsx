import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from '../../../assets/animations/loading.json'; // Adjust the path to your animation JSON file
import './Loading.scss';

const LoadingAnimation = () => {
    const animationContainer = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            container: animationContainer.current,
            animationData: animationData,
            renderer: 'svg',
            loop: true,
            autoplay: true,
        });
    }, []);

    return (
        <div className='Loading'>
            <div className='Loading-Icon' ref={animationContainer} style={{ width: 200, height: 200 }}></div>
        </div>
    );
};

export default LoadingAnimation;
