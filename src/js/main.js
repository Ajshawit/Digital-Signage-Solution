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

// Update Date

$('#day').text(moment().format('DD'));
$('#month').text(moment().format('MMMM'));


// Weather Plugin

var fullDatePlus0 = moment().format('YYYY-MM-DD');
var fullDatePlus1 = moment().add(1, 'days').format('YYYY-MM-DD');
var fullDatePlus2 = moment().add(2, 'days').format('YYYY-MM-DD');
var fullDatePlus3 = moment().add(3, 'days').format('YYYY-MM-DD');
var fullDatePlus4 = moment().add(4, 'days').format('YYYY-MM-DD');

$.getJSON('http://api.openweathermap.org/data/2.5/forecast?id=6619279&appid=cb00cfb85549a09b384addf89d365ed6&mode=json&units=metric', function(json) {
  for (i = 0; i < json.cnt; i++) {
    if (moment.unix(json.list[i].dt).format('YYYY-MM-DD h:mm:ss a').includes(fullDatePlus0)) {
      $('.weather0').text(json.list[0].weather[0].main);
      $('.temp0').text(json.list[0].main.temp);
      $('.date0').text(moment.unix(json.list[0].dt).format('dddd'));
    }
    if (moment.unix(json.list[i].dt).format('YYYY-MM-DD h:mm:ss a').includes(fullDatePlus1)) {
      $('.weather1').text(json.list[i].weather[0].main);
      $('.temp1').text(json.list[i].main.temp);
      $('.date1').text(moment.unix(json.list[i].dt).format('dddd'));
    }
    if (moment.unix(json.list[i].dt).format('YYYY-MM-DD h:mm:ss a').includes(fullDatePlus2)) {
      $('.weather2').text(json.list[i].weather[0].main);
      $('.temp2').text(json.list[i].main.temp);
      $('.date2').text(moment.unix(json.list[i].dt).format('dddd'));
    }
    if (moment.unix(json.list[i].dt).format('YYYY-MM-DD h:mm:ss a').includes(fullDatePlus3)) {
      $('.weather3').text(json.list[i].weather[0].main);
      $('.temp3').text(json.list[i].main.temp);
      $('.date3').text(moment.unix(json.list[i].dt).format('dddd'));
    }
    if (moment.unix(json.list[i].dt).format('YYYY-MM-DD h:mm:ss a').includes(fullDatePlus4)) {
      $('.weather4').text(json.list[i].weather[0].main);
      $('.temp4').text(json.list[i].main.temp);
      $('.date4').text(moment.unix(json.list[i].dt).format('dddd'));
    }
  }
});
