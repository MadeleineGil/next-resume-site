import {LinkedinSquare} from '@styled-icons/boxicons-logos/LinkedinSquare'
import {Github} from '@styled-icons/boxicons-logos/Github'
import { useRouter } from 'next/router'

// const LinkedinIcon = styled.LinkedinIcon`

// `

//TODO: scaling
export default function Layout(props) {
  const router = useRouter()

  const handleClick = (e, href) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <div>
      <a href="https://www.linkedin.com/in/madeleinegillard">
        <LinkedinSquare  size="50" color="#703A4B"/>
      </a>
      <a href="https://github.com/MadeleineGil">
        <Github  size="50" color="#703A4B"/>
      </a>
      <style jsx>{`
        display: flex;
        justify-content: center;
        flex-direction:row;
        text-align: center;
        font-family: 'Arial';
        padding: 0.5em;
      `}</style>
    </div>
  )
};