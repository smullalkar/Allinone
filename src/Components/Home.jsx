import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <div className='container'>
                <Link to='/all/asc'><img src='https://matalan-content.imgix.net/uploads/asset_file/asset_file/264344/1580992732.7077792-FEB_FURTHER_REDUCTIONSHP_HERO_MORE_LINES.jpg?ixlib=rails-2.1.4&auto=format%2Ccompress&cs=tinysrgb&w=1200&s=9a8f1e32082563fb4cec9afd6146f656' className='img-fluid my-5'></img></Link>
            </div>
            <div>
                <img src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/4/13/05195e62-0ee0-44c1-8de3-6e3fd6258a8c1586761660995-Beauty-Essentials-Desktop-Banner--1-.jpg' className='img-fluid my-5'></img>
            </div>
        </>
    )
}

export default Home