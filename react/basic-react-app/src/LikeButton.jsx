import { IoIosHeartEmpty } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import "./App.css"
import { useState } from "react";
const LikeButton = () => {
    let [isLiked, setIsLiked] = useState(false);
    let [clicks, setClicks] = useState(0);
    let toggleLike = () =>{
        setIsLiked(!isLiked);
        setClicks(clicks+1);
    }
    return (
        <>
        <h1>
            Clicks = {clicks}
        </h1>
        <button className="LikeBtnDiv" onClick={toggleLike}>
           {
            isLiked ? <FaHeart className="likeButtonfill" /> : <IoIosHeartEmpty className="likeButton" />
           }
            
        </button>
        </>
    )
}

export default LikeButton