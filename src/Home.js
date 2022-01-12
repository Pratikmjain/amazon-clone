import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
            {/* product id, title, price,rating,image */}
            <div className='home__row'>
                <Product id='12321341'
                    title='The Lean Startup: How  Creates Radically Successful Business Paperback'
                    price={11.96}
                    rating={5}
                    image='https://images-na.ssl-images-amazon.com/images/I/51aEhyjQGrL._SX316_BO1,204,203,200_.jpg' />
                <Product id='49538094'
                    title='Redux Digital Sports Watch Multi-Functional Watch for Boys'
                    price={239.0}
                    rating={4}
                    image='https://m.media-amazon.com/images/I/51SN4OktKKL._UX385_.jpg' />
            </div>
            <div className='home__row'>

                <Product id='4903850'
                    title='Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa (Black)'
                    price={199.99}
                    rating={3}
                    image='https://m.media-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg' />

                <Product id='23445930'
                    title='Samsung Galaxy A12 (Black, 6GB RAM, 128GB Storage) with No Cost EMI'
                    price={98.99}
                    rating={5}
                    image='https://m.media-amazon.com/images/I/91dUPqvXhbL._SL1500_.jpg' />

                <Product id='3254354345'
                    title='INALSA Stand Mixer Professional Mix Master-Heavy Duty'
                    price={598.99}
                    rating={4}
                    image='https://m.media-amazon.com/images/I/6113lMeZpWS._SL1200_.jpg' />
            </div>
            {/*  product */}
        </div>


    )
}

export default Home;
