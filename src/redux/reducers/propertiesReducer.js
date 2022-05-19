const INITIAL_STATE = {
  list: [
    {
      _id: 1,
      city: "Bucharest",
      price: 280000,
      bedrooms: 7,
      size: 350,
      bathrooms: 5,
      img: "https://media.rightmove.co.uk/184k/183290/87458947/183290_202065_IMG_01_0000.jpg"
    },    {
      _id: 2,
      city: "Sibiu",
      price: 177900,
      bedrooms: 5,
      size: 125,
      bathrooms: 2,
      img: "https://media.rightmove.co.uk/184k/183290/122114630/183290_213394_IMG_00_0000.jpeg"
    },{
      _id: 3,
      city: "Bucharest",
      price: 2000000,
      bedrooms: 10,
      size: 840,
      bathrooms: 8,
      img: "https://media.rightmove.co.uk/184k/183290/117610319/183290_212157_IMG_00_0000.jpeg"
    },{
      _id:  4,
      city: "Brasov",
      price: 600000,
      bedrooms: 7,
      size: 210,
      bathrooms: 3,
      img: "https://media.rightmove.co.uk/184k/183290/117808235/183290_212196_IMG_00_0000.jpeg"
    },{
      _id: 5,
      city: "Bucharest",
      price: 177900,
      bedrooms: 5,
      size: 180,
      bathrooms: 3,
      img: "https://media.rightmove.co.uk/184k/183290/113316689/183290_211159_IMG_00_0001.jpeg"
    },{
      _id: 6,
      city: "Bucharest",
      price: 235000,
      bedrooms: 5,
      size: 170,
      bathrooms: 3,
      img: "https://media.rightmove.co.uk/184k/183290/118593893/183290_210357_IMG_00_0000.jpeg"
    },
  ]
};

const propertiesReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default propertiesReducer;