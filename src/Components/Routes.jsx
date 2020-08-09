import React from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Men from './Men'
import WomenProducts from './WomenProducts'
import KidsProducts from './KidsProducts'
import Women from './Women';
import Kids from './Kids';
import Signin from './Redirect/Signin'
import Cart from './Cart'
import Faq from './Faq'
import Career from './Career'
import Contact from './Contact'
import { Component } from 'react';
import MenProducts from './MenProducts'
import All from './All'
import AllProducts from './AllProducts'
import Navbar from './Navbar'

let productArr = [
  {
    name: 'Jeans',
    id: '1',
    price: 3499,
    img_url: '/jeans1.jpg',
    category: 'Men',
    brand: 'Levis',
    description: 'Men Blue 513 Slim Straight Fit Mid-Rise Clean Look Jeans',
    productDetails: 'Blue dark wash 5-pocket mid-rise jeans, clean look, heavy fade, has a zip fly closure, and waistband with belt loops',
    delivery: 'delivery within 3-4 days'
  },
  {
    name: 'Shirt',
    id: '2',
    price: 2995,
    img_url: '/shirt1.jpg',
    category: 'Men',
    brand: 'Wrangler',
    description: 'Men Blue & Green Regular Fit Checked Reversible Casual Shirt',
    productDetails: 'Blue and Green checked reversible casual shirt, has a spread collar, long sleeves, snap button placket, curved hem, and 2 patch pockets',
    delivery: 'delivery within 5-6 days'
  },
  {
    name: 'Shoes',
    id: '3',
    price: 6995,
    img_url: '/shoes1.jpg',
    category: 'Men',
    brand: 'Nike',
    description: 'Men White RENEW RUN Running Shoes',
    productDetails: 'The Nike Renew Run keeps you moving with softer foam for a cushioned feel. Designed with the everyday runner in mind, this shoe delivers secure support and durable traction for comfort on the go.',
    delivery: 'delivery within 7-8 days'
  },
  {
    name: 'Kurta',
    id: '4',
    price: 1599,
    img_url: '/kurta2.jpg',
    category: 'Women',
    brand: 'Vishudh',
    description: 'Women Maroon & Gold-Toned Printed Kurti with Palazzos',
    productDetails: 'Maroon and gold-toned printed kurta with palazzos Maroon and goldtoned straight calf length kurta has a round neck threequarter sleeves straight hem side slits Maroon and goldtoned Printed palazzos has elasticated waistband, slipon closure',
    delivery: 'delivery within 4-5 days'
  },
  {
    name: 'Women Shoes',
    id: '5',
    price: 3599,
    img_url: '/shoes2.jpg',
    category: 'Women',
    brand: 'HRX by Hrithik Roshan',
    description: 'Women Pink Textile N-FLUX Running Shoes',
    productDetails: 'The new HRX Performance running shoe from N-FLUX collection is the Balanced Cushioning shoe to get you on the road. This neutral running shoe places your heel and forefoot at the same distance from the ground to encourage proper, stable & low-impact ride throughout your run.',
    delivery: 'delivery within 6 days'
  },
  {
    name: 'Women Perfume',
    id: '6',
    price: 5599,
    img_url: '/perfume2.jpg',
    category: 'Women',
    brand: 'GUESS',
    description: 'Women Dare Eau De Toilette 100 ml',
    productDetails: 'GUESS Dare Eau De Toilette Medium fragrance (lasts up to 2-3 hours)',
    delivery: 'delivery within 6 days'
  },
  {
    name: 'Tshirt',
    id: '7',
    price: 599,
    img_url: '/tshirt3.jpg',
    category: 'kids',
    brand: 'YK Justice League',
    description: 'Blue Black Printed Round Neck T-shirt',
    productDetails: 'Blue printed T-shirt, has a round neck, short sleeves',
    delivery: 'delivery within 4 days'
  },
  {
    name: 'Dress',
    id: '8',
    price: 999,
    img_url: '/dress3.jpg',
    category: 'kids',
    brand: 'Wish Karo',
    description: 'Girls Maroon Solid Fit and Flare Dress',
    productDetails: 'Maroon solid knitted fit and flare dress, has a round neck, sleeveless, zip closure,flared hem',
    delivery: 'delivery within 5 days'
  },
  {
    name: 'Clogs',
    id: '9',
    price: 1999,
    img_url: '/shoes3.jpg',
    category: 'kids',
    brand: 'Crocs',
    description: 'Unisex Black Solid Bayaband Clogs',
    productDetails: 'A pair of black solid clogs Cushioned footbed Patterned synthetic outsole',
    delivery: 'delivery within 6 days'
  },

]

class Routes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cartArray: [],
      isAuth: false
    }
  }

  addToCart = (item) => {
    this.setState({
      cartArray: [...this.state.cartArray, item]
    })
  }

  removeFromCart = (item) => {
    this.setState({
      cartArray: item
    })
  }

  handleAuth = (e) => {
    this.setState({
      isAuth: true
    })
    e.push('/')
  }

  handleLogout = () => {
    this.setState({
      isAuth: !this.state.isAuth,
      cartArray: []
    })
  }

  render() {
    const { isAuth , cartArray} = this.state
      return (
        <div className="App container-fluid">
          <Navbar isAuth={isAuth} handleLogout={this.handleLogout} cartArray={cartArray}/>
          <Switch>
            <Route exact path='/' component={Home}></Route>

            <Route path='/men/:orderBy(asc|desc)' exact render={(props) => <Men addToCart={this.addToCart} data={productArr} {...props} />}></Route>
            <Route path='/men/asc/:id' render={(props) => <MenProducts addToCart={this.addToCart} isAuth={isAuth} data={productArr} {...props} />}></Route>

            <Route path='/women/:orderBy(asc|desc)' exact render={(props) => <Women data={productArr} {...props} />}></Route>
            <Route path='/women/asc/:id' render={(props) => <WomenProducts addToCart={this.addToCart} isAuth={isAuth} data={productArr} {...props} />}></Route>

            <Route path='/kids/:orderBy(asc|desc)' exact render={(props) => <Kids data={productArr} {...props} />}></Route>
            <Route path='/kids/asc/:id' render={(props) => <KidsProducts addToCart={this.addToCart} isAuth={isAuth} data={productArr} {...props}/>}></Route>

            <Route path='/all/:orderBy(asc|desc)' exact render={(props) => <All data={productArr} {...props} />}></Route>
            <Route path='/all/asc/:id' render={(props) => <AllProducts addToCart={this.addToCart} isAuth={isAuth} data={productArr} {...props}/>}></Route>

            <Route path='/signin' render={(props) => <Signin {...props} isAuth={isAuth} handleClick={this.handleAuth} />}></Route>
            <Route path='/cart' render={(props) => <Cart handleLogout={this.handleLogout} data={this.state.cartArray} isAuth={isAuth} {...props} removeFromCart={this.removeFromCart} />}></Route>

            <Route path='/faq' component={Faq}></Route>
            <Route path='/career' component={Career}></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/contact' component={Contact}></Route>
            {/* <Route render={() =><div>Error: 404, Page not found</div>}/> */}
          </Switch>
        </div>
      );
  }
}

export default Routes;
