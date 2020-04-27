import styled from 'styled-components'
import Link from 'next/link'

const Button = styled.button`
    & {
      display: inline-block;
      color: #703A4B;
      font-size: 1em;
      margin: 1em;
      padding: 0.25em 1em;
      border: 2px solid #703A4B;
      border-radius: 3px;
      display: block;
      font-family: 'Lucida Console';
    }
    a {
      color: #703A4B;
      text-decoration: none;
    }
    &:hover {
      background-color: #C5AEB5;
      color: #3A1E26;
      border: 2px solid #3A1E26;
    }
    &:hover a {
      color: #3A1E26;
    }
`;

export default function Navigation(props) {
    return (
      <div>
        <style jsx>{`
        .{
          align-self: flex-start;
        }
        &{
          display: flex;
          flex-direction: row;
          justify-content: center;
          flex-shrink: 1;
          flex: 1;
          flex-basis: content;
          // align-self: flex-start;

        }
        `}</style>
          <Button><Link href='/'>
            <a>Home</a>
          </Link></Button>
          <Button><Link href='/about'>
            <a>About</a>
          </Link></Button>
          <Button><Link href='/work'>
            <a>Work</a>
          </Link></Button>
          <Button><Link href='/contact'>
            <a>Contact</a>
          </Link></Button>
      </div>
    )
  }