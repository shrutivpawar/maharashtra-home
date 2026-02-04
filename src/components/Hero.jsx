import React, { useState, useEffect } from 'react';

const slides = [
  {
    src: 'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/05/maharashtra-secretariat-pti-image-1652864292.jpg',
    title: 'Maharashtra Government',
    subtitle: "Committed to Safety & Service",
  },
  {
    src: 'https://police-station.com/wp-content/uploads/2022/10/Maharashtra-Police-team-1.jpg',
    title: 'Public Services',
    subtitle: 'Working for the people',
  },
  {
    src: 'https://aceupdate.com/wp-content/uploads/2024/02/Himalaya-Projects.jpg',
    title: 'Developing Infrastructure',
    subtitle: 'Better and CLean neighbourhoods',
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  function prev() {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }

  function next() {
    setIndex((i) => (i + 1) % slides.length);
  }

  return (
    <div className="hero slideshow">
      {slides.map((s, i) => (
        <div key={i} className={`slide ${i === index ? 'active' : ''}`}>
          <img src={s.src} alt={s.title} />
          {i === index && (
            <div className="slide-content">
              <h3>{s.title}</h3>
              <p>{s.subtitle}</p>
            </div>
          )}
        </div>
      ))}

      <div className="slide-controls">
        <button className="ctrl prev" onClick={prev} aria-label="Previous slide">‹</button>
        <button className="ctrl next" onClick={next} aria-label="Next slide">›</button>
      </div>

      <div className="slide-indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}