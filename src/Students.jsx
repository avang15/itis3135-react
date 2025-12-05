import { useState, useEffect } from "react";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const [show, setShow] = useState({
    name: true,
    mascot: true,
    image: true,
    personalStatement: true,
    backgrounds: true,
    classes: true,
    extra: true,
    quote: true,
    links: true,
  });

  useEffect(() => {
    fetch("https://dvonb.xyz/api/2025-fall/itis-3135/students?full=1")
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  const filteredStudents = students.filter((s) => {
    const fullName = `${s.name.first} ${s.name.last}`.toLowerCase();
    return fullName.includes(searchTerm.toLowerCase());
  });

  const s = filteredStudents[currentIndex] || null;

  return (
    <main style={{ padding: "20px" }}>
      <h2>Student Introductions</h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by first or last name..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setCurrentIndex(0);
        }}
        style={{
          padding: "8px",
          width: "300px",
          marginBottom: "20px",
        }}
      />

      {/* Result count */}
      <p>
        <strong>Found:</strong> {filteredStudents.length} students
      </p>

      {/* Compact checkboxes */}
      <h3>Show Sections:</h3>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          marginBottom: "20px",
        }}
      >
        {Object.keys(show).map((key) => (
          <label
            key={key}
            style={{ display: "flex", alignItems: "center", gap: "4px" }}
          >
            <input
              type="checkbox"
              checked={show[key]}
              onChange={() => setShow({ ...show, [key]: !show[key] })}
            />
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </label>
        ))}
      </div>

      {/* Slideshow */}
      {filteredStudents.length > 0 && (
        <div style={{ marginBottom: "20px" }}>
          <button
            onClick={() =>
              setCurrentIndex(
                (currentIndex - 1 + filteredStudents.length) %
                  filteredStudents.length
              )
            }
          >
            Previous
          </button>

          <button
            onClick={() =>
              setCurrentIndex((currentIndex + 1) % filteredStudents.length)
            }
            style={{ marginLeft: "10px" }}
          >
            Next
          </button>
        </div>
      )}

      {/* Student Display */}
      {s ? (
        <div
          key={s.prefix}
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "10px",
            maxWidth: "700px",
          }}
        >
          {show.name && (
            <h3>
              {s.name.first} {s.name.last}
            </h3>
          )}

          {show.mascot && <p><strong>Mascot:</strong> {s.mascot}</p>}

          {show.image && s.media?.hasImage && (
            <>
              <img
                src={`https://dvonb.xyz${s.media.src}`}
                alt={s.name.first}
                style={{
                  width: "250px",
                  borderRadius: "8px",
                  display: "block",
                  marginBottom: "10px",
                }}
              />
              <p><em>{s.media.caption}</em></p>
            </>
          )}

          {show.personalStatement && (
            <>
              <h4>Personal Statement</h4>
              <p>{s.personalStatement}</p>
            </>
          )}

          {show.backgrounds && (
            <>
              <h4>Backgrounds</h4>
              <p><strong>Personal:</strong> {s.backgrounds.personal}</p>
              <p><strong>Professional:</strong> {s.backgrounds.professional}</p>
              <p><strong>Academic:</strong> {s.backgrounds.academic}</p>
            </>
          )}

          {show.classes && (
            <>
              <h4>Courses</h4>
              {s.courses.map((c) => (
                <p key={c.code}>
                  {c.dept} {c.num} — <strong>{c.name}</strong>: {c.reason}
                </p>
              ))}
            </>
          )}

          {show.extra && (
            <>
              <h4>Extra Info</h4>
              <p><strong>Fun fact:</strong> {s.funFact}</p>
              {s.additional && <p><strong>Additional:</strong> {s.additional}</p>}
            </>
          )}

          {show.quote && (
            <blockquote style={{ fontStyle: "italic", marginTop: "10px" }}>
              “{s.quote?.text}”
              <br />— {s.quote?.author}
            </blockquote>
          )}

          {show.links && (
            <>
              <h4>Links</h4>
              <p><a href={s.links.charlotte}>Charlotte Webpage</a></p>
              <p><a href={s.links.github}>GitHub</a></p>
              <p><a href={s.links.githubio}>GitHub.io</a></p>
              <p><a href={s.links.linkedin}>LinkedIn</a></p>
            </>
          )}
        </div>
      ) : (
        <p>No student found.</p>
      )}
    </main>
  );
}




