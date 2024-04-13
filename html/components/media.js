import ZoomIcon from '/public/images/magnify-plus-outline.svg'
import ExternalIcon from '/public/images/open-in-new.svg'

export function Img(props) {

    return (
        <>
            <img src={props.src} class={props.unexpandable ? "work__content" : "work__content expandableContent"} alt={props.alt}/>
        </>
    )
}

export function Vid(props) {

    return (
        <>
        <video loop={props.autoplay} controls={!(props.autoplay)} muted={props.autoplay} playsinline autoplay={props.autoplay} poster={props.poster} controlslist="nodownload" disablepictureinpicture class={(props.unexpandable ? "work__content" : "work__content expandableContent") + " " + (props.short ? "short" : "")}>
        {/* <video loop={!(props.playOnce)} controls={props.controls} muted={!(props.soundOn)} playsinline autoplay={props.autoplay} poster={props.poster} class={props.unexpandable ? "unexpandableContent" : "expandableContent center"}> */}
        <source src={props.src}/>
            {props.alt}
        </video>

        </>
        )
}

function content(param) {
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

function mediaBtn(param) {
    if (!param.unexpandable) {
        return (
            <>
            <button class="expandBtn" onclick="modalExpand(this)"><ZoomIcon /></button>
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
        {mediaBtn(props[0])}
        {/* <button class="expandBtn" onclick="modalExpand(this)"><ZoomIcon /></button> */}
    </figure>
    
    </>
    )
}