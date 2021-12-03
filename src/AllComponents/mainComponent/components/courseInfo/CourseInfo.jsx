import React from 'react';

const CourseInfo = () => {
    return(
        <div>
            <div className="flex justify-center mobile:absolute mobile:-bottom-96 mobile:w-full">
                <div data-aos="fade-right" className="bg-gradient-to-l from-blue-300 to-blue-700 h-10 w-80 absolute -bottom-72 rounded-md">
                    <h4 className="text-white text-center text-4xl">دوره های آکادمی لورم</h4>
                </div>
            </div>
        </div>
    );
}

export default CourseInfo;