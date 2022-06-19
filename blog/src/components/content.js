import React from 'react'
import styled from 'styled-components'

const ContentImg = styled.img`
  position: absolute;
  width: 100%;
  object-fit: cover;
  object-position: center center;
  opacity: 1;
  transition: none 0s ease 0s;

`

const Contents = props => {
  console.log(props)
  return (
    <>
      <div>
        <ContentImg className='main-img' src='https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-and-stars-shine_107791-7397.jpg?w=2000'></ContentImg>
        <div className='row' style={{ marginTop: 35 + 'vh' }}>
          <div className='col text-center'>
            <h1>{props.title}</h1>
            {
              props.subtitle ? <h4>{props.subtitle}</h4> : <></>
            }

          </div>
        </div>
      </div>

    </>
  )
}


export default Contents