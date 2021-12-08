import './App.css';

function App() {
  return (
    <nav className="nav-bar">
        <div className="nav-brand">
            <a className="brand-name" href="index.js">Phanindra</a>
            <div className="nav-links">
                <a href="index.js">Home</a>
                <a href="index.js">Live Tv</a>
                <a href="index.js">Tv Guide</a>
                <a href="index.js">video</a>
            </div>
        </div>
        <div className="Accounts">
            <input type="search"/>
            <button>SIGN IN</button>
            <button>SIGN UP</button>
        </div>
    </nav>
  );
}

export default App;
