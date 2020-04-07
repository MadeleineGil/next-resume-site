import styled from 'styled-components'
import Link from 'next/link'

const Button = styled.button`
    display: inline-block;
    color: #703A4B;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #703A4B;
    border-radius: 3px;
    display: block;
`;

const NavButton = props => <Button>
    
</Button>

export default function Navigation(props) {
    return (
      <div>
        <NavButton>
            Button1
        </NavButton>
      </div>
    )
  }