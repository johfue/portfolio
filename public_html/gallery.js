function _(x) {
	return document.getElementById(x);
}



function modalExpand(focus) {
var modal = _("modal");
var modalImg = _("modalImg");
var modalVideo = _("modalVideo");
var modalCaption = _("modalCaption");
    console.log(modal);
    modalMedia = focus.parentElement.previousSibling;
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
        modalImg.src = modalMedia.src;
    }
    modalCaption.syle.display = "block";
    console.log(modal);

}

// function next() {
//     focus
// }
// function previous() {
//     focus
// }

// swiping should tab through

function close() {
    modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// escape button should close