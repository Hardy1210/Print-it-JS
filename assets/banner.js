//On prend la classe de l'element qu'on veux inserer un autre element
const banner = document.getElementById("banner")

//on utilize le tableau slides 
slides.forEach(slide => {
    //dans forEach ona va creer un element block img
    //qu'ira commen decendan de l'element banner
    const img = document.createElement('img')
    img.src = slide.image
    img.alt = "photo d'une imprimerie"
    img.classList.add('banner-img')

    //pareil on va creer un elemen "p" dans forEach 
    //qu'ira  auusi commen decendan de l'element banner
    const tagLine = document.createElement('p')
    tagLine.innerHTML = slide.tagLine
    tagLine.classList.add('text')
    
    //tagLine.classList.add('banner-img')
    
    //il faut cette propiete pour l'ajout du nouvelle element
    banner.appendChild(img)
    banner.appendChild(tagLine)
})

// on selectione les fleches
let arrowLeft = document.querySelector(".arrow_left")
arrowLeft.addEventListener("click", prevSlide)

let arrowRight = document.querySelector(".arrow_right")
arrowRight.addEventListener("click", nextSlide)


function nextSlide() {
    showSlide(slideIndex + 1)
}

function prevSlide() {
    showSlide(slideIndex -1)
}

function nextDot () {
}

//reinicio del index
let slideIndex = 0
//reinicio du delay por setTimeout
let autoShowIndex

// Fonction pour afficher la diapositive correspondant à l'index 
function showSlide(index) {
    const slides = document.querySelectorAll('.banner-img')
    const totalSlides = slides.length;
    
    // Gestion des limites de l'index
    //slideIndex = (index + totalSlides) % totalSlides;
    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = index;
    }

    // Masquer toutes les images
    slides.forEach(slide => {
        slide.style.display = "none";
    });

    // Afficher l'image correspondante
    slides[slideIndex].style.display = "block";


    //on va faire de la meme maniere que le slides mais avec les textes
    const text = document.querySelectorAll('.text')
    const totalSlideText = slides.length

    //gestion de limites de l'index du texte
    if (index >= totalSlideText) {
        slideIndex = 0
    } else if (index < 0) {
        slideIndex = totalSlideText - 1
    } else {
        slideIndex = index
    }
    
    //on va declarer une nouvelle variable 
    //avec le meme parametre que les images
    let textIndex = slideIndex

    //on masque les texte 
    text.forEach(text => {
        text.style.display = "none"
    })
    //on remer le texte
    text[textIndex].style.display = "block"

    //on selectione toutes les dots et on 
    //ajoute les Dots_selected
    let dots = document.querySelectorAll(".dot")
    dots.forEach((dot, i) => {
        
        if (i === slideIndex) {
            dot.classList.add('dot_selected')
        } else {
            dot.classList.remove('dot_selected')
        }
        //evenement click pour chaque dot
        dot.addEventListener("click", function() {
            showSlide(i)
        })
    })

    // Déclencher le changement automatique après 4 secondes
    clearTimeout(autoShowIndex)
    autoShowIndex = setTimeout(function() {
        nextSlide()
    }, 4000)
}

// Appel initial pour afficher la première image
showSlide(slideIndex);





