import React, { useState } from 'react';
import './CourseItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const CourseItem = (props) => {
    const {name,price,img}=props.product;
    const [isEnrolled, setIsEnrolled] = useState(false);

    let addBtn = <button
        onClick={() => { props.addProduct(props.product); setIsEnrolled(true) }}
        className="btn btn-success" ><FontAwesomeIcon icon={faPlus} /> Enroll Now </button>

    if (isEnrolled) {
        addBtn = <button className="btn btn-success" disabled><FontAwesomeIcon icon={faCheckCircle} />Enrolled</button>;
    }


    return (
        <div className="course-details" >
            <img src={img} alt="product"/>
            <h2> {name} </h2>
            <p>Best Online Course for Beginner to Expert</p>
            <h4>Price: ${price.toFixed(2)} </h4>
            {addBtn}
        </div>
    );
};

export default CourseItem;