import React from "react";
import { Button } from "react-bootstrap";

function CarouselFadeExample() {
  return (
    <div className="hero-banner position-relative overflow-hidden">
      <video className="w-100 h-100" autoPlay muted loop playsInline>
        <source src="/videos/VideoBanner.mp4" type="video/mp4" />
      </video>
      <div class="video-wave">
  <svg viewBox="0 0 1440 320">
    <path 
      fill="#c2e9d06e" 
      fill-opacity="1" 
       d="M0,40L80,38C160,36,320,32,480,30C640,28,800,32,960,36C1120,40,1280,44,1360,46L1440,48L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z">
    </path>
  </svg>
</div>

      <div className="hero-content position-absolute top-50 start-50 translate-middle text-center text-white">
        <h1 className="display-4 fw-bold mb-3">Bienvenido a Nuestra Clínica</h1>
        <p className="lead mb-4">
          Hemos estado cuidando tanto perros como gatos con amor y profesionalismo desde 1980. Podemos ayudar con todo, desde vacunación y asesoramiento sobre alimentación, hasta diagnósticos y tratamiento de enfermedades complejas.
        </p>
        <Button variant="success" size="lg" className="me-2">
          Agenda tu cita
        </Button>
        <Button variant="outline-light" size="lg">
          Contactanos
        </Button>
      </div>
    </div>
  );
}

export default CarouselFadeExample;
