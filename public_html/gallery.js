function _(x) {
	return document.getElementById(x);
}

var modal = _("modal");
// var modalImg = _("modalImg");
var modalVideo = _("modalVideo");
var modalCaption = _("modalCaption");


function modalExpand(focus) {
    console.log(modal);
    modalMedia = focus.parentElement.previousElementSibling;
    modalCaption.innerText = focus.parentElement.innerText;
    // truncate final amount of characters
    if (modalMedia == "video") {
        var source = document.createElement('source');
        source.setAttribute('src', modalMedia.firstChild.src);
        modalVideo.appendChild(source);

    }
    else {
        console.log(focus.parentElement);
        console.log(focus.parentElement.previousElementSibling);
        modalImg.src = modalMedia.getAttribute('src');
    }
    console.log(modal);
    modal.style.display = "block";
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
    console.log("ran");
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// escape button should close