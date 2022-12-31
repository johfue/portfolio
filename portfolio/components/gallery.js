import Script from 'next/script'

export default function Gallery() {

<Script async src="/gallery.js"></Script>

  return (
    <>
    <aside style="display: none;" id="modal">
        <img id="modalImg" src="/images/blank.png"/>
        <video controls id="modalVideo"></video>
        <span id="modalCaption">Hidden text</span>
        <button class="modalBtn" id="close"></button>
        <button class="modalBtn" id="previous"></button>
        <button class="modalBtn" id="next"></button>
    </aside>
    </>
  )
}


