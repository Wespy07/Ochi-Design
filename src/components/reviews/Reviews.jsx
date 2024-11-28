import React, { useState } from 'react';
import ClientReview from '../Reusable/ClientReview';
import reviewsData from './reviewsData';

function Reviews() {
    const [expandedIndex, setExpandedIndex] = useState(0); 

    const toggleExpand = (index) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    };



    return (
        <div data-scroll data-scroll-speed='-0.1' className="reviews-container py-16">
            <h2 className="max-xsm:text-[30px] max-sm:text-[40px] px-12 pb-2 text-[58px]">Clients Reviews</h2>
            {reviewsData.map((review, index) => (
                <ClientReview
                    key={index}
                    isExpanded={expandedIndex === index}
                    toggleExpand={() => toggleExpand(index)}
                    {...review}
                />
            ))}
        </div>
    );
}

export default Reviews;

