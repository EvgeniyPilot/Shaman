function photoClick() {
    document.getElementById('photo').style.display = 'inherit';
    document.getElementById('aboutUs').style.display = 'none';
    document.getElementById('contacts').style.display = 'none';
     window.scrollTo(0,0);
}

function aboutUsClick() {
    document.getElementById('photo').style.display = 'none';
    document.getElementById('aboutUs').style.display = 'inherit';
    document.getElementById('contacts').style.display = 'none';
     window.scrollTo(0,0);
}

function contactsClick() {
    document.getElementById('photo').style.display = 'none';
    document.getElementById('aboutUs').style.display = 'none';
    document.getElementById('contacts').style.display = 'inherit';
     window.scrollTo(0,0);
}



var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos >= currentScrollPos) {
    document.getElementById("header").classList.remove("out");
  } else {
    document.getElementById("header").classList.add("out");
  }
  prevScrollpos = currentScrollPos;
}

