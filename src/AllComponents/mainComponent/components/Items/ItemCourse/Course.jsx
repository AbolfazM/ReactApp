import React from 'react';
import './Course.css';

const Course = () => {
    return(
        <div class="w-52 h-40 relative top-52 TopCourse hover:bg-blue-100 hover:text-gray-700 mobile:top-52 mobile:w-48 mobile:mt-10 rounded-lg text-right text-white bg-blue-600 shadow-2xl" data-aos="zoom-out">
            <p class="p-6">برنامه نویسان</p>
            <p class="p-4 text-sm">ما برنامه نویسا اذیت میشیم تا هزاران کاربر عادی اذیت نشن</p>
        </div>
    );
}

export default Course;