import React from 'react'
import logo from './logo.svg'
import './App.css'
import Link from './Link'
import LinkGen from './ComplicatedStringGen'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <Link
                    url="https://reactjs.org"
                    className="App-link"
                    variant="regular"
                >
                    Learn React with TypeScript
                </Link>
                <LinkGen
                    crop="fill"
                    font={{ size: 100, weight: 200 }}
                    height={100}
                    width={200}
                ></LinkGen>
            </header>
        </div>
    )
}

export default App
