import ZoomIcon from '/public/images/magnify-plus-outline.svg'
import ExternalIcon from '/public/images/open-in-new.svg'

export function Img(props) {

    return (
        <>
            <img src={props.src} class={props.personal ? "expandableContent expandableContent-personal" : "expandableContent center"} alt={props.alt}/>
        </>
    )
}

export function Vid(props) {

    return (
        <>
        <video loop muted playsinline autoplay={props.autoplay} poster={props.poster} class={props.personal ? "expandableContent expandableContent-personal" : "expandableContent center"}>
        <source src={props.src}/>
            {props.alt}
        </video>

        </>
        )
}

function content(param) {
console.log(param);
    if (param.type === "image") {
        return (
            <>
            <Img {...param}/>
            </>
            )
    }
    else {
        return (
            <>
            <Vid {...param}/>
            </>
        )
    }
}

export default function Media(...props) {
    return (
    <>
    
    <figure class={"work__figure " + props[0].class}>
        {content(props[0])}
        
        {props[0].caption && <figcaption>{props[0].caption}</figcaption>}
        <button class="expandBtn expandBtn-caption" onclick="modalExpand(this)"><ZoomIcon /></button>
    </figure>
    
    </>
    )
}