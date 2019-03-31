// Framework7 App main instance
let app  = new Framework7({
  root: '#app'
});
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

localforage.clear('ownedBooks').then(function() {
  // Run this code once the database has been entirely deleted.
  console.log('Database is now empty.');
}).catch(function(err) {
  // This code runs if there were any errors
  console.log(err);
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
function tutorial() {
  let a = document.getElementById("prayerbook");
  let b = document.getElementById("puritybook");
  let c = document.getElementById("hasanbook");
  let d = document.getElementById("tutordisplay");
  if (a.style.display === "none" && b.style.display === "none" && c.style.display === "none"){
    d.style.display = "block";
    console.log('heres your tutorial');
  }
  else{
    console.log('somethings up')
  }
};
/*function showPrayer() {
  let x = document.getElementById("prayerbook");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
};
function showPurity() {
  let x = document.getElementById("puritybook");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
};
function showHasan() {
  let x = document.getElementById("hasanbook");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
};
*/
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
