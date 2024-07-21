const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*
// Since arrays and objects are reference data types, We do not want to tamper with the data inside the data array, hence we are creating a new array called books to practice

// DESTRUCTURING

const books = getBooks();
//console.log(books);
//books;

const book = getBook(2);
console.log(book);
//const title = book.title;
//title;
const { id, title, genres, ...myObj } = book;

id;
title;
myObj;
genres;

const newGenres = [genres, "romance"];
newGenres; //This is not how we want so at times as such we can use spread operator

const newGenres2 = [...genres, "romance"];
newGenres2;

const updatedBook = { ...book, moviePublicationDate: "2001-12-19" };
console.log(updatedBook);
*/

// lets pretend that we are getting books from the fictional API using the getBooks() function

const books = getBooks();

//const x = [1, 2, 3, 4].map((el) => el * 2);
//console.log(x);

//const titles = books.map((book) => book.title);
//titles;

/*const essentialDataDummy = books.map((book) => {
  book.title, book.author;
}); // if we use the {} braces in side the function, the function will think it is a declaration and not an object.
essentialDataDummy;*/

/*const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
}));

essentialData;*/

/*const longBooksWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);

longBooksWithMovie;

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;*/

/*const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
pagesAllBooks;
*/

/*const x = [3, 7, 1, 9, 6];
const sorted = x.slice().sort((a, b) => a - b);

sorted;

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
sortedByPages;
*/

/************************************************************/
/*  WORKING WITH IMMUTABLE ARRAYS */

// 1) ADDING BOOK OBJECT TO ARRAY

/*const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J.K. Rowling",
};

const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// 2) DELETE BOOK OBJECT FROM THE ARRAY
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;

// 3) UPDATE BOOK OBJECT IN THE ARRAY
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1240 } : book
);
booksAfterUpdate;
*/
/******************************************************/
/* ASYNCHRONOUS JAVASCRIPT */

// PROMISES

/*fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((data) => console.log(data));
*/

// ASYNC

async function getTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  console.log(data);
}

getTodos();
