import Navigation from './Navigation'
import Footer from './Footer'

const layoutStyle = {
  // margin: 20,
  // padding: 20,
}

export default function Layout(props) {
  return (
    <div>
      <style jsx>{`
      & {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        text-align: center;
        font-family: 'Lucida Console';
        align-items: center;
      }
      `}</style>
      <Navigation/>
      {props.children}
      <Footer />
    </div>
  )
};