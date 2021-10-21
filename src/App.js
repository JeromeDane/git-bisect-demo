import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>☝️ Check out the cool rotating logo! 💪</p>
        <a
          className="App-link"
          href="https://docs.google.com/presentation/d/1kuMkfC-Ir7ejwjdh0sdsfnCtD2RUHykL0V8ndKll4uo/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          git bisect presentation slides
        </a>
      </header>
    </div>
  )
}

export default App
