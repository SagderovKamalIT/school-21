import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from '../../assets/models/cube-animation.json';

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

    return () => anim.destroy(); // очистка при размонтировании
  }, []);

  return (
    <div
      ref={container}
      style={{
        width: "clamp(600px, 49vw, 1035px)",
        height: "clamp(300px, 30vw, 582px)",
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,
        pointerEvents: 'none',
      }}
    ></div>
  );
}
