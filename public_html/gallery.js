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
    modalList[t].addEventListener("click", modalExpand);
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
        main.style.display = "grid";
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
}

function modalExpand() {
    position = Array.prototype.slice.call(modalList).indexOf(this);
    
    modalMedia = this.firstElementChild;
    modalCaption.innerHTML = this.firstElementChild.nextElementSibling.innerHTML;
    saveScroll = window.pageYOffset;
    modalUpdate();
    hidden(true);
    modal.scrollTo(0, 0);
}

function next() {
    position += 1;
    modalMedia = modalList[position].firstElementChild;
    modalCaption.innerHTML = modalList[position].firstElementChild.nextElementSibling.innerHTML;
    modalUpdate;
    modal.scrollTo(0, 0);
    
}
function previous() {
    position -= 1;
    modalMedia = modalList[position].firstElementChild;
    modalCaption.innerHTML = modalList[position].firstElementChild.nextElementSibling.innerHTML;
    modalUpdate;
    modal.scrollTo(0, 0);
}


// Grab caption with innerhtml?
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

_("close").onclick = closer;

window.onclick = function(event) {
  if (event.target == modal) {
    closer();
  }
};

document.onkeydown = function(evt) {
    if (evt.keyCode == 27) {
        closer();
    }
};

var btnList = document.getElementsByClassName("modalBtn");

function btnVisible() {
    if (this.classList.contains("visible")) {
        this.classList.remove("visible");
        for (var i=0; i<btnList.length; i++) {
            btnList[i].style.visibility = "visible";
        }
    }
    else {
        this.classList.add("visible");
        for (var e=0; e<btnList.length; e++) {
            btnList[e].style.visibility = "hidden";
        }
    }
}

modalImg.onclick = btnVisible;
modalVideo.onclick = btnVisible;