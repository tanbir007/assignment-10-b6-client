import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import './Category.css';

const Category = () => {
    const categoryCourses = useLoaderData();
    return (
        <div className='mb-3'>
            <h2 className='text-center text-muted mb-4'>Selected Category: <span className='text-danger'>{categoryCourses[0].category_name}</span></h2>
            <div className="category-container">
                {
                    categoryCourses.map(category => <Course
                        key={category._id}
                        category={category}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default Category;