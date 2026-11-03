
import { createSlice } from "@reduxjs/toolkit";

import java from "./assets/java.jpg";
import python from "./assets/python.jpg";
import richdad from "./assets/richdad.jpg";
import wings from "./assets/wings.jpg";
import alchemist from "./assets/alchemist.jpg";
import atomic from "./assets/James Clear.jpg";
import money from "./assets/Morgan Housel.jpg";
import think from "./assets/Napoleon Hill.jpg";
import harrypotter from "./assets/harrypotter.jpg";
import subconscious from "./assets/subconscious.jpg";


const BookSlice = createSlice({
  name: "book",

  initialState: {
    bookList: [
        {
    id: 1,
    title: "Wings of Fire",
    author: "A.P.J. Abdul Kalam",
    img: wings,
    price: 299,
    description: "The autobiography of A.P.J. Abdul Kalam.",
    category: "Biography"
},

{
    id: 2,
    title: "Harry Potter",
    author: "J.K. Rowling",
    img: harrypotter,
    price: 499,
    description: "A magical story about a young wizard.",
    category: "Fiction"
},

{
    id: 3,
    title: "The Power of Your Subconscious Mind",
    author: "Joseph Murphy",
    img: subconscious,
    price: 299,
    description: "Explore the power of your mind.",
    category: "Novels"
},

{
    id: 4,
    title: "Java Programming",
    author: "James Gosling",
    img: java,
    price: 599,
    description: "Learn Java programming from basics.",
    category: "Programming"
},

{
    id: 5,
    title: "The Alchemist",
    author: "Paulo Coelho",
    img: alchemist,
    price: 350,
    description: "A story about dreams and destiny.",
    category: "Fiction"
},

{
    id: 6,
    title: "Atomic Habits",
    author: "James Clear",
    img: atomic,
    price: 450,
    description: "Learn how to build good habits.",
    category: "Science"
},

{
    id: 7,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    img: money,
    price: 399,
    description: "Understand money and financial decisions.",
    category: "Science"
},

{
    id: 8,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    img: think,
    price: 299,
    description: "Learn the principles of success.",
    category: "Novels"
},

{
    id: 9,
    title: "Python Programming",
    author: "Guido van Rossum",
    img: python,
    price: 499,
    description: "Learn Python programming.",
    category: "Programming"
},

{
    id: 10,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    img: richdad,
    price: 399,
    description: "A book about financial education.",
    category: "Science"
},

    ],

updatedBook : null,
selectedBook: null
  },

  reducers: {
    addtoList: (state, action) => {
      state.bookList.push(action.payload);
    },

    deletefromList: (state, action) => {
      state.bookList = state.bookList.filter((obj) => obj.id !== action.payload );
    },

    getOne: (state, action) => {
      state.selectedBook = state.bookList.find( (obj) => obj.id === Number(action.payload));
    },
       selecttoupdate: (state, action) => {
    state.updatedBook = state.bookList.find(
        (obj) => obj.id == action.payload
     );
    },

    updateNow:(state,action)=>{

     var ind = state.bookList.findIndex((obj)=>obj.id == action.payload.id)
     if(ind != -1){
       state.bookList.splice(ind,1,action.payload);
     }
      }

  }
});

export const { addtoList, deletefromList, getOne,  selecttoupdate,   updateNow} = BookSlice.actions;
export default BookSlice.reducer;
