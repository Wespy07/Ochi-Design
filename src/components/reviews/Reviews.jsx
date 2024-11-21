import React from 'react'
import './Reviews.css'
import ClientReview from '../Reusable/ClientReview'

function Reviews() {
    return (
        <div className='reviews-container text-[58px]'>
            <h2 className='px-12 pt-16 pb-2'>Clients Reviews</h2>
            <div>
                < ClientReview 
                company='Baba ka Dhaba' username='John Doe' service1='pure veg restraurant' src='./reviewers/1.png' 
                desc='They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5' />
                < ClientReview 
                company='Bhanupratap Bus Service' username='Jonah Doe' service1='travel agency' src='./reviewers/2.png' 
                desc='Ihor and his team tackled the projects with great professionalism and creativity. They understood our brand value and turned this into excellent slide designs. The process was seamless and very effective, so we decided to roll this out across all our presentation decks. Furthermore, their understanding, professionalism, and creativity have secured a continued partnership.' />
            </div>
        </div>
    )
}

export default Reviews