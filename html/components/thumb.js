import React from "react";
import Boop from '/components/boop'


export default function Thumb(props) {

const [isBooped, setIsBooped] = React.useState(true);

function handleBoop() {
    setIsBooped(!isBooped);
}

    return (
    <>
    <a href={"work/" + props.page} class="thumbnail__wrap ">
    <Boop>

        <figure class="thumbnail">
            <h3 class="h3--thumbnail">{props.name}</h3>
            <div class={"thumbnail__imageWrap + thumbnail__image--" + props.index}>
                <img src={"/images/" + props.image +"Thumbnail.jpg"} alt="" class={"thumbnail__image"}/>
            </div>
        </figure>
        </Boop>

    </a>
    </>
    )
}