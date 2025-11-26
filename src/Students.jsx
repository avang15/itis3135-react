import Header from './Header';
import Footer from './Footer';
import { useState, useEffect } from "react";

export default function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("https://dvonb.xyz/api/2025-fall/itis-3135/students?full=1")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  return (
    <main>
      {/* Decorative side images */}
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
      <h2>Students</h2>

      {students.map((s) => (
        <div key={s.prefix} style={{ marginBottom: "2rem", borderBottom: "1px solid #ccc", paddingBottom: "1rem" }}>
          {/* Acknowledgement */}
          <p><strong>{s.acknowledgement}</strong></p>

          {/* Name */}
          <h3>{s.name.first} {s.name.middleInitial} {s.name.last}</h3>

          {/* Photo */}
          {s.media?.hasImage && (
            <div>
              <img
                src={`https://dvonb.xyz${s.media.src}`}
                alt={s.name.first}
                style={{ width: "200px", borderRadius: "8px" }}
              />
              <p>{s.media.caption}</p>
            </div>
          )}

          {/* Personal Statement */}
          <p>{s.personalStatement}</p>

          {/* Backgrounds */}
          <p><strong>Personal Background:</strong> {s.backgrounds.personal}</p>
          <p><strong>Professional Background:</strong> {s.backgrounds.professional}</p>
          <p><strong>Academic Background:</strong> {s.backgrounds.academic}</p>

          {/* Platform */}
          <p><strong>Primary Computer:</strong> {s.platform.device}, {s.platform.os}</p>

          {/* Courses */}
          <p><strong>Courses I’m Taking, & Why:</strong></p>
          <ul>
            {s.courses.map((course, index) => (
              <li key={index}>
                {course.dept} {course.num} - {course.name}: {course.reason}
              </li>
            ))}
          </ul>

          {/* Fun Fact & Additional */}
          <p><strong>Funny/Interesting Item to Remember Me by:</strong> {s.funFact}</p>
          {s.additional && <p><strong>I’d also like to share:</strong> {s.additional}</p>}

          {/* Quote */}
          {s.quote && (
            <blockquote>
              <p>"{s.quote.text}"</p>
              <footer>- {s.quote.author}</footer>
            </blockquote>
          )}
        </div>
      ))}
    </main>
  );
}



