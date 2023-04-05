import React from 'react'
import './About.css'
import Aboutimg from './2.jpg'


function About() {
  return (
    <div className="about_component_space">
      <div className="container">
        <div className="row">
        <div className="col_2">
        
        <img src={Aboutimg} alt="images" className="About_img"/>
           
          
            <div className="about_meta">
            <h1 className="About_heading">About Me</h1>
            <p className="About_text p_p_color">An "about me" section is the introductory segment<br/> of your resume.
             It briefly explains your professional<br/> background, skills and accomplishments.
             </p>
            <p className="About_text p_p_color">An "about me" section is the introductory segment<br/> of your resume.
            It briefly explains your professional<br/> background, skills and accomplishments..</p>
            <p className="About_text p_p_color">An "about me" section is the introductory segment<br/> of your resume.
            It briefly explains your professional<br/> background, skills and accomplishments..</p>
             
            <div className="about_button d_flex align_item_center"> 
               <button className="about_btn_pointer">Downoald CV</button>
               <button className="about_btn_pointer">Hire Me</button></div>
            </div>
           
         </div>
        </div>
      </div>
              <h1 className="heading">My Awesome Service</h1>
              <p className='heading_p_color'>There are many variatios of passages of lorem ipsum available</p>
              <p className='heading_pp_color'>but the majority have suffred alteration</p>
    </div>
  )
}

export default About
