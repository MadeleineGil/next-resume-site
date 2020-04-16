import Navigation from './Navigation'
import Footer from './Footer'

const layoutStyle = {
  // margin: 20,
  // padding: 20,
}

export default function Layout(props) {
  return (
    <div style={layoutStyle}>
      <Navigation/>
      {props.children}
      <style jsx>{`
        display: flex;
        justify-content: center;
        flex-direction:column;
        text-align: center;
        font-family: 'Arial';
        // background: url("/bg.jpg") no-repeat center center fixed;
        // background-size: cover;
        
      }
      `}</style>
      <Footer />
    </div>
  )
};