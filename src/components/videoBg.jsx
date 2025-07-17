import React, { useEffect, useRef } from 'react';
import video from '../assets/videobg.mp4';

const Main = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id='home' className='main'>
      <video
        ref={videoRef}
        src={video}
        muted
      />
    </div>
  );
}

export default Main;