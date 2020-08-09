import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Cart extends Component {
    constructor(props) {
        super(props)
    }

    handleChange = (id) => {
        var changeData = this.props.data.filter(elem => {
            return elem.id !== id
        })
        this.props.removeFromCart(changeData)
    }

    render() {
        const { data, isAuth, handleLogout } = this.props
        // if(!isAuth){
        //     return <Redirect to='/signin'/>
        // }
        let bill = 0
        for (var i = 0; i < data.length; i++) {
            bill += data[i].price
        }
        console.log('data', data)
        return (
            <>
                <div className="container-fluid" >
                    <div className='row d-flex justify-content-center'>
                        <h2 className='text-warning'>My shopping bag({data.length} items)</h2>
                    </div>
                    <div className='row'>
                        {
                            data && data.map((item, index) => (
                                <div className='col-lg-3 col-md-4 col-sm-6 col-12 mt-md-3 mt-sm-3 mt-3 d-flex justify-content-center'>
                                    <div className="card" key={item.id} style={{ maxWidth: '18rem' }}>
                                        <div className="row no-gutters">
                                            <div className="col-4">
                                                <img src={item.img_url} className="card-img p-2" alt="img" />
                                            </div>
                                            <div className="col-8">
                                                <div className="card-body">
                                                    <h5 className="card-title">{item.name}</h5>
                                                    <p className="card-text">{item.brand}</p>
                                                    <p className="card-text">Price :{item.price}</p>
                                                    <button className='card-text btn btn-warning' onClick={() => this.handleChange(item.id)}>remove</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            ))
                        }
                    </div>
                </div>
                <div className='row d-flex justify-content-center mt-3'>
                    {
                        data && data.length != 0 ?
                            <div className="card text-white bg-warning p-5">
                                <div className="card-header">Total</div>
                                <div className="card-body">
                                    <h5 className="card-title">Items : {data.length}</h5>
                                    <p className="card-text">total bill : {bill}</p>
                                </div>
                            </div>
                            :
                            <div />
                    }
                </div>
            </>
        )
    }

}

export default Cart