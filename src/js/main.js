/* var slideshowImageURLs = [
  'https://s3-ap-southeast-2.amazonaws.com/ajshawitbucket/RiseVison/The+most+dangerous+kind+of+waste+-+Shigeo+Shingo.jpg', //The most dangerous kind of waste
  'https://s3-ap-southeast-2.amazonaws.com/ajshawitbucket/RiseVison/You+add+value+to+people+when+you+value+them+-+John+Maxwell.jpg', //You add value to people when you value them
  'https://s3-ap-southeast-2.amazonaws.com/ajshawitbucket/RiseVison/underpromise+overdeliver.PNG', //Under promise and Over deliver
  'https://s3-ap-southeast-2.amazonaws.com/ajshawitbucket/RiseVison/4+purposes+of+improvment.PNG', //4 Purposes of improvement
  'https://s3-ap-southeast-2.amazonaws.com/ajshawitbucket/RiseVison/4TQ+Value.jpg', //4TQ Value
  'https://s3-ap-southeast-2.amazonaws.com/ajshawitbucket/RiseVison/Listen+with+the+intent+to+understand.jpg' //Listen with the intent to understand
]; */

var slideshowImageURLs = [
  'img/mustang.jpg', //Mustang GT
  'img/gt86.jpg' //Toyota GT86
];


var slideshowImageCount = slideshowImageURLs.length;

$(function(){
  $('#imageSlide').attr('src', $(slideshowImageURLs).get(-1));
});

function Slider() {
  $('#imageSlide').fadeOut("slow", function() {
     $(this).attr('src', slideshowImageURLs[(slideshowImageURLs.length++) % slideshowImageCount]).fadeIn("slow");
   });
}

$(function() {
  setInterval(Slider, 20000);
});
