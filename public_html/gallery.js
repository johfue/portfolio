function _(x) {
	return document.getElementById(x);
}

var modal = _("modal");
// var modalImg = _("modalImg");
var modalVideo = _("modalVideo");
var modalCaption = _("modalCaption");

var main = document.querySelector("main");
var nav = document.querySelector("nav");

function modalExpand(focus) {
    modalMedia = focus.previousElementSibling.previousElementSibling;
    modalCaption.innerText = focus.previousElementSibling.innerText;
    // truncate final amount of characters
    if (modalMedia == "video") {
        modalVideo.innerHTML = modalMedia.innerHTML;

    }
    else {
        modalImg.src = modalMedia.getAttribute('src');
    }
    console.log(modal);
    saveScroll = window.pageYOffset;
    modal.style.display = "block";
    main.style.display = "none";
    nav.style.display = "none";
    document.querySelector("b").style.bottom = "0";
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
    modal.style.display = "none";
    main.style.display = "grid";
    nav.style.display = "block";
    document.querySelector("b").style.bottom = "2em";
    window.scrollTo(0, saveScroll);
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