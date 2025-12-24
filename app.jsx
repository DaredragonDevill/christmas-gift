const { useState } = React;

const TOTAL_HEARTS = 14;

function App() {
  const [clicked, setClicked] = useState([]);

  const handleClick = (id) => {
    if (!clicked.includes(id)) {
      setClicked([...clicked, id]);
    }
  };

  return (
    <div className="container">
      <h1 className="title">🎄 Merry Christmas 🎄</h1>

      <div className="hearts-grid">
        {Array.from({ length: TOTAL_HEARTS }).map((_, i) => (
          <button
            key={i}
            className={`heart-btn ${clicked.includes(i) ? "clicked" : ""}`}
            onClick={() => handleClick(i)}
          >
            ❤️
          </button>
        ))}
      </div>

      {clicked.length === TOTAL_HEARTS && (
        <div className="secret-message">
          <p>I LOVE YOU</p>
          <p>AND THIS IS A SMALL GIFT FROM ME TO YOU</p>
          <p className="cutu">CUTU 🎁❤️</p>
        </div>
      )}
    </div>
  );
}

// Expose App globally for main.jsx
window.App = App;
