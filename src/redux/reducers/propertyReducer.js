const INITIAL_STATE = {
  _id: "1",
  price: 280000,
  bedrooms: 7,
  bathrooms: 5,
  size: 350,
  city: "Bucharest",
  address: "Prelungirea Ghencea",
  coordinates: [44.410683, 26.005395],
  description: `BENEFITS FOR THE CLIENTS OF THIS OFFER: 1. Benefits offered by the area:
  We offer for sale villa with about 600 sqm land in the Prelungirea Ghencea - Bucharest area.
  The surface of the houses is about 350 sqm and the footprint of 125 sqm.Construction is finalized in 2006 and tabulated. On the ground floor we find an open space kitchen, a spacious and bright living room, a bedroom and a bathroom. Upstairs we have 3 bedrooms, each with its own bathroom and balcony. The courtyard is beautifully landscaped with turf and enough space for both the temporary swimming pool and the swimming pool. The property is sold fully finished with ceramic wall and floor tiles, parquet, PVC windows, central heating, radiators, interior doors and metal door. The villa is connected to all utilities. The location of the villa is one of the world's favorite because it is a beautiful quiet area, with access to the shops of the area and Ratb. The price is from 280000E. Here you will find everything you are looking for at home. Large courtyard with parking space. Landscaped lawn and bright courtyard, children's playground and large terrace and furnished with everything that is necessary to spend your leisure time in a pleasant way. Large living room. Large and bright bedrooms with balconies and patio. And also storage spaces: warehouse, closet and dresing. We wait for you at home! 3. The legal situation: Intabulat Buyer commission 0!`,
  img: [
    {
      original: 'https://media.rightmove.co.uk/184k/183290/87458947/183290_202065_IMG_01_0000.jpg',
      thumbnail: 'https://media.rightmove.co.uk/184k/183290/87458947/183290_202065_IMG_01_0000.jpg',
    },    {
      original: 'https://media.rightmove.co.uk/184k/183290/87458947/183290_202065_IMG_02_0000.jpg',
      thumbnail: 'https://media.rightmove.co.uk/184k/183290/87458947/183290_202065_IMG_02_0000.jpg',
    },{
      original: 'https://media.rightmove.co.uk/184k/183290/87458947/183290_202065_IMG_03_0000.jpg',
      thumbnail: 'https://media.rightmove.co.uk/184k/183290/87458947/183290_202065_IMG_03_0000.jpg',
    },{
      original: 'https://media.rightmove.co.uk/184k/183290/87458947/183290_202065_IMG_04_0000.jpg',
      thumbnail: 'https://media.rightmove.co.uk/184k/183290/87458947/183290_202065_IMG_04_0000.jpg',
    },{
      original: 'https://media.rightmove.co.uk/184k/183290/87458947/183290_202065_IMG_05_0000.jpg',
      thumbnail: 'https://media.rightmove.co.uk/184k/183290/87458947/183290_202065_IMG_05_0000.jpg',
    },{
      original: 'https://media.rightmove.co.uk/184k/183290/87458947/183290_202065_IMG_06_0000.jpg',
      thumbnail: 'https://media.rightmove.co.uk/184k/183290/87458947/183290_202065_IMG_06_0000.jpg',
    },{
      original: 'https://media.rightmove.co.uk/184k/183290/87458947/183290_202065_IMG_07_0000.jpg',
      thumbnail: 'https://media.rightmove.co.uk/184k/183290/87458947/183290_202065_IMG_07_0000.jpg',
    },  
  ],
  features: ["Telephone", "Electricity", "Water", "Central heating", "Vehicle access", "Gas", "Sewerage", "Asphalted", "Unfurnished", "Individual"]
}

const propertyReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default propertyReducer;