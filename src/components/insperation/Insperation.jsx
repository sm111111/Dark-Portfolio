import React from 'react'
import './Insperation.css'
import { MdOutlineLight } from "react-icons/md";
import { TbBulb } from "react-icons/tb";
import { RiMedalLine } from "react-icons/ri";


const Insperation = () => {
    const InsperationInfo = [
        { Insperation_icon: <MdOutlineLight />, Insperation_name: 'Innovators', Insperation_details: 'pushing boundaries to redefine what possible we embrace fresh ideas cutting-edge technology' },
        { Insperation_icon: <TbBulb />, Insperation_name: 'creatives', Insperation_details: 'turning imaganiation into reality. we craft unique inspiring solution and develope the skill' },
        { Insperation_icon: <RiMedalLine />, Insperation_name: 'visionaries', Insperation_details: 'exellence in every deatail. we are commited to delivering work that meets highest standards' }
    ]


    return (
        <div className='Insperation-container'>
            {
                InsperationInfo.length > 0 ? (
                    InsperationInfo.map((item, index) => (
                        <div className="insideConatiner-Insperation" key={index}>
                            <p>{item.Insperation_icon}</p>
                            <h2>{item.Insperation_name}</h2>
                            <h4>{item.Insperation_details}</h4>
                        </div>
                    ))
                ) : (<p>data not found</p>)
            }


        </div >
    )
}

export default Insperation
