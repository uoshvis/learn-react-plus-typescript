import React from 'react'

interface ComplexConfig {
    /**
     * The width of the image
     */
    width: number
    height: number
    crop: 'fill' | 'thumb'
    font: {
        /**
         * @default "arial"
         */
        family?: string
        size: number
        weight: 100 | 200 | 300 | 400
    }
}

const LinkGen = ({
    width,
    height,
    crop,
    font: { family = 'arial', size, weight },
}: ComplexConfig) => {
    return (
        <React.Fragment>
            {JSON.stringify(
                { width, height, crop, family, size, weight },
                null,
                2
            )}
        </React.Fragment>
    )
}

export default LinkGen
