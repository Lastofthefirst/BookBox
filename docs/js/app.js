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



tutorial();

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
     s.backgroundColor = s.backgroundColor==='black' ? 'rgb(204, 221, 199)' : 'black';
  };
}



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


  let swiper = app.swiper.create('.swiper-container', {
    speed: 400,
    spaceBetween: 0
  });

function clearBooks(){
  localforage.clear().then(function() {
    // Run this code once the database has been entirely deleted.
    console.log('Database is now empty.');
}).catch(function(err) {
    // This code runs if there were any errors
    console.log(err);
});
location.reload(); 
}
