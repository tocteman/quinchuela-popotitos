import Header from './Header'
import GranimCanvas from "./GranimCanvas"


const layoutStyle = {
  padding: 20,
}



const Layout = props => (
  <div ><style jsx>{`
  div {
    margin-top: 33vh;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: blue;
    font-family: 'Arial';
  }

  a:hover {
    opacity: 0.6;
  }
`}</style>
    <GranimCanvas/>
    {props.children}
  </div>
)

export default Layout