import React, { useState } from 'react';
import ClientReview from '../Reusable/ClientReview';
import reviewsData from './reviewsData';

function Reviews() {
    const [expandedIndex, setExpandedIndex] = useState(0); // Default to first review

    const toggleExpand = (index) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    };



    return (
        <div className="reviews-container">
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

