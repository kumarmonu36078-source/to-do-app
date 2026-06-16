import React from 'react';
import webp1 from '../assets/webp1.webp';
import webp2 from '../assets/webp2.webp';
import webp3 from '../assets/webp3.webp';

const HeroPage = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide d-none d-sm-block" data-bs-ride="carousel">
      {/* Indicators (Niche ke dots/bars) */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      {/* Slides Inner Content */}
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active mb-5">
          <img src={webp1} className="d-block w-100" alt="Slide 1" style={{ height: '500px', objectFit: 'cover' }} />
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <img src={webp2} className="d-block w-100" alt="Slide 2" style={{ height: '500px', objectFit: 'cover' }} />
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <img src={webp3} className="d-block w-100" alt="Slide 3" style={{ height: '500px', objectFit: 'cover' }} />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>

      {/* Controls (Next/Prev Buttons) - Inhe dhyan se check karein */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default HeroPage;