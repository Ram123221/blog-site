import "../../../GlobalColors.scss";
import {useEffect, useState} from "react";
import { Header } from '../../Data/data';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';

function Carousel() {
    const [itemNumber, setItemNumber] = useState<number>(0);
    const [leftEndReached, setLeftEndReached] = useState<boolean>(true);
    const [rightEndReached, setRightEndReached] = useState<boolean>(false);

    const { carousel } = Header;

    const increaseItemNumber = ()=>{
        setItemNumber(itemNumber+1);
    };

    const decreaseItemNumber = ()=>{
        setItemNumber(itemNumber-1);
    };

    const checkEndReached = ()=>{
        if(itemNumber == 0){
            setLeftEndReached(true);
        }
        else if(itemNumber == carousel.length-1){
            setRightEndReached(true);
        }
        else{
            setLeftEndReached(false);
            setRightEndReached(false);
        }
    };

    useEffect(()=>{
        console.log("rendered!!!");
    }, []);

    useEffect(()=>{
        checkEndReached();
        console.log(itemNumber);
    }, [itemNumber]);

  return (
    <div id="carousel-container">

        {/*extras here*/}
        <span onClick={decreaseItemNumber} style={{display: (leftEndReached)?"none":"block"}}><FaAngleLeft /></span>
        <span onClick={increaseItemNumber} style={{display: (rightEndReached)?"none":"block"}}><FaAngleRight /></span>
        
        {/*dots*/}
        <div id="dots-container">
                <span className={itemNumber==0?"dot active":'dot'}></span>
                <span className={itemNumber==1?"dot active":'dot'}></span>
                <span className={itemNumber==2?"dot active":'dot'}></span>
                <span className={itemNumber==3?"dot active":'dot'}></span>
            </div>
        
            <div id="carousel" style={{transform: `translateX(-${itemNumber * 100}%)`}}>
            
            {
                carousel.map(carousel_item=>{
                    
                    const {id, img_url, heading, summary} = carousel_item;

                    return (
                        <div className="carousel-item" style={{backgroundImage: `linear-gradient(rgba(6, 6, 6, 0.121) 65%,rgba(6, 6, 6, 0.3)), url(${img_url})`}} key={id}>
                            
                            <h2 className="medium-font">
                                {heading}
                            </h2>

                            <p className="small-font">
                                {summary}
                            </p>

                        </div>
                    );
                })
            }

        </div>
    </div>
  )
}

export default Carousel;
