import React from 'react'

interface Props {
    url: string
    className?: string
    variant: 'regular' | 'dark'
    children: React.ReactNode
}

const Link = ({ url, variant, className, children }: Props) => {
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

export default Link
