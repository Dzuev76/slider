 $('.sl').slick({
  dots: true,
  autoplay: true,
  speed: 3000,
  slidesToShow: 3,
  mobileFirst: true,
   responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 100,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
 });

var myCircle = Circles.create({
  id:                  'circles-1',
  radius:              60,
  value:               95,
  maxValue:            100,
  width:               10,
  text:                function(value){return value + '%';},
  colors:              ['#52edc7', '#fff'],
  duration:            9000,
  wrpClass:            'circles-wrp',
  textClass:           'circles-text',
  valueStrokeClass:    'circles-valueStroke',
  maxValueStrokeClass: 'circles-maxValueStroke',
  styleWrapper:        true,
  styleText:           true
});

var myCircle = Circles.create({
  id:                  'circles-2',
  radius:              60,
  value:               95,
  maxValue:            100,
  width:               10,
  text:                function(value){return value + '%';},
  colors:              ['#52edc7', '#fff'],
  duration:            9000,
  wrpClass:            'circles-wrp',
  textClass:           'circles-text',
  valueStrokeClass:    'circles-valueStroke',
  maxValueStrokeClass: 'circles-maxValueStroke',
  styleWrapper:        true,
  styleText:           true
});

var myCircle = Circles.create({
  id:                  'circles-3',
  radius:              60,
  value:               45,
  maxValue:            100,
  width:               10,
  text:                function(value){return value + '%';},
  colors:              ['#52edc7', '#fff'],
  duration:            9000,
  wrpClass:            'circles-wrp',
  textClass:           'circles-text',
  valueStrokeClass:    'circles-valueStroke',
  maxValueStrokeClass: 'circles-maxValueStroke',
  styleWrapper:        true,
  styleText:           true
});

var myCircle = Circles.create({
  id:                  'circles-4',
  radius:              60,
  value:               95,
  maxValue:            100,
  width:               10,
  text:                function(value){return value + '%';},
  colors:              ['#52edc7', '#fff'],
  duration:            9000,
  wrpClass:            'circles-wrp',
  textClass:           'circles-text',
  valueStrokeClass:    'circles-valueStroke',
  maxValueStrokeClass: 'circles-maxValueStroke',
  styleWrapper:        true,
  styleText:           true
});

var myCircle = Circles.create({
  id:                  'circles-5',
  radius:              60,
  value:               70,
  maxValue:            100,
  width:               10,
  text:                function(value){return value + '%';},
  colors:              ['#52edc7', '#fff'],
  duration:            9000,
  wrpClass:            'circles-wrp',
  textClass:           'circles-text',
  valueStrokeClass:    'circles-valueStroke',
  maxValueStrokeClass: 'circles-maxValueStroke',
  styleWrapper:        true,
  styleText:           true
});

var myCircle = Circles.create({
  id:                  'circles-6',
  radius:              60,
  value:               30,
  maxValue:            100,
  width:               10,
  text:                function(value){return value + '%';},
  colors:              ['#52edc7', '#fff'],
  duration:            9000,
  wrpClass:            'circles-wrp',
  textClass:           'circles-text',
  valueStrokeClass:    'circles-valueStroke',
  maxValueStrokeClass: 'circles-maxValueStroke',
  styleWrapper:        true,
  styleText:           true
});

$(document).ready(function(){
        $("#anchor-link-1").on("click", function(){
            var scroll=$("#about").offset().top;
            $('html, body').animate({scrollTop: scroll}, 3000);
        });
    });

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(document).ready(function(){
        $("#anchor-link-2").on("click", function(){
            var scroll=$("#skills").offset().top;
            $('html, body').animate({scrollTop: scroll}, 3000);
        });
    });

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(document).ready(function(){
        $("#anchor-link-3").on("click", function(){
            var scroll=$("#portfolio").offset().top;
            $('html, body').animate({scrollTop: scroll}, 3000);
        });
    });

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(document).ready(function(){
        $("#anchor-link-4").on("click", function(){
            var scroll=$("#process").offset().top;
            $('html, body').animate({scrollTop: scroll}, 3000);
        });
    });

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(document).ready(function(){
        $("#anchor-link-5").on("click", function(){
            var scroll=$("#contact").offset().top;
            $('html, body').animate({scrollTop: scroll}, 3000);
        });
    });

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(document).ready(function(){
        $("#anchor-link-6").on("click", function(){
            var scroll=$("#header").offset().top;
            $('html, body').animate({scrollTop: scroll}, 5000);
        });
    });

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})