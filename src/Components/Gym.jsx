import React from 'react';
import './Gym.css';

const Gym = () => {
  return (
    <div className='mainContainer'>

        <div className="upper">
            <div className="content1">
             <h1>Where Fitness Meets Fun and Results Are Achieved</h1>
            </div>
            <div className="content2">
            <p>Include an inspiring image or video that showcases your gym's energetic atmosphere, trainers, or members working out.</p>
            </div>
        </div>
        <div className='lower'>
            <div className="left">
                <div className="upper1">

             <img src="https://i.ytimg.com/vi/gey73xiS8F4/maxresdefault.jpg" alt="" />
             <img src="data:image/jpeg;base64,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" alt="" />
                </div>
                <div className="lower1">

             <img src="https://www.pixelstalk.net/wp-content/uploads/images6/Fitness-Desktop-Wallpaper.jpg" alt="" />
                </div>

            </div>
            <div className="right">
                <div className="lower1">


                <img src="https://wallpaperaccess.com/full/1087621.jpg" alt="" />
                </div>
                <div className='upper1'>

                <img src="https://wallpapercave.com/wp/wp6331008.jpg" alt="" />
                <img src="https://img.freepik.com/premium-photo/woman-training-gym_946657-755.jpg" alt="" />
                </div>

            </div>
        </div>

    </div>
  )
}

export default Gym