import Header from './Header'
import Navigation from './Navigation'

const layoutStyle = {
  margin: 20,
  padding: 20,
}

export default function Layout(props) {
  return (
    <div style={layoutStyle}>
      <Header />
      <Navigation/>
      {props.children}
      <style jsx>{`
        text-align: center;
      `}</style>
    </div>
  )
};