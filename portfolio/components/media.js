import ZoomIcon from '/public/images/magnify-plus-outline.svg'
import ExternalIcon from '/public/images/open-in-new.svg'

export function Img(props) {
    let personal = false;
    if (props.title === "Personal Work") {
        personal = true;
    }
    
    return (
        <>
            <img src={props.src} class={personal ? "expandableContent expandableContent-personal" : "expandableContent center"} alt={props.alt}/>
        </>)
}

export function Vid(props) {
    let personal = false;
    if (props.title === "Personal Work") {
        personal = true;
    }

    return (
        <>
        <video loop muted playsinline {...props.autoplay ? "autoplay" : ""} poster={props.poster} class={personal ? "expandableContent expandableContent-personal" : "expandableContent center"}>
        <source src={props.src}/>
            {props.alt}
        </video>

        </>
        )
}

export default function media(props) {

  return (
    <>
    
    <figure class={"work__figure " + props.class}>
        {props.type ? <Img {...props}/> : <Vid {...props}/>}
        <button class="expandBtn expandBtn-caption" onclick="modalExpand(this)"><ZoomIcon /></button>
        {props.caption ? <figcaption>{props.caption}</figcaption> : ""}
    </figure>
    
    </>
    )
}