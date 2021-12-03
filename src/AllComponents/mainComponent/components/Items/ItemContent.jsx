import React from 'react';
import Course from './ItemCourse/Course';
import Support from './ItemSupport/Support';
import ProjectBase from './ItemProject/ProjectBase';
import Refund from './ItemRefund/Refund';

const ItemContent = () => {
    return(
        <div className="flex justify-center space-x-5 mobile:flex-wrap mobile:space-x-3 mobile:space-y-2 mobile:content-center tablet:flex-nowrap">
            <Course />
            <Support />
            <ProjectBase />
            <Refund />
        </div>
    );
}

export default ItemContent;