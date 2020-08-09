import React from 'react'
import { Link } from 'react-router-dom'

function Women(props) {
    const { data, match } = props
    const WomenItems = data.filter(item => {
        return item.category === 'Women'
    })

    if (props.match.params.orderBy == "asc") {
        WomenItems.sort((a, b) => a.price - b.price);
    }
    else if (props.match.params.orderBy == "desc") {
        WomenItems.sort((a, b) => b.price - a.price);
    }
    console.log(WomenItems)
    
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
                    WomenItems && WomenItems.map(item => (
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
        </>
    )
}

export default Women