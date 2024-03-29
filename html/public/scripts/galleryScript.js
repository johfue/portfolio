function _(x) {
	return document.getElementById(x);
}

var modal = _("modal");
var modalImg = _("modalImg");
var modalVideo = _("modalVideo");
var modalCaption = _("modalCaption");

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
        document.querySelector("b").style.bottom = "0";
    }
    else {
        modal.style.display = "none";
        main.style.display = "block";
        nav.style.display = "block";
        document.querySelector("b").style.bottom = "2em";
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