// Framework7 App main instance
let app  = new Framework7({
  root: '#app',
  routes: routes,
}
);

let $$ = Dom7;

// Init/Create main view
let mainView = app.views.create('.view-main', {
  url: '/'
});

let purchasedBooks = [];

function loadPurchasedBooks() {
  purchasedBooks.forEach(function(book) {
    $("#" + book).show();
  });
}

let none;

function reader_Screen(cl, vw){
  let els = document.getElementsByClassName(cl);
  for(let i=0; i<els.length; ++i){
     let s = els[i].style;
     s.display = s.display==='none' ? 'block' : 'none';
  };
  let view = document.getElementsByClassName(vw);
  for(let i=0; i<view.length; ++i){
     let s = view[i].style;
     s.backgroundColor = s.backgroundColor==='black' ? 'white' : 'black';
  };
}

var myPhotoBrowserStandalone = app.photoBrowser.create({
  photos : [
      'Ob/Ob.001.jpeg',
      'https://cdn.framework7.io/placeholder/sports-1024x1024-2.jpg',
      'https://cdn.framework7.io/placeholder/sports-1024x1024-3.jpg',
  ]
});
//Open photo browser on click
$$('.pb-standalone').on('click', function () {
  myPhotoBrowserStandalone.open();
});



tutorial();


// load any localforage data
localforage.getItem('ownedBooks').then(function(ownedBooksValue) {
  //console.log(ownedBooksValue);
  if (typeof ownedBooksValue !== 'undefined' && ownedBooksValue !== null) {
    purchasedBooks = ownedBooksValue;
  }
  loadPurchasedBooks();
}).catch(function(err) {
  console.log(err);
});

function purchaseBook(bookName){
  purchasedBooks.push(bookName+'book');
  loadPurchasedBooks();
  //add new array value to localforage
  localforage.setItem('ownedBooks', purchasedBooks).then(function (value) {
    //console.log(value);
  }).catch(function(err) {
    console.log(err);
  });
}

//try and write a function for if the box of books is empty
function tutorial(){
  if (purchasedBooks.length > 1){
    let t =  document.getElementById('tutordisplay').display;
    t = "none";
  }
};

function popupDestroy(){
  app.popup.destroy()
}


let prayerSwiper;
$('#prayer').on('popup:opened', function (e, popup) {
  prayerSwiper = app.swiper.create('.swiper-container', {
    speed: 400,
    spaceBetween: 0
  });
});
$('#prayer').on('popup:closed', function (e, popup) {
  app.swiper.destroy('.swiper-container');
});
let puritySwiper;
$('#purity').on('popup:opened', function (e, popup) {
  puritySwiper = app.swiper.create('.swiper-container', {
    speed: 400,
    spaceBetween: 0
  });
});
$('#purity').on('popup:closed', function (e, popup) {
  app.swiper.destroy('.swiper-container');
});

let lionsSwiper;
$('#lions').on('popup:opened', function (e, popup) {
  lionSwiper = app.swiper.create('.swiper-container', {
    speed: 400,
    spaceBetween: 0
  });
});
$('#lions').on('popup:closed', function (e, popup) {
  app.swiper.destroy('.swiper-container');
});

let elephantsSwiper;
$('#elephants').on('popup:opened', function (e, popup) {
  elephantSwiper = app.swiper.create('.swiper-container', {
    speed: 400,
    spaceBetween: 0
  });
});
$('#elephants').on('popup:closed', function (e, popup) {
  app.swiper.destroy('.swiper-container');
});

let dolphinsSwiper;
$('#dolphins').on('popup:opened', function (e, popup) {
  dolphinSwiper = app.swiper.create('.swiper-container', {
    speed: 400,
    spaceBetween: 0
  });
});
$('#dolphins').on('popup:closed', function (e, popup) {
  app.swiper.destroy('.swiper-container');
});

let obedienceSwiper;
$('#obedience').on('page:opened', function (e, popup) {
  obedienceSwiper = app.swiper.create('.swiper-container', {
    speed: 400,
    spaceBetween: 0
  });
});
$('#obedience').on('popup:closed', function (e, popup) {
  app.swiper.destroy('.swiper-container');

});


  let swiper = app.swiper.create('.swiper-container', {
    speed: 400,
    spaceBetween: 0
  });
/*
var swiperInstances = {};
$(".swiper-container").each(function(index, element){
    var $this = $(this);
    $this.addClass("instance-" + index);
    $this.find(".swiper-button-prev").addClass("btn-prev-" + index);
    $this.find(".swiper-button-next").addClass("btn-next-" + index);
    swiperInstances[index] = new Swiper(".instance-" + index, {
        // your settings ...
        speed: 900,
        snapOnRelease: true
    });
});

// Now you can call the update on a specific instance in the "swiperInstances" object
// e.g.
swiperInstances[3].update();
*/