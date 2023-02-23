import React from 'react'

export default function Counter() {
    const [count, setCount] = React.useState(0)

    const increment = () => setCount(count + 1)

    return <button onClick={increment}> Counter: {count}</button>
}
