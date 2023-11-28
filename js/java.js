//select Item t setting bar
document.querySelector(".icon .fa-gear").onclick = function () {
  this.classList.toggle("fa-spin");
  document.querySelector(".setting").classList.toggle("open");
};
//check color in local storage
let colorSet = localStorage.getItem("color_option");
if (colorSet !== null) {
  // console.log("color_option is not empty");
  // console.log(localStorage.getItem("color_option"));
  document.documentElement.style.setProperty("--mian-color", colorSet);
  //remove and add class active
  document.querySelectorAll(".color-box li").forEach((element) => {
    element.classList.remove("active");
    //add class active
    if (element.dataset.color === colorSet) {
      element.classList.add("active");
    }
  });
}
/* ####################################################################################
#######################################################################################
#####################################################################################*/
//select element changh color
const color = document.querySelectorAll(".color-box li");
color.forEach((li) => {
  li.addEventListener("click", (e) => {
    document.documentElement.style.setProperty(
      "--mian-color",
      e.target.dataset.color
    );
    //set color in localstorage
    localStorage.setItem("color_option", e.target.dataset.color);
    //remove class active
    active(e);
  });
});

let background = true;
let stopBackground;

//select element changh ground
const ground = document.querySelectorAll(".random-background span");
let backgroundSet = localStorage.getItem("background_option");
if (backgroundSet !== null) {
  if (backgroundSet === `true`) {
    background = true;
  } else {
    background = false;
  }
  document.querySelectorAll(".random-background span").forEach((Element) => {
    Element.classList.remove("active");
  });
  //add class active in on click
  if (backgroundSet === `true`) {
    document.querySelector(".random-background .yes").classList.add("active");
  } else {
    document.querySelector(".random-background .no").classList.add("active");
  }
}
ground.forEach((span) => {
  span.addEventListener("click", (e) => {
    //remove class active
    active(e);
    if (e.target.dataset.background === `yes`) {
      background = true;
      image();
      localStorage.setItem("background_option", true);
    } else {
      background = false;
      clearInterval(stopBackground);
      localStorage.setItem("background_option", false);
    }
  });
});
// select Item to changh bacround landing
let backroundPage = document.querySelector(".landing");
let images = [
  "../image/images1.jpg",
  "../image/images2.jpg",
  "../image/images3.jpg",
  "../image/images4.jpg",
  "../image/images5.jpg",
  "../image/images6.jpg",
  "../image/images1.jpg",
];
function image() {
  if (background === true) {
    stopBackground = setInterval(() => {
      let random = Math.floor(Math.random() * images.length);
      backroundPage.style.backgroundImage =
        'url("../image/' + images[random] + '")';
    }, 2000);
  }
}
image();
/* ####################################################################################
#######################################################################################
#####################################################################################*/
//select tem to animation for section skills

window.onscroll = function () {
  let testSkills = document.querySelector(".skills");
  // skills offset Top
  let skillsOffSet = testSkills.offsetTop;

  //skills offset height
  let skillsOfSetHeight = testSkills.offsetHeight;

  //window height
  let windowHeight = this.innerHeight;
  //window scroll top
  let scrolltop = this.pageYOffset;
  // console.log(scrolltop);

  if (scrolltop >= skillsOffSet - windowHeight + 100) {
    //    1415            1781           830             486 = 2,125
    let allSkills = document.querySelectorAll(".skills-progress span");
    allSkills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }
};
//selecet item gallery
let ourGallery = document.querySelectorAll(".gallery img");
// console.log(ourGallery);
ourGallery.forEach((img) => {
  img.addEventListener(`click`, (e) => {
    //creat overlay div
    let overlay = document.createElement("div");
    //creat class name to overlay
    overlay.className = `popup-overlay`;
    //appendchild overlay to body
    document.body.appendChild(overlay);
    //creat popup box
    let popup = document.createElement("div");
    //creat class name in popup
    popup.className = "popup-box";
    //creat text in popup
    if (img.alt !== null) {
      let imgtext = document.createElement("h3");
      let text = document.createTextNode(img.alt);
      imgtext.appendChild(text);
      popup.appendChild(imgtext);
    }
    //creat box img
    let popupImg = document.createElement("img");
    popupImg.src = img.src;
    popup.appendChild(popupImg);
    document.body.appendChild(popup);
    //creat close button
    let close = document.createElement("h4");
    close.className = "close-button";
    let closeText = document.createTextNode("x");
    close.appendChild(closeText);
    popup.appendChild(close);
  });
});
//selcet to close item
document,
  addEventListener(`click`, function (e) {
    if (e.target.className == `close-button`) {
      //to remove popup
      e.target.parentNode.remove();
      //to remove overlay
      document.querySelector(".popup-overlay").remove();
    }
  });
//select bulltes
const bulltes = document.querySelectorAll(".setting-bulltes .bulltes");
// console.log(bulltes);
bulltes.forEach((bullet) => {
  bullet.addEventListener("click", (e) => {
    document.querySelector(e.target.dataset.section).scrollIntoView({
      behavior: "smooth",
    });
  });
});

function active(e) {
  e.target.parentElement.querySelectorAll(".active").forEach((Element) => {
    Element.classList.remove("active");
  });
  //add class active in on click
  e.target.classList.add("active");
}

let showBullts = document.querySelectorAll(".random-bullts span");
let bullts = document.querySelector(".setting-bulltes");
let bulltesLocal = localStorage.getItem("bulltes-option");
if (bulltesLocal !== null) {
  showBullts.forEach((span) => {
    span.classList.remove("active");
  });
  if (bulltesLocal === "block") {
    bullts.style.display = `block`;
    document.querySelector(".random-bullts .yes").classList.add("active");
  } else {
    bullts.style.display = `none`;
    document.querySelector(".random-bullts .no").classList.add("active");
  }
}
showBullts.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (span.dataset.dsiplay === "show") {
      bullts.style.display = `block`;
      localStorage.setItem("bulltes-option", "block");
    } else {
      bullts.style.display = `none`;
      localStorage.setItem("bulltes-option", "none");
    }
    active(e);
  });
});
//reset all options
document.querySelector(".reset").onclick = function () {
  //clear all localstorage
  // localStorage.clear();
  //clear one option
  localStorage.removeItem("color_option");
  localStorage.removeItem("background_option");
  localStorage.removeItem("bulltes-option");
  window.location.reload();
};
//onclick span icon
let icon = document.querySelector(".icon-links");
let link = document.querySelector(".link");
icon.onclick = function (e) {
  e.stopPropagation();
  this.classList.toggle("icon-arrow");
  link.classList.toggle("open");
};
link.onclick = function (e) {
  e.stopPropagation();
};
window.onclick = function (event) {
  if (event.target !== icon) {
    link.classList.remove("open");
    icon.classList.remove("icon-arrow");
  }
};
