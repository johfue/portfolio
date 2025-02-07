import React from "react";
import Boop from '/components/boop'


export default function Thumb(props) {

const [isBooped, setIsBooped] = React.useState(true);

function handleBoop() {
    setIsBooped(!isBooped);
}

// function call() {
//     const thumbs = document.querySelectorAll(".thumbnail__wrap");
//     thumbs.forEach((thumb) => {
//       thumb.addEventListener("mouseenter", () => {
//         thumb.classList.add("boop");
//       });
    
//       thumb.addEventListener("animationend", (e) => {
//         thumb.classList.remove("boop");
//       });
//     });}

// useEffect(() => {
//     call();
// });

    return (
    <>
    <a href={"work/" + props.page} class="thumbnail__wrap ">
    <Boop>

        <figure class="thumbnail">
            <h3>{props.name}</h3>
             <img src={"/images/"+ props.image +"Thumb.png"} alt="" class="thumbnail__image"/>
        </figure>
        </Boop>

    </a>
    {/* <a href={"work/" + props.page} class={(isBooped ? "" : "boop") + " thumbnail__wrap "} onMouseEnter={handleBoop} onAnimationEnd={handleBoop}>
        <figure class="thumbnail">
            <h3>{props.name}</h3>
             <img src={"/images/"+ props.image +"Thumb.png"} alt="" class="thumbnail__image"/>
        </figure>
    </a> */}


    
    </>
    )
}