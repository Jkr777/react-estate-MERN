const INITIAL_STATE = {
  list: [
    {
      city: "Bucharest",
      img: "https://images.unsplash.com/photo-1587632117986-43aa518804b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      properties: 25
    },    {
      city: "Sibiu",
      img: "https://images.unsplash.com/photo-1456491882918-2bc1929963f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      properties: 14
    },    {
      city: "Brasov",
      img: "https://images.unsplash.com/photo-1567177729078-98ecc4b21a6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      properties: 34
    },
  ]
}

const citiesReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default citiesReducer;