const recipies = {
  0  : "flappyprototype",
  1  : "frenchtoast",
  2  : "pancakes",
  3  : "tomatosoup",
  4  : "grilledcheese",
  5  : "picodegallo",
  6  : "guacamole",
  7  : "breakfastburrito",
  8  : "pizzasauce",
  9  : "sevenlayerbeandip",
  10 : "buffalochickenwingdip"
}

const recImage = document.querySelector('#recImage')
const recImageCap = document.querySelector('#recImageCap')
const recimages = {
  "flappyprototype" : {
    "image" : "enzoSP.jpg",
    "caption" : "Me!"
  },
  "frenchtoast" : {
    "image" : "Mark.JPG",
    "caption" : "A Picture from Mark's Birthday"
  },
  "pancakes" : {
    "image" : "Alexis.png",
    "caption" : "Picture from a hangout with Alexis"
  },
  "tomatosoup" : {
    "image" : "Anime.jpg",
    "caption" : "Picture from anime club christmas meeting"
  },
  "grilledcheese" : {
    "image" : "Braxton.png",
    "caption" : "Image of Braxton from 2024 yearbook."
  },
  "picodegallo" : {
    "image" : "CIT.jpg",
    "caption" : "Image Ms. Adami took of me coding a website."
  },
  "guacamole" : {
    "image" : "LivingThings.jpg",
    "caption" : "Burn it Down, a song that I remember listening to a lot."
  },
  "breakfastburrito" : {
    "image" : "coexist.webp",
    "caption" : "Coexist showing how I was influenced by multiple religeons."
  },
  "pizzasauce" : {
    "image" : "SSBU-cover.png",
    "caption" : "Super Smash Brothers Ultimite Logo"
  },
  "sevenlayerbeandip" : {
    "image" : "HYLab.jpg",
    "caption" : "HoYoLab App"
  },
  "buffalochickenwingdip" : {
    "image" : "Hell.jpg",
    "caption" : "Picture from the trip."
  }
}



let recindex = 0;

const maxRecs = 10;

let actRecipe = "#flappyprototypeRec";



function display(focuseditem) {
  let recipiessel = document.querySelector('.active');
  let recSelFoc;
  console.log("#"+focuseditem);
  recSelFoc = document.querySelector("#" + focuseditem)
  if (recipiessel === null) {

  } else {
    recipiessel.classList.remove('active')
  }

  recSelFoc.classList.add('active')
  let basin = 0
  while (focuseditem !== recipies[basin]) {
    basin = basin + 1
  }
  recindex = basin

  try {
    let newRecipe = "#" + focuseditem + "Rec"
    newRecipeHTML = document.querySelector(newRecipe)
    let actRecipeHTML = document.querySelector(actRecipe)
    actRecipeHTML.classList.add('hidden')
    newRecipeHTML.classList.remove('hidden')
    actRecipe = newRecipe
  } catch (e) {
    actRecipeHTML.classList.add('hidden')
  }

  let imageData = recimages[focuseditem];
  let imagesrc = "assets/" + imageData.image;
  if (imageData) {
    recImage.src = imagesrc;
    recImageCap.textContent = imageData.caption;
  }



}

document.addEventListener('keydown', (event) => {

  if (event.key == 'ArrowDown') {
    if (recindex < maxRecs) {
      recindex = recindex + 1
      display(recipies[recindex])
    } else {
      recindex = 1
      display(recipies[recindex])
    }
  } else if (event.key == 'ArrowUp') {
    if (recindex > 0) {
      recindex = recindex - 1
      display(recipies[recindex])
    } else {
      recindex = maxRecs
      display(recipies[recindex])
    }
  } else if (event.key == 'ArrowLeft') {
      recindex = maxRecs
      display(recipies[recindex])

  } else if (event.key == 'ArrowRight') {

      recindex = 1
      display(recipies[recindex])

  }

})
