function _(x) {
	return document.getElementById(x);
}

var modal = _("modal");
// var modalImg = _("modalImg");
var modalVideo = _("modalVideo");
var modalCaption = _("modalCaption");

var main = document.querySelector("main");
var nav = document.querySelector("nav");

function hidden(bool) {
    if (true) {
        console.log("ran1");
        modal.style.display = "none";
        main.style.display = "grid";
        nav.style.display = "block";
        document.querySelector("b").style.bottom = "2em";
    }
    else {
        console.log("ran2");
        modal.style.display = "block";
        main.style.display = "none";
        nav.style.display = "none";
        document.querySelector("b").style.bottom = "0";
    }
}

function modalExpand(focus) {
    modalMedia = focus.previousElementSibling.previousElementSibling;
    modalCaption.innerText = focus.previousElementSibling.innerText;
    
    if (modalMedia.tagName == "VIDEO") {
        console.log("ran3");
        modalImg.style.display = "none";
        modalVideo.src = modalMedia.firstElementChild.getAttribute('src');
        modalVideo.style.display = "block";

    }
    else {
        modalVideo.style.display = "none";
        modalImg.src = modalMedia.getAttribute('src');
        modalImg.style.display = "block";
    }
    
    saveScroll = window.pageYOffset;
    hidden(false);
    window.scrollTo(0, 0);

}


// function next() {
//     focus
// }
// function previous() {
//     focus
// }

// swiping should tab through as well as left and right arrows

// visibility toggle

function closer() {
    hidden(true);
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