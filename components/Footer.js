import {LinkedinSquare} from '@styled-icons/boxicons-logos/LinkedinSquare'
import {Github} from '@styled-icons/boxicons-logos/Github'


//TODO: scaling
export default function Layout(props) {
  return (
    <div>
      <LinkedinSquare size="50" color="#703A4B" />
      <Github size="50" color="#703A4B" />
      <style jsx>{`
        display: flex;
        justify-content: center;
        flex-direction:row;
        text-align: center;
        font-family: 'Arial';
        padding: 3em;
      `}</style>
    </div>
  )
};