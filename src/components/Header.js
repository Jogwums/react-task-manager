import React from 'react'
import styled, {css} from 'styled-components'

const Head = styled.div`
    margin: 0 auto;
    padding: .5rem;
    color: var(--white);
    font-size: 1rem;
    display: flex;
    justify-content: center;

`;
const Header = () => {
    return (
        <Head className="header">
           <h2>Task Manager</h2>
        </Head>
    )
}

export default Header