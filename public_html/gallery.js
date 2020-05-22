function _(x) {
	return document.getElementById(x);
}

var modal = _(modal);
var modalImg = _(modalImg);
var modalVideo = _(modalVideo);
modalCaption = _(modalCaption);

function modalExpand(focus) {
    console.log(modalCaption);
    modalMedia = focus.parentElement.previousSibling;
    modalCaption.innerText = "focus.parentElement.innerText";
    // truncate final amount of characters
    if (modalMedia == "video") {
        var source = document.createElement('source');
        source.setAttribute('src', modalMedia.firstChild.src);
        modalVideo.appendChild(source);

    }
    else {
        modalImg.src = modalMedia.src;
    }
    modal.syle.display = "block";

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