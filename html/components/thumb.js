import React, {useEffect} from "react";

export default function Thumb(props) {

function call() {
    const thumbs = document.querySelectorAll(".thumbnail__wrap");
    thumbs.forEach((thumb) => {
      thumb.addEventListener("mouseenter", () => {
        thumb.classList.add("boop");
      });
    
      thumb.addEventListener("animationend", (e) => {
        thumb.classList.remove("boop");
      });
    });}

useEffect(() => {
    call();
});

    return (
    <>
    
    <a href={"work/" + props.page} class="thumbnail__wrap">
        <figure class="thumbnail">
            <h3>{props.name}</h3>
             <img src={"/images/"+ props.image +"Thumb.png"} alt="" class="thumbnail__image"/>
        </figure>
    </a>


    
    </>
    )
}