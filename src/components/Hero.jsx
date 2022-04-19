import { React, useState } from "react";


function Hero() {
  const buttonStyle =
    "border-[2px] rounded-[5px] border-[#232A4E] px-[25px] py-[12px]";
    
  // const [elementIsVisible, setElementIsVisible] = useState(false);
  
  return (
   
      <div className="wrapper bg-[#081730] flex items-center justify-between px-[5rem] w-[100%] h-[40rem] relative z-[3]">
        {/* left side */}
        <div className="headings flex flex-col items-start justify-center h-[100%] text-[3rem]">
          <span>Theta NFT-based</span>{" "}
          <span>
            <b>Digital Rights Management</b>
          </span>
          <span className="text-[15px] text-[#525D6E]  ">
            The tangible life is an NFT-based Digital rights management system
            <br />
            That generates embedded code to verify rights and ownership of video and audio
          </span>
          
          {/* Buttons*/}
          
          <div className="buttons flex">
          <button className={buttonStyle+` hover:bg-[#5579c6] bg-[#1260CC] text-[0.8rem] my-[20px] `}>Connect Wallet</button>
        </div>

        </div>
        {/* upload */}
        <div className="Upload">
          
          
          
        </div>
      </div>
  );
}

export default Hero;
