import React, { useState } from 'react';
import './GlimpesPage.css';

const GlimpsesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const images = [
    '/assets/img1.jpg',
    '/assets/img2.jpg',
    '/assets/img3.jpg',
    '/assets/img4.jpg',
    '/assets/img5.jpg',
    '/assets/img6.jpg',
    '/assets/img7.jpg',
    '/assets/img8.jpg',
    '/assets/img9.jpg',
    '/assets/img10.jpg',
    '/assets/img11.jpg',
    '/assets/img12.jpg',
    '/assets/img13.jpg',
    '/assets/img14.jpg',
    '/assets/img15.jpg',
    '/assets/img16.jpg',
    '/assets/img17.jpg',
    '/assets/img18.jpg',
    '/assets/img19.jpg',
    '/assets/img20.jpg',
    '/assets/img21.jpg',
    '/assets/img22.jpg',
    '/assets/img23.jpg',
    '/assets/img24.jpg',
    '/assets/img25.jpg',
  ];

  const openModal = (src) => {
    setModalImage(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage('');
  };

  return (
    <div className="glimpses-page">
      <h1 className="glimpses-title">Glimpses of IET Lucknow</h1>
      <div className="glimpses-gallery">
        {images.map((src, index) => (
          <div key={index} className="glimpse-card" onClick={() => openModal(src)}>
            <img src={src} alt={`Glimpse ${index + 1}`} className="glimpse-image" />
          </div>
        ))}
      </div>

      {/* Modal for viewing the clicked image */}
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <span className="close" onClick={closeModal}>&times;</span>
          <img className="modal-content" src={modalImage} alt="Modal Image" />
        </div>
      )}
    </div>
  );
};

export default GlimpsesPage;
