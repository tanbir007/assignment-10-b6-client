import React from 'react';
import './PremiumAccess.css';
import successImg from '../../Images/success.jpg';
import { useLoaderData } from 'react-router-dom';

const PremiumAccess = () => {
    const courseData = useLoaderData();
    const {title, author} = courseData;
    const {name} = author;
    return (
      <div className="text-center mb-4 premium">
        <img className="w-100" src={successImg} alt="" />
        <h4>Purchased Course:</h4>
        <div className="purchase-course w-75 py-2 mx-auto">
          <h3 className="text-danger">{title}</h3>
          <h6 className='text-muted'>Instructor: {name}</h6>
        </div>
        <h2 className="mt-3">
          🎈 You've successfully unlock the{" "}
          <span className="text-danger ">premium access! 🎈</span>
        </h2>
      </div>
    );
};

export default PremiumAccess;