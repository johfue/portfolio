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
    scroll = window.pageOffSetY;
    window.pageOffSetY = 0;
    modal.style.display = "block";
    main.style.display = "none";
    nav.style.display = "none";
    console.log(modal);

}

// preserve scroll position
// hide everything else

// function next() {
//     focus
// }
// function previous() {
//     focus
// }

// swiping should tab through

_("close").onclick = function() {
    modal.style.display = "none";
    main.style.display = "grid";
    nav.style.display = "block";
    window.pageOffSetY = scroll;
    console.log("ran");
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    main.style.display = "grid";
    nav.style.display = "block";
    window.pageOffSetY = scroll;
  }
};

// escape button should close