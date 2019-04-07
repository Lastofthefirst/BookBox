//Global Variable Declaration

// Framework7 App main instance
let app = new Framework7({
        root: '#app',
        routes: routes,
    }),
    $$ = Dom7,
    purchasedBooks = [],
    // Init/Create main view
    mainView = app.views.create('.view-main', {
        url: '/'
    }),
    //allows for auto initiating swipers in framework7
    swiper = app.swiper.create('.swiper-container', {
        speed: 400,
        spaceBetween: 0
    });

function loadPurchasedBooks() {
    purchasedBooks.forEach(function(book) {
        let bookHome = document.getElementById(book).style;
        bookHome.display = "block";
    });
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

//This function gets called each time a book is purchased
function purchaseBook(bookName) {
    purchasedBooks.push(bookName + 'book');
    loadPurchasedBooks();
    //add new array value to localforage
    localforage.setItem('ownedBooks', purchasedBooks).then(function(value) {
        //console.log(value);
    }).catch(function(err) {
        console.log(err);
    });
}

//Deletes all purchased books, when called, does not have a confirm button because of current purchaseless format
function clearBooks() {
    localforage.clear().then(function() {
        // Run this code once the database has been entirely deleted.
        console.log('Database is now empty.');
    }).catch(function(err) {
        // This code runs if there were any errors
        console.log(err);
    });
    location.reload();
}

// This function toggles the background color and navbar visibility within the bookswipers
function reader_Screen(cl, vw) {
    let els = document.getElementsByClassName(cl);
    for (let i = 0; i < els.length; ++i) {
        let s = els[i].style;
        s.display = s.display === 'none' ? 'block' : 'none';
    };
    let view = document.getElementsByClassName(vw);
    for (let i = 0; i < view.length; ++i) {
        let s = view[i].style;
        s.backgroundColor = s.backgroundColor === 'black' ? 'rgb(218, 206, 166)' : 'black';
        s.paddingTop = s.paddingTop === '0px' ? '64px' : '0px';
    }
}