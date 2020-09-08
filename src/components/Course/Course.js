import React, { useState } from 'react';
import './Course.css';
import fakeData from '../../fakeData';
import CourseItem from '../CourseItem/CourseItem';
import Cart from '../Cart/Cart';

const Course = () => {
    const [products, setProducts]=useState(fakeData);
    const [cart, setCart]=useState([]);
    const addProduct= product=>{
        const newCart=[...cart,product];
        setCart(newCart)
    }
    
    
    return (
        <div className="course-container" >
            <div className="course-item-container">
                {
                    products.map(pd=> <CourseItem product={pd}
                          key={pd.key}
                          addProduct={addProduct}
                        ></CourseItem> )
                }
            </div>
            <div className="cart-container">
                {
                    <Cart cart={cart} ></Cart>
                }
            </div>
        </div>
    );
};

export default Course;