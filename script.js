$(document).ready(function(){
    $(document).on('click', '.nav-link',function(){
            $('section').addClass('animate')
         })
})

/////////////////////////////////////////////////////////////////////////////////////
// var marginY=0;
// var speed=10;
// var distination=0;
// var scroller =null;

// function animatScroll (elementId){
//     distination =document.getElementById(elementId).offsetTop;
//     scroller=setTimeout(function(){
//         animatScroll(elementId)
//     },1)
//     marginY=marginY + speed
    

//     if(marginY >= distination){
//         clearTimeout(scroller)
//     }

//     window.scroll(0,marginY)
// }
// window.onscroll = function(){
// 	marginY = this.pageYOffset;	
// };


// function toTop (){
    
//     scroller = setTimeout(function(){
//         toTop();
//     },1)
//     marginY = marginY - speed
//     if(marginY <= 0){
//         clearTimeout(scroller)
//     }

//     window.scroll(0,marginY)
// }
/////////////////////////////////////////////////////////////////////////////////////////////////////////




// $(document).ready(function(){
//   // Add smooth scrolling to all links
//   $(".nav-link").on('click', function(event) {

//     // Make sure this.hash has a value before overriding default behavior
//     if (this.hash !== "") {
//       // Prevent default anchor click behavior
//       event.preventDefault();

//       // Store hash
//       var hash = this.hash;

//       // Using jQuery's animate() method to add smooth page scroll
//       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//       $('html, body').animate({
//         scrollTop: $(hash).offset().top
//       }, 800, function(){

//         // Add hash (#) to URL when done scrolling (default click behavior)
//         window.location.hash = hash;
//       });
//     } // End if
//   });
// });

