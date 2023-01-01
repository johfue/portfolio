import ZoomIcon from '/public/images/magnify-plus-outline.svg'
import ExternalIcon from '/public/images/open-in-new.svg'

export function Img(props) {
    return (
        <>
            <img src={props.src} class="expandableContent center" alt={props.alt}/>
        </>)
}

export function Vid(props) {
    return (
        <>
        <video loop muted playsinline poster={props.poster} class="expandableContent expandableContent-personal">
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
        {props.type ? <figcaption>{props.caption}</figcaption> : ""}
    </figure>
    
    </>
    )
}