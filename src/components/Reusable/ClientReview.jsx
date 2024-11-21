import React, { useState } from 'react';
import './ClientReview.css';
import Pill from './Pill';

function ClientReview({ company, username, service1, src, desc }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded((prev) => !prev);
    };

    return (
        <div className='text-lg border-t-[1px] border-b-[1px]'>
            <div className='flex px-14 gap-5 pt-5'>
                {/* Company Section */}
                <div className='w-[25%]'>
                    <p>{company}</p>
                </div>

                {/* Services Section (Preserve Space) */}
                <div className={`w-[25%] services-container ${isExpanded ? 'visible' : 'hidden'}`}>
                    {isExpanded ? (
                        <>
                            <p>Services:</p>
                            <Pill service1={service1} />
                        </>
                    ) : (
                        <div className="placeholder"></div> /* Placeholder to retain space */
                    )}
                </div>

                {/* Username and Content */}
                <div className='w-[38%]'>
                    <p>{username}</p>
                    <div className={`collapsible-content ${isExpanded ? 'expanded' : 'collapsed'}`}>
                        {isExpanded && (
                            <>
                                <img className='my-5 h-[111px] rounded-lg' src={src} alt={username} />
                                <p className='tracking-tighter leading-[22px] text-[16px]'>{desc}</p>
                            </>
                        )}
                    </div>
                </div>

                {/* Read Button */}
                <div className='w-[8%] flex flex-col items-end'>
                    <button onClick={toggleExpand}>
                        {isExpanded ? 'Collapse' : 'Read'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ClientReview;
