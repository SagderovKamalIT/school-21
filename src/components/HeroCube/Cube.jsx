import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from '../../assets/models/cube-animation.json';

import CubeStyles from "./Cube.module.scss";

export default function LottieExample() {
  const container = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    return () => anim.destroy(); 
  }, []);

  return (
    <div className={CubeStyles.heroCube}
      ref={container}
    ></div>
  );
}
