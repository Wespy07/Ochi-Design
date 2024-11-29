import React from 'react';
import './ClientReview.css';
import Pill from './Pill';

function ClientReview({ company, username, service1, src, desc, isExpanded, toggleExpand }) {
    return (
        <div className="text-lg border-t-[1px] border-b-[1px]">
            <div className="max-md2:flex-col max-md2:gap-0 max-md2:relative flex px-14 gap-5 py-5">

                <div className="w-[25%] title-container">
                    <p>{company}</p>
                </div>

                <div className={`w-[25%] services-container transition-all duration-300 ease-in-out ${isExpanded ? 'expanded' : 'collapsed'
                        }`}
                >
                    {isExpanded ? (
                        <>
                            <p>Services:</p>
                            <Pill service1={service1} />
                        </>
                    ) : (
                        <div className="placeholder"></div>
                    )}
                </div>

                <div className="w-[38%]">
                    <p className='username-box'>{username}</p>
                    <div className={`review-img-desc collapsible-content transition-all duration-300 ease-in-out ${isExpanded ? 'expanded' : 'collapsed'
                            }`}
                    >
                        <img className="my-5 h-[111px] rounded-lg"
                            src={src}
                        />
                        <p className="max-lg:text-[15px] review-text max-lg:leading-[19px] tracking-tighter leading-[22px] text-[16px] desc-container">
                            {desc}
                        </p>
                    </div>
                </div>

                <div className="w-[8%] flex flex-col items-end">
                    <button className='client-review-btn' onClick={toggleExpand}>
                        <svg className="fill-white shrink-0"
                            width="16"
                            height="16"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                y="7"
                                width="16"
                                height="2"
                                rx="1"
                                className={`transform origin-center transition duration-200 ease-out ${isExpanded && '!rotate-180'
                                    }`}
                            />
                            <rect
                                y="7"
                                width="16"
                                height="2"
                                rx="1"
                                className={`transform origin-center rotate-90 transition duration-200 ease-out ${isExpanded && '!rotate-180'
                                    }`}
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ClientReview;
