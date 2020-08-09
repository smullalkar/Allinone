import React from 'react'

function WomenProducts(props) {
    const { data, match, history} = props
    console.log(props, props.match)
    const elem = data.find(item => Number(item.id) === Number(match.params.id))
    console.log(elem)

    const handleClick = () => {
        if(!props.isAuth){
            return props.history.push('/signin')
          }
        props.addToCart(elem)
        history.push('/cart')
    }

    return (
        <div className='container'>
            <div className='container row text-light' style={{ margin: 'auto' }}>
                <div className='col-lg-5 col-md-5 col-sm-12 col-12'>
                    <img src={elem.img_url} className='img-fluid' alt='img'></img>
                </div>
                <div className='col-lg-7 col-md-7 col-sm-12 col-12'>
                    <h1>Product Details</h1>
                    <p className='text-muted'>{elem.description}</p>
                    <hr />
                    <h3>Type : <strong>{elem.name}</strong></h3>
                    <hr />
                    <p>Category : {elem.category}</p>
                    <hr />
                    <p>Brand : {elem.brand}</p>
                    <hr />
                    <p>Description : {elem.productDetails}</p>
                    <hr />
                    <p>Delivery : {elem.delivery}</p>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <button onClick={handleClick} className='btn btn-warning btn-lg'>Add to cart</button>
            </div>
        </div>
    )
}

export default WomenProducts