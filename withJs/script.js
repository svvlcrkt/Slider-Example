const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

slides.forEach(function(slide, index){
    slide.style.left = `${index * 100}%`;
})

let counter = 0;
nextBtn.addEventListener('click',function(){
    counter++;
    carousel();
})
prevBtn.addEventListener('click',function(){
    counter--;
    carousel();
})

function carousel(){

    // 1st; working with slides
    // if(counter === slides.length){
    //     counter = 0;
    // }
    // if(counter < 0 ){
    //     counter = slides.length - 1;
    // }

    // 2nd; working with buttons
    if(counter < slides.length - 1){
        //The element generates a block element box, 
        //generating line breaks both before and after 
        //the element when in the normal flow.
        nextBtn.style.display = "block";
    }
    else{
        nextBtn.style.display = "none";
    }

    //if we use visibility: hidden, 
    //then button is not visible but its space exists

    if(counter > 0){
        prevBtn.style.display = "block";
    }
    else{
        prevBtn.style.display = "none";
    }

    
    slides.forEach(function(slide){
        slide.style.transform = `translateX(-${counter*100}%)`;
    })
}
