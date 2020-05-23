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
    modalMedia = focus.parentElement.previousElementSibling;
    modalCaption.innerText = focus.parentElement.innerText;
    // truncate final amount of characters
    if (modalMedia == "video") {
        var source = document.createElement('source');
        source.setAttribute('src', modalMedia.firstChild.src);
        modalVideo.appendChild(source);

    }
    else {
        modalImg.src = modalMedia.getAttribute('src');
    }
    console.log(modal);
    saveScroll = window.pageYOffset;
    modal.style.display = "block";
    main.style.display = "none";
    nav.style.display = "none";
    window.scrollTo(0, 0);

}


// function next() {
//     focus
// }
// function previous() {
//     focus
// }

// swiping should tab through as well as left and right arrows

function closer() {
    modal.style.display = "none";
    main.style.display = "grid";
    nav.style.display = "block";
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