import React from 'react'
import styled from 'styled-components'

const ContentSt = styled.div`
    margin:1rem 1rem 1rem 0;
`;





const Contents = props => (
  <>
    <ContentSt>
        <div>{props.children}</div>
    </ContentSt>
  </>
)

export default Contents