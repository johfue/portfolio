import React, {useEffect} from "react";

import CloseIcon from '/public/images/close-circle-outline.svg'
import PreviousIcon from '/public/images/chevron-left.svg'
import NextIcon from '/public/images/chevron-right.svg'
import Head from 'next/head'

function gall() {
    
    console.log("ran");
    
function _(x) {
	return document.getElementById(x);
}

var modal = _("modal");
var modalImg = _("modalImg");
var modalVideo = _("modalVideo");
var modalCaption = _("modalCaption");

var position = "foo";
var modalMedia = "foo";
var modalMediaCaption = "foo";
var saveScroll = "foo";

var main = document.querySelector("main");
var nav = document.querySelector("nav");

var modalList = document.querySelectorAll("figure");
for(var t=0; t<modalList.length; t++) {
    modalList[t].firstElementChild.addEventListener("click", modalExpand);
}

function hidden(bool) {
    if (bool) {
        modal.style.display = "block";
        main.style.display = "none";
        nav.style.display = "none";
    }
    else {
        modal.style.display = "none";
        main.style.display = "block";
        nav.style.display = "block";
    }

}

function modalUpdate() {
    if (modalMedia.tagName == "VIDEO") {
        modalImg.style.display = "none";
        modalVideo.src = modalMedia.firstElementChild.getAttribute('src');
        modalVideo.style.display = "block";

    }
    else {
        modalVideo.style.display = "none";
        modalImg.src = modalMedia.getAttribute('src');
        modalImg.style.display = "block";
    }
    
    if (modalMediaCaption.tagName != "FIGCAPTION") {
        modalCaption.innerHTML = "";
    }
    else {
        modalCaption.innerHTML = modalMediaCaption.innerHTML;
    }
    
    if (position <= 0) {
        _("previous").style.display = "none";
    }
    else if (position >= (modalList.length - 1)) {
        _("next").style.display = "none";
    }
    else {
        _("next").style.display = "inline";
        _("previous").style.display = "inline";
    }
}

function modalExpand() {
    console.log("ran2");
    position = Array.prototype.slice.call(modalList).indexOf(this.parentElement);
    
    modalMedia = this;
    modalMediaCaption = this.nextElementSibling;
    saveScroll = window.pageYOffset;
    modalUpdate();
    hidden(true);
    modal.scrollTo(0, 0);
    if (modal.classList.contains("invisible")) {
        modal.classList.remove("invisible");
        for (var i=0; i<btnList.length; i++) {
            btnList[i].style.visibility = "visible";
        }
    }
}

function modalTabUpdate() {
    modalMedia = modalList[position].firstElementChild;
    modalMediaCaption = modalList[position].firstElementChild.nextElementSibling;
    modalUpdate();
    modal.scrollTo(0, 0);
}

function next() {
    if (position < (modalList.length - 1)) {
        position += 1;
        modalTabUpdate();
    }
}

function previous() {
    if (position > 0) {
        position -= 1;
        modalTabUpdate();
    }
}


// swiping should tab through as well as left and right arrows
// Page numbers
// Animation for exiting and entering
// change cursor on hover


function closer() {
    hidden(false);
    window.scrollTo(0, saveScroll);
    modalVideo.pause();
    modalVideo.innerHTML = "";
}

_("previous").onclick = previous;
_("next").onclick = next;
_("close").onclick = closer;

window.onclick = function(event) {
  if (event.target == modal) {
    closer();
  }
};

document.onkeydown = function(evt) {
    switch (evt.keyCode) {
        case 37:
            previous();
            break;
        case 39:
            next();
            break;
        case 27:
            closer();
            break;
    }
};

var btnList = document.getElementsByClassName("modalBtn");

function btnVisible() {
    if (modal.classList.contains("invisible")) {
        modal.classList.remove("invisible");
        for (var i=0; i<btnList.length; i++) {
            btnList[i].style.visibility = "visible";
        }
    }
    else {
        modal.classList.add("invisible");
        for (var e=0; e<btnList.length; e++) {
            btnList[e].style.visibility = "hidden";
        }
    }
}

modalImg.onclick = btnVisible;
modalVideo.onclick = btnVisible;

}

export default function Gallery() {
    useEffect(() => {
    gall();
  });
//     if (typeof window !== "undefined") {
//     gall();
// }

  return (
    <>
    <aside style={{display: "none"}} id="modal">
        <img id="modalImg" src="/images/blank.png"/>
        <video controls id="modalVideo"></video>
        <span id="modalCaption">Hidden text</span>
        <button class="modalBtn" id="close"><CloseIcon /></button>
        <button class="modalBtn" id="previous"><PreviousIcon /></button>
        <button class="modalBtn" id="next"><NextIcon /></button>
    </aside>
    </>



)
}