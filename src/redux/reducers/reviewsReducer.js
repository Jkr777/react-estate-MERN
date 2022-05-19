const INITIAL_STATE = {
  list: [
    {
      review: "Adri went the extra mile to ensure my property was rented quickly to nice tenants.",
      name: "Aurel",
      city: "Sibiu"
    },    {
      review: "I appreciated the personal touch I received when working with GIO-HOMES.",
      name: "Martin",
      city: "Brasov"
    },    {
      review: "Caterina was simply fantastic, I handed her the keys and she took care of everything.",
      name: "David",
      city: "Sibiu"
    },    {
      review: "Being a first time buyer, I was most impressed with how Adri explained everything and most of all was extremely helpful. I would recommend Adri. Being a most satisfied client.",
      name: "Anna",
      city: "Bucharest"
    },    {
      review: "After an in-depth briefing, the search was left in Francesco’s hands. His constant updates and efficient tailored search rapidly led to the purchase of a fantastic 2 bedroom house with terrace. Highly recommended.",
      name: "Lucian",
      city: "Bucharest"
    },    {
      review: "A big thank you to GIO-HOMES they found me my dream home and did all the organizing for me. Well done.",
      name: "Andreea",
      city: "Sibiu"
    },{
      review: "I have found Adri a very helpful agent. Francesco made me feel very special and most importantly he listened to me. Thank you.",
      name: "Cojocaru",
      city: "Sibiu"
    },{
      review: "I used GIO-HOMES because I felt confident my portfolio of properties would get the individual attention it deserved. I have not been disappointed.",
      name: "Roger",
      city: "Bucharest"
    },{
      review: "A pleasure to work with them and I would do so again, Caterina always kept me informed.",
      name: "Dan",
      city: "Bucharest"
    },{
      review: "Big thank you to Caterina, she came highly recommended and exceeded my expectations.",
      name: "Sarah",
      city: "Brasov"
    },

  ]
};

const reviewsReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reviewsReducer;