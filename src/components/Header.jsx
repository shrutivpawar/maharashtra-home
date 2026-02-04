export default function Header() {
  return (
    <>
      <div className="top-strip">
        <div>महाराष्ट्र शासन | Government of Maharashtra</div>
        <div></div>
      </div>

      <div className="main-header">
        <div className="logo-container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" alt="Emblem of India" />
        <div className="logo-text">
            <h2>गृह विभाग</h2> <h2 className="dept-name">Home Department</h2>
            <p>Government of Maharashtra</p>
        </div>
    </div>
        <img src="https://www.seekpng.com/png/full/255-2557683_seal-of-maharashtra-government-of-maharashtra.png" />
      </div>

      <nav className="navbar">
        <a href="/" className="nav-item active">HOME</a>
        <div className="dropdown">
            <button className="dropbtn">ABOUT US <span className="arrow">⋁</span></button>
            <div className="dropdown-content">
                <a href="/introduction">INTRODUCTION</a>
                <a href="/objectives">OBJECTIVES & FUNCTIONS</a>
            <a href="/admin-setup">ADMINISTRATIVE SETUP</a>
            <a href="/organisation">ORGANISATION</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">MEDIA <span className="arrow">⋁</span></button>
          <div className="dropdown-content">
            <a href="/news">NEWS</a>
            <a href="/press-release">PRESS RELEASE</a>
            <a href="/photo-gallery">PHOTO GALLERY</a>
          </div>
        </div>

        <a href="/directory" className="nav-item">DIRECTORY</a>

        <div className="dropdown">
          <button className="dropbtn">DOCUMENTS <span className="arrow">⋁</span></button>
          <div className="dropdown-content">
            <a href="/acts">ACTS/RULES</a>
            <a href="/gr">GOVERNMENT RESOLUTIONS</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">NOTICES <span className="arrow">⋁</span></button>
          <div className="dropdown-content">
            <a href="/tenders">TENDERS</a>
            <a href="/recruitment">RECRUITMENT</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">SCHEMES/PROGRAMMES <span className="arrow">⋁</span></button>
          <div className="dropdown-content">
            <a href="/schemes">ALL SCHEMES</a>
          </div>
        </div>

        <a href="/offices" className="nav-item">CP AND SP OFFICES</a>
      </nav>
    </>
  );
}
        