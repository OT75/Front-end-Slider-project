let sliderNextBTN = document.getElementById('nextButton');
let sliderPreviousBTN = document.getElementById('previousButton');
let sliderImage = document.getElementById('sliderImg');
let sliderImages =
[
    "images/slider0.jpg",
    "images/slider1.jpg",
    "images/slider2.jpg",
    "images/slider3.png",
    "images/slider4.jpg"
]
let sliderImagesNum = sliderImages.length;
let i = 0;
function nextSliderImg ()
{
    while (i <= sliderImagesNum )
    {   
        i++;
        if (i == sliderImagesNum) 
            i = 0;
        sliderImage.src = sliderImages[i];
        break;
    }
}
function previousSliderImg ()
{
    while (i < sliderImagesNum)
    { 
        if (i == 0)
            i = sliderImagesNum;
        i--;
        sliderImage.src = sliderImages[i];
        break;
    }
}
function autoSlider() 
{
    while (i <= sliderImagesNum )
    {   
        i++;
        if (i == sliderImagesNum) 
            i = 0;
        sliderImage.src = sliderImages[i];
        setTimeout(autoSlider,2500);
        break;
    }   
}
autoSlider(); // remove for manual usage
sliderNextBTN.onclick = nextSliderImg;
sliderPreviousBTN.onclick = previousSliderImg;
