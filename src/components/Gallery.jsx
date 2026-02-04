import React, { useRef } from 'react';

const photos = [
  'https://cdnbbsr.s3waas.gov.in/s3a012869311d64a44b5a0d567cd20de04/uploads/2025/08/20250801271396588-1024x768.jpeg',
  'https://cdnbbsr.s3waas.gov.in/s3a012869311d64a44b5a0d567cd20de04/uploads/2025/08/20250801629824349-1024x626.jpeg',
  'https://cdnbbsr.s3waas.gov.in/s3a012869311d64a44b5a0d567cd20de04/uploads/2025/08/202508011909709715-662x1024.jpeg',
  'https://cdnbbsr.s3waas.gov.in/s3a012869311d64a44b5a0d567cd20de04/uploads/2025/08/20250801641204983-1024x643.jpeg',
  'https://cdnbbsr.s3waas.gov.in/s3a012869311d64a44b5a0d567cd20de04/uploads/2025/08/20250801111571360-1024x683.jpeg',
];

export default function Gallery() {
  const row = useRef(null);

  function scrollBy(offset) {
    if (!row.current) return;
    row.current.scrollBy({ left: offset, behavior: 'smooth' });
  }

  return (
    <div id="gallery" className="photo-gallery section">
      <h3>Photo Gallery</h3>

      <div className="gallery-frame">
        <button
          className="gallery-control left"
          onClick={() => scrollBy(-360)}
          aria-label="Previous"
        >
          ‹
        </button>

        <div ref={row} className="gallery-row">
          {photos.map((src, i) => (
            <div key={i} className="gallery-item">
              <img src={src} alt={`photo-${i}`} />
            </div>
          ))}
        </div>

        <button
          className="gallery-control right"
          onClick={() => scrollBy(360)}
          aria-label="Next"
        >
          ›
        </button>
      </div>
    </div>
  );
}