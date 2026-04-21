"use client";

import React, { useState, useEffect } from "react";

import "../styles/Mytools.css";


const MyTools = () => {
 



  return (
    <section className="tools-section" id="tools">
      <div className="tools-container">
      
        

        <div className="animated-list-wrapper">

         <div className="velocity-wrapper">
  <div className="scroll-track track-left">
    <div className="scroll-content">
      FIGMA <span className="separatoor"></span> REACT <span className="separatoor"></span> REDUX <span className="separatoor"></span> JAVASCRIPT <span className="separatoor"></span> TAILWIND <span className="separatoor"></span> BOOTSTRAP <span className="separatoor"></span> WORDPRESS
    </div>
  </div>
  
  <div className="scroll-track track-right">
    <div className="scroll-content">
      PHP <span className="separatoor"></span> LARAVEL <span className="separatoor"></span> JAVA <span className="separatoor"></span> SPRINGBOOT <span className="separatoor"></span> NODE.JS <span className="separatoor"></span> REST API <span className="separatoor"></span> MVC
    </div>
  </div>

  <div className="scroll-track track-left">
    <div className="scroll-content">
      MYSQL <span className="separatoor"></span> MONGODB <span className="separatoor"></span> DOCKER <span className="separatoor"></span> GIT <span className="separatoor"></span> CI/CD <span className="separatoor"></span> CURSOR AI <span className="separatoor"></span> POSTMAN
    </div>
  </div>
</div> 
         

          <div className="list-fade-bottom"></div>
        </div>
      </div>
    </section>
  );
};

export default MyTools;