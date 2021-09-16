let counter = 0;
$('.slide').each(function(index, slide){
    $(slide).css('left',`${index*100}%`);
})
$('.nextBtn').click(function(){
    counter++;
    carousel();
})
$('.prevBtn').click(function(){
    counter--;
    carousel();
})
function carousel(){
    // for nextBtn
    if(counter < $('.slide').length - 1){
        $('.nextBtn').css('display','block');
    }
    else{
        $('.nextBtn').css('display','none');
    }
    // for prevBtn
    if(counter > 0){
        $('.prevBtn').css('display','block');
    }
    else{
        $('.prevBtn').css('display','none');
    }
    $('.slide').each(function(index, slide){
        $(slide).css('transform',`translateX(-${counter*100}%)`);
    })
}