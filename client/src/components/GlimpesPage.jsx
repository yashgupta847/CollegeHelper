import React, { useMemo, useState, useEffect, useRef } from "react";
import "./GlimpesPage.css";

const imagesData = [
  { src: "/assets/img1.jpg", title: " Sports Complex", category: "Campus" },
  { src: "/assets/img2.jpg", title: "Ramanujan Food", category: "Hostel" },
  { src: "/assets/img3.jpg", title: "Auditorium", category: "Campus" },
  { src: "/assets/img4.jpg", title: "Auditorium", category: "Campus" },

  { src: "/assets/img5.jpg", title: "Club Briefing", category: "Events" },
  { src: "/assets/img6.jpg", title: "Ramanujan Hostel Television", category: "Hostel" },
  { src: "/assets/img7.jpg", title: "Ramanujan Sports Event", category: "Sports" },
  { src: "/assets/img8.jpg", title: "New Lecture Theature(NLT)", category: "Campus" },

  { src: "/assets/img9.jpg", title: "Football Event", category: "Sports" },
  { src: "/assets/img10.jpg", title: "Electrical Class", category: "Labs" },
  { src: "/assets/img11.jpg", title: "CSE-AI Branch", category: "Events" },
  { src: "/assets/img12.jpg", title: "Ramanujan Hostel", category: "Hostel" },

  { src: "/assets/img13.jpg", title: "Hostel Block A", category: "Hostel" },
  { src: "/assets/img14.jpg", title: "Sports", category: "Sports" },
  { src: "/assets/img15.jpg", title: "Birthday Celebration", category: "Co-curriculars" },
  { src: "/assets/img16.jpg", title: "Auction", category: "Events" },

  { src: "/assets/img17.jpg", title: "Railway Station Near College", category: "Co-curriculars" },
  {
    src: "/assets/img18.jpg",
    title: "Electrical Branch Outing",
    category: "Co-curriculars",
  },
  {
    src: "/assets/img19.jpg",
    title: "Special Dinner",
    category: "Hostel",
  },
  { src: "/assets/img20.jpg", title: "Project Exhibition", category: "Events" },
  { src: "/assets/img21.jpg", title: "Greenery View", category: "Campus" },
  { src: "/assets/img22.jpg", title: "View", category: "Campus" },
  {
    src: "/assets/img23.jpg",
    title: "Ambedkar Park",
    category: "Co-curriculars",
  },
  { src: "/assets/img24.jpg", title: "Event ShouryaUtsava", category: "Campus" },

  { src: "/assets/img25.jpg", title:"Enjoy", category: "Co-curriculars" },
];

const ALL = "All";

const categoriesFromData = [
  ALL,
  ...Array.from(new Set(imagesData.map((i) => i.category))),
];

const GlimpsesPage = () => {
  const [activeCategory, setActiveCategory] = useState(ALL);
  const [query, setQuery] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  const filtered = useMemo(() => {
    return imagesData.filter((img) => {
      const matchesCategory =
        activeCategory === ALL ? true : img.category === activeCategory;
      const matchesQuery = img.title
        .toLowerCase()
        .includes(query.trim().toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  const openModal = (indexInFiltered) => {
    setCurrentIdx(indexInFiltered);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const prev = () =>
    setCurrentIdx(
      (s) => (s - 1 + filtered.length) % Math.max(filtered.length, 1)
    );
  const next = () =>
    setCurrentIdx((s) => (s + 1) % Math.max(filtered.length, 1));

  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalOpen, filtered.length]);

  // small ref to trap focus / scroll-lock if you want (lightweight approach)
  const modalRef = useRef();

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
      modalRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [modalOpen]);

  return (
    <div className="glimpses-page">
      <h1 className="glimpses-title">Glimpses of IET Lucknow</h1>

      <div className="controls">
        <div className="filters">
          {categoriesFromData.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${cat === activeCategory ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="search">
          <input
            type="search"
            placeholder="Search by title (e.g. 'Lab', 'Fest')"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="glimpses-gallery">
        {filtered.length === 0 ? (
          <div className="empty">No results found.</div>
        ) : (
          filtered.map((img, idx) => (
            <div
              key={`${img.src}-${idx}`}
              className="glimpse-card"
              onClick={() => openModal(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") openModal(idx);
              }}
            >
              <img
                src={img.src}
                alt={img.title}
                className="glimpse-image"
                loading="lazy"
              />
              <div className="overlay">
                <div className="meta">
                  <div className="title">{img.title}</div>
                  <div className="cat">{img.category}</div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {modalOpen && filtered.length > 0 && (
        <div
          className="modal"
          onClick={closeModal}
          aria-modal="true"
          role="dialog"
          tabIndex={-1}
          ref={modalRef}
        >
          <button
            className="modal-close"
            onClick={closeModal}
            aria-label="Close"
          >
            ×
          </button>

          <button
            className="modal-prev"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous"
          >
            ‹
          </button>

          <div className="modal-inner" onClick={(e) => e.stopPropagation()}>
            <img
              src={filtered[currentIdx].src}
              alt={filtered[currentIdx].title}
              className="modal-content"
            />
            <div className="modal-caption">
              <strong>{filtered[currentIdx].title}</strong>
              <br></br>
              <span className="modal-cat">{filtered[currentIdx].category}</span>
            </div>
          </div>

          <button
            className="modal-next"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
};

export default GlimpsesPage;
