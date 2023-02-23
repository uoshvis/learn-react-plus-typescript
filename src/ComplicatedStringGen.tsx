import React from 'react'

interface ComplexConfig {
    width: number
    height: number
    crop: 'fill' | 'thumb'
    font: {
        family: string
        size: number
        weight: 100 | 200 | 300 | 400
    }
}

const LinkGen = (props: ComplexConfig) => {
    return <React.Fragment>{JSON.stringify(props, null, 2)}</React.Fragment>
}

export default LinkGen
