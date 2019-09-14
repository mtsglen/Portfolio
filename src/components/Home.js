import React from 'react';
import '../../src/App.css';


class Home extends React.Component {
    render(){
      return (
        <div className='Home'>
            <img className='profilePic' src='images/img/StephProfilePic.jpg' alt='Profile Pic' />
            <h2>Welcome To My Page!</h2>
            <h4>My name is Stephanie Glendenning.  I have recently graduated from a full stack web development bootcamp and I am looking to make a career pivot into the tech world.</h4>
            <p>I am a highly successful Project Operations professional with progressive career history of managing complex projects efficiently and profitably across multiple industries. This includes finding, developing and implementing new processes to streamline efficiencies.  I am making a switch out of an operations career and into a career in technology with a recent Web Development Boot Camp at the University of Denver. I am trained in cutting edge open source programming languages along with a drive to continue learning new technologies and a history of being recognized for problem solving, customer service, data analysis, communication, team leadership and organization skills. </p>
            {/* <p>Please take a look around to get an idea of my background and experience.  If you would like to conect, click the contact button!</p> */}
        </div>
      );
    }
}
export default Home;