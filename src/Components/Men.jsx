import React from 'react'
import { Link, Route } from 'react-router-dom'
import MenProducts from './MenProducts'


function Men(props) {
    const { data, match, addToCart } = props
    const menItems = data.filter(item => {
        return item.category === 'Men'
    })

    if (props.match.params.orderBy == "asc") {
        menItems.sort((a, b) => a.price - b.price);
    }
    else if (props.match.params.orderBy == "desc") {
        menItems.sort((a, b) => b.price - a.price);
    }

    // console.log(data)
    return (
        <>
            <div className='row d-flex justify-content-center'>
            {props.match.params.orderBy == "asc" ?
                <Link to="desc"><button className='btn btn-warning'>Order By Descending Price</button></Link> :
                <Link to="asc"><button className='btn btn-warning'>Order By Ascending Price</button></Link>
            }
            </div>
            <div className='row px-5 py-3'>
                {
                    menItems && menItems.map(item => (
                        <div className='col-lg-4 col-md-6 col-sm-12 col-12 px-5 py-3 d-flex justify-content-center'>
                            <div className="card" style={{ maxWidth: '18rem' }} key={item.id}>
                                <Link to={`${match.url}/${item.id}`}><img src={item.img_url} className="card-img-top img-fluid" alt="img" /></Link>
                                <div className="card-body">
                                    <div className="card-text">
                                        <strong>Price : </strong>{item.price}
                                        <hr />
                                        <strong>Brand : </strong>{item.brand}
                                        <hr />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            {/* <Route path='/men/:id' render={(props) => <MenProducts addToCart={addToCart} data={data} {...props}/>}></Route> */}
        </>
    )
}

export default Men