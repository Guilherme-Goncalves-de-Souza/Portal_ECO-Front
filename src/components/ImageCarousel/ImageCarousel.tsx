import React, { useState, useEffect, useRef } from 'react';
import './ImageCarousel.css';

// Importe as imagens no topo do arquivo
import PORTAL_ECO from '../../assets/carousel/PORTAL_ECO.png';
import image1 from '../../assets/carousel/image1.jpg';
import image2 from '../../assets/carousel/image2.jpg';
import image3 from '../../assets/carousel/image3.jpg';
import image4 from '../../assets/carousel/image4.jpg';

const ImageCarousel: React.FC = () => {
  const images: string[] = [PORTAL_ECO, image1, image2, image3, image4];

  const [currentIndex, setCurrentIndex] = useState(0);

  // UseRef para manter a referência do intervalo
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  // Trocar as imagens automático a cada 3 segundos
  useEffect(() => {
    intervalRef.current = setInterval(goToNext, 3000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);


  const handleManualNavigation = (action: 'next' | 'prev') => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }


    if (action === 'next') {
      goToNext();
    } else {
      goToPrev();
    }

    // Reinicia o intervalo após a navegação manual
    intervalRef.current = setInterval(goToNext, 3000);
  };

  return (
    <div className="carousel">
      <div className="carousel-images">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="carousel-image"
        />
      </div>
      <button className="prev-btn" onClick={() => handleManualNavigation('prev')}>
        &#9664;
      </button>
      <button className="next-btn" onClick={() => handleManualNavigation('next')}>
        &#9654;
      </button>
      <div className="indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
