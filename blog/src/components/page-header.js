import React from 'react'
import styled from 'styled-components'

const PH = styled.header`
    padding: 1rem;
`

const PageHeader = props => {
    return (
        <>
            <PH>
                <h1>{props.title}</h1>
                <h6>{props.subtitle}</h6>
            </PH>
        </>
    )
}

export default PageHeader;