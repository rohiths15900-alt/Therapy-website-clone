import React from "react";

const Offt = () => {
  return (
    <section className="office-section" id="office">
      <div className="office-layout">
        <div className="office-photos">
          <div className="office-photo-backdrop" aria-hidden="true" />

          <img
            className="office-photo office-photo-main"
            src="/images/office1.jpeg"
            alt="A calm, welcoming therapy office with comfortable seating"
          />

          <img
            className="office-photo office-photo-detail"
            src="/images/office2.jpeg"
            alt="Another view of the therapy office"
          />
        </div>

        <div className="office-content">
          <p className="office-eyebrow">THE OFFICE</p>

          <h2 className="office-heading">
            A quiet space to
            <br />
            <span>feel at ease.</span>
          </h2>

          <p className="office-description">
            My Santa Monica office is a quiet, private space designed to feel
            calm and grounding, with natural light and a comfortable,
            uncluttered environment. Clients often share that the space itself
            helps them feel more at ease when they arrive.
          </p>

          <p className="office-location">
            <svg
              className="office-location-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 22s8-7.2 8-13a8 8 0 1 0-16 0c0 5.8 8 13 8 13Z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            <span>Santa Monica, California</span>
          </p>

          <a
            className="office-directions"
            href="https://www.google.com/maps/search/?api=1&query=Santa+Monica%2C+California"
            target="_blank"
            rel="noreferrer"
          >
            <span>GET DIRECTIONS</span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Offt;