import Logo from "./Imgs/logo1.png";
import Vanilla from "./Imgs/vanilla.jpg"
import Chocolate from "./Imgs/chocolate.jpg"
import Srawberry from "./Imgs/strawberry.jpg"
import RedVelvet from "./Imgs/redVelvet.jpg"
import Lemon from "./Imgs/lemon.jpg"
import Oven from "./Imgs/oven.png"
import Freshness from "./Imgs/fresh.png"
import CustomerService from "./Imgs/24-7.png"
import Affordable from "./Imgs/low-cost.png"
import Discount from "./Imgs/coupon.png"
import Quality from "./Imgs/high-quality.png"

const ShopDeatails={
 ShopName: " Apna Cake shop ",
 ShopImg : Logo,
 TagLine:"Love At First Bite."
}

const Features=[{
    featureName: "A good Oven",
    featureImg:Oven
},
{
    featureName:"Freshness" ,
    featureImg:Freshness
},
{
    featureName:" Customer Service" ,
    featureImg:CustomerService
},
{
    featureName:"Affordable prices" ,
    featureImg:Affordable
},
{
    featureName:"Discounts and Coupons" ,
    featureImg:Discount
}
{
    featureName:"Quality" ,
    featureImg:Quality
}
];
const Flavors= [
    {
    flavourName:'Vanilla',
    flavourImg:Vanilla},
   {
    flavourName:'Chocolate',
    flavourImg:Chocolate},
   {
    flavourName:'Strawberry',
    flavourImg:Srawberry},
   {
    flavourName:'Red Velvet',
    flavourImg:RedVelvet},
   {
    flavourName:'Lemon',
    flavourImg:Lemon}


 ];
const theme= {
    primaryColor: '#ff6347', // Tomato
    secondaryColor: '#ffa500', // Orange
    headingColor: '#4b0082', // Indigo
    subheadingColor: '#20b2aa', // Light Sea Green
  }

export {ShopDeatails,Features,Flavors,theme}
