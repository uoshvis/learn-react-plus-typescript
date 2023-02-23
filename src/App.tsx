import React from 'react'
import logo from './logo.svg'
import './App.css'

interface Props {
    url: string
    className?: string
    children: React.ReactNode
}

const Link = ({ url, className, children }: Props) => {
    return (
        <a
            className={className}
            target="_blank"
            rel="noopener noreferrer"
            href={url}
        >
            {children}
        </a>
    )
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <Link url="https://reactjs.org">
                    Learn React with TypeScript
                </Link>
            </header>
        </div>
    )
}

export default App
