import avatarjessica from "./avatarjessica.jpeg";
function ThirdPractice() {
  return (
    <div>
      <div className="container">
        <img src={avatarjessica} alt="Avatar" />
        <div className="nameperson">
          <h2>Jessica Randall</h2>
          <p>London, United Kingdom</p>
        </div>

        <div className="buttons">
          <p>"Front-end developer and avid reader."</p>
          <button>GitHub</button>
          <button>Frontend Mentor</button>
          <button>LinkedIn</button>
          <button>Twitter</button>
          <button>Instagram</button>
        </div>
      </div>
    </div>
  );
}

export default ThirdPractice;
