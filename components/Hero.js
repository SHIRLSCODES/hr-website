import Image from 'next/image'
import React from 'react'
import Slider from "react-slick";

function Hero() {


  return (
    <div>
     
      <div className=''>
        <Image src='/../public/asset 21.jpeg' alt='/' width='1400' height="30" />
      </div>
  
    
    </div>
  ) 

  // return (
  //   <Slider {...settings}>
  //     <div>
  //       <h3>1</h3>
  //     </div>
  //     <div>
  //       <h3>2</h3>
  //     </div>
  //     <div>
  //       <h3>3</h3>
  //     </div>
  //     <div>
  //       <h3>4</h3>
  //     </div>
  //     <div>
  //       <h3>5</h3>
  //     </div>
  //     <div>
  //       <h3>6</h3>
  //     </div>
  //   </Slider>
  // );
}

export default Hero