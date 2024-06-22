import "./Home.css"
import {ShopDeatails,theme} from "./../configData"
import Feature from "./../components/feature/feature"
import Flavours from "./../components/Flavours/flavour"

function Home() {
    const { ShopName, ShopImg, TagLine } = ShopDeatails;
  return (<>
    <div style={{ textAlign: 'center', color: theme.primaryColor }}>
      <img src={ShopImg} alt="Shop Logo" className="shopLogo"/>
      <h1 style={{ color: theme.headingColor }}>{ShopName}</h1>
      <p style={{ color: theme.subheadingColor }}>{TagLine}</p>
    </div>

  <Feature/>
  <Flavours/>
  </>
  )
}

export default Home