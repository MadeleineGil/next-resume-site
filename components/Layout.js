import Navigation from './Navigation'
import Footer from './Footer'

const layoutStyle = {
  // margin: 20,
  // padding: 20,
}

export default function Layout(props) {
  return (
    <div>
      <Navigation/>
      {props.children}
      <style jsx>{`
      & {
        display: flex;
        justify-content: space-between;
        align-content: space-between;
        flex-direction: column;
        text-align: center;
        font-family: 'Lucida Console';
        // background: url("/bg.jpg") no-repeat center center fixed;
        // background-size: cover;
        align-items: center;
        align-content: center;
      }
      `}</style>
      <Footer />
    </div>
  )
};