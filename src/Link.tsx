import React from 'react'

interface Props {
    url: string
    className?: string
    variant: 'regular' | 'dark'
    children: React.ReactNode
}

const Link = ({ url, variant, className, children }: Props) => {
    const hasHyphen = className?.includes('-') ?? false // knows all string methods and that string can be undefined and a boolean by default

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
