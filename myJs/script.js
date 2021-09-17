const nextBtn = $('.nextBtn');
const prevBtn = $('.prevBtn');
const img = $('.slide > img');
const h1 = $('.slide > h1');

let imgArray = [
    {
        id: 1,
        img: "img-1.jpeg",
        alt: "image-1",
    },
    {
        id: 2,
        img: "img-2.jpeg",
        alt: "image-2",
    },
    {
        id: 3,
        img: "img-3.jpeg",
        alt: "image-3",

    },
    {
        id: 4,
        img: "person-1.jpeg",
        alt: "image-4",
        name: "susan doe",
    },
];
let counter = 0;
nextBtn.on('click',function(){
    counter++;
    counterC();
    img.attr('src',`${imgArray[counter].img}`);
    img.attr('alt',`${imgArray[counter].alt}`);
    h1.html(`${imgArray[counter].id}`);
})
prevBtn.on('click',function(){
    counter--;
    counterC();
    img.attr('src',`${imgArray[counter].img}`);
    img.attr('alt',`${imgArray[counter].alt}`);
    h1.html(`${imgArray[counter].id}`);
})

function counterC(){

    if(counter < imgArray.length - 1){
        nextBtn.css('display','block');    
    }  
    else{
        nextBtn.css('display','none');   
    }
    if(counter > 0){
        prevBtn.css('display','block');
    } 
    else{
        prevBtn.css('display','none');
    }
  
}

