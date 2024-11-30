import React, { useEffect, useState } from 'react'
import './Preloader.css'

function Preloader() {
    const [progress, setProgress] = useState(1)

    useEffect(() => {
        const interval = setInterval(() => {
          setProgress((prev) => {
            if (prev >= 100) {
              clearInterval(interval); 
              return 100;
            }
            return prev + 1; 
          });
        }, 25); 
    
        return () => clearInterval(interval); 
      }, []);
    

    return (
        <div className='preloader'>
            <div className="loader">
                {progress}%
            </div>
        </div>
    )
}

export default Preloader