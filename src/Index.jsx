import Header from './Header';
import Footer from './Footer';

// src/pages/Home.jsx
export default function Home() {
  return (
    <>
      {/* Decorative images */}
      <img
        src="/images/birds.jpeg"
        alt="Decorative Left"
        className="side-image left"
      />
      <img
        src="/images/birds.jpeg"
        alt="Decorative Right"
        className="side-image right"
      />

      <main>
        <h2>ITIS 3135 Home</h2>
        <p>Hello, welcome to my ITIS 3135 Course Page!</p>
        <p>
          This is where you can find links to all of my completed course work
          throughout ITIS 3135.
        </p>
      </main>
    </>
  );
}
