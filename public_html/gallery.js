function _(x) {
	return document.getElementById(x);
}

modal = _(modal);
modalImg = _(modalImg);
modalVideo = _(modalVideo);
modalCaption = _(modalCaption);

function modalExpand(focus) {
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
        console.log(modalMedia.firstChild);
        modalImg.src = modalMedia.src;
    }
    modal.syle.display = "block";
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