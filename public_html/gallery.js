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
    var saveScroll = window.pageYOffset;
    modal.style.display = "block";
    main.style.display = "none";
    nav.style.display = "none";
    window.scrollTo(0, 0);
    console.log(window.pageYOffset);

}


// function next() {
//     focus
// }
// function previous() {
//     focus
// }

// swiping should tab through

function closer() {
    console.log("ran");
    modal.style.display = "none";
    main.style.display = "grid";
    nav.style.display = "block";
    // window.scrollTo(0, saveScroll);
}

_("close").addEventListener = closer;

window.onclick = function(event) {
  if (event.target == modal) {
    closer();
  }
};

// document.keyup(function(e) {
//      if (e.key === "Escape") {
//          closer();
//     }
// });
