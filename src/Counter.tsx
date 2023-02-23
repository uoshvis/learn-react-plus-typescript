import React from 'react'

interface Props {
    increment: () => void
    count: number
}

export default function Counter({ increment, count }: Props) {
    return <button onClick={increment}> Counter: {count}</button>
}
