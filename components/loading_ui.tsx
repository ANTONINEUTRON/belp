import Image from 'next/image';
import { useState, useEffect } from 'react';

const LoadingUI = () => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity((currentOpacity) => (currentOpacity === 1 ? 0 : currentOpacity + 0.1));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center my-5">
      <div>
        <Image
          className={`animate-pulse opacity-${opacity}`}
          src="/logo.png"
          alt="App Logo"
          width={500}
          height={500}
          />
        {/* <span>Loading...</span> */}
      </div>
      
    </div>
  );
};

export default LoadingUI;