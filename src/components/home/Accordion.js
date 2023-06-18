import { useState } from "react";
import {CiCirclePlus} from 'react-icons/ci'
import {CiCircleMinus} from 'react-icons/ci'
export default function Accordion(props) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div
      style={{
        width: "100%",
        marginBottom: "15px",
        lineHeight: "15px",
        
      }}
    >
      <button
        style={{
          width: "100%",
          position: "relative",
          textAlign: "left",
          padding: "4px",
          borderRadius:"2px",
          boxShadow:isShowing ? "" : "0px 12px 18px -6px #3daae0",
          outline: "none",
          cursor: "pointer",
          background: isShowing ? "#ffffff" : "#f4f4f4",
          
        }}
        onClick={toggle}
        type="button"
      >
        <div className=" py-2 pl-2  flex-row  items-center  inline-flex  gap-x-28" style={{color :isShowing ? "var(--gray)" : "var(--gray-300)"}}>
        <span className="text-2xl ">{props.title}</span> {isShowing? <CiCircleMinus size={20}/> :<CiCirclePlus size={20}/>}  
        </div>
        
        
        
      </button>
      <div
        style={{ display: isShowing ? "block" : "none", padding: "15px",borderRadius:"2px", boxShadow:"0px 12px 18px -6px #3daae0",lineHeight: "1.5rem", background:"#ffffff",color:"var(--gray-300)", }}
        dangerouslySetInnerHTML={{
          __html: props.content
        }}
      />
    </div>
  );
}
