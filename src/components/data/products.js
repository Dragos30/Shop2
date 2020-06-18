import product1 from '../Assets/Beach2.jpg'
import product2 from '../Assets/Durdle Door.jpg'
import product3 from '../Assets/Exotic Sunset2.jpg'
import product4 from '../Assets/Fireplace2.jpg'
import product5 from '../Assets/Forest2.jpg'
import product6 from '../Assets/From Above2.jpg'
import product7 from '../Assets/High in the clouds2.jpg'
import product8 from '../Assets/Melting.jpg'
import product9 from '../Assets/Moonlight2.jpg'
import product10 from '../Assets/Paint1.jpg'
import product11 from '../Assets/Paint3.jpg'
import product12 from '../Assets/Paint4.jpg'
import product13 from '../Assets/Paint5.jpg'
import product14 from '../Assets/Paint6.jpg'
import product15 from '../Assets/paint7.jpg'
import product16 from '../Assets/Park way2.jpg'
import product17 from '../Assets/Sunday Walk2.jpg'
import product18 from '../Assets/Sunset2.jpg'
import product19 from '../Assets/The all seeing eye2.jpg'
import product20 from '../Assets/The Fall2.jpg'
import product21 from '../Assets/The ghost.jpg'
import product22 from '../Assets/The Mind Beyond2.jpg'
import product23 from '../Assets/The Night.jpg'
import product24 from '../Assets/The Path2.jpg'
import product25 from '../Assets/The Roots.jpg'
import product26 from '../Assets/The Shine.jpg'
import product27 from '../Assets/The spartan.jpg'
import product28 from '../Assets/Waterfall2.jpg'
import product29 from '../Assets/Winter world2.jpg'
import product30 from '../Assets/Worlds End.jpg'

const products = {
    products: [
        { id: 1, title: 'Beach',category: "nature",type: "oil",desc: "21,0 x 29,7 cm",price: 110,img: product1},
        { id: 2, title: 'Durdle Door', category: "nature", type: "oil", desc: "21,0 x 29,7 cm", price: 80, img: product2 },
        { id: 3, title: 'Exotic Sunset', category: "nature", type: "oil", desc: "21,0 x 29,7 cm", price: 120, img: product3 },
        { id: 4, title: 'FIreplace', category: "nature", type: "oil", desc: "21,0 x 29,7 cm", price: 260, img: product4 },
        { id: 5, title: 'Forest', category: "nature", type: "oil", desc: "21,0 x 29,7 cm", price: 160, img: product5 },
        { id: 6, title: 'From Above', category: "nature", type: "oil", desc: "21,0 x 29,7 cm", price: 90, img: product6 },
        { id: 7, title: 'High in the clouds', category: "nature", type: "oil", desc: "21,0 x 29,7 cm", price: 90, img: product7 },
        { id: 8, title: 'Melting', category: "abstract", desc: "29,7 x 42,0 cm ", price: 90, img: product8 },
        { id: 9, title: 'Moonlight', category: "nature", type: "oil", desc: "21,0 x 29,7 cm", price: 90, img: product9 },
        { id: 10, title: 'Yng yang', category: "abstract", type: "oil", desc: "21,0 x 29,7 cm", price: 90, img: product10 },
        { id: 11, title: 'Palm Trees', category: "nature", type: "oil", desc: "21,0 x 29,7 cm", price: 90, img: product11 },
        { id: 12, title: 'The Road', category: "abstract", type: "mixed", desc: "21,0 x 29,7 cm", price: 90, img: product12 },
        { id: 13, title: 'Alone in the sun', category:"nature", type: "mixed",  desc: "21,0 x 29,7 cm", price: 90, img: product13 },
        { id: 14, title: 'The past', category: "abstract", type: "mixed", desc: "21,0 x 29,7 cm", price: 90, img: product14 },
        { id: 15, title: 'Prague', category: "nature", desc: "29,7 x 42,0 cm ", price: 90, img: product15 },
        { id: 16, title: 'Park way', category: "nature", type: "mixed", desc: "21,0 x 29,7 cm", price: 90, img: product16 },
        { id: 17, title: 'Sunday walk', category: "nature", type: "mixed", desc: "21,0 x 29,7 cm", price: 90, img: product17 },
        { id: 18, title: 'Sunset', category: "nature", type: "mixed", desc: "21,0 x 29,7 cm", price: 90, img: product18 },
        { id: 19, title: 'The eye', category: "nature", type: "acrylic", desc: "29,7 x 42,0 cm ", price: 90, img: product19 },
        { id: 20, title: 'The fall', category: "nature", type: "acrylic", desc: "21,0 x 29,7 cm", price: 90, img: product20 },
        { id: 21, title: 'The ghost', category: "abstract", type: "acrylic", desc: "29,7 x 42,0 cm ", price: 90, img: product21 },
        { id: 22, title: 'The mind beyond', category: "abstract", type: "acrylic", desc: "29,7 x 42,0 cm ", price: 90, img: product22 },
        { id: 23, title: 'The night', category: "nature", type: "acrylic", desc: "29,7 x 42,0 cm ", price: 90, img: product23 },
        { id: 24, title: 'The path', category: "abstract", type: "acrylic", desc: "29,7 x 42,0 cm ", price: 90, img: product24 },
        { id: 25, title: 'The roots', category: "abstract", type: "acrylic", desc: "29,7 x 42,0 cm ", price: 90, img: product25 },
        { id: 26, title: 'The shine', category: "abstract", type: "acrylic", desc: "29,7 x 42,0 cm ", price: 90, img: product26 },
        { id: 27, title: 'The spartan', category: "abstract", type: "acrylic", desc: "29,7 x 42,0 cm ", price: 90, img: product27 },
        { id: 28, title: 'Waterfall', category: "abstract", type: "mixed", desc: "21,0 x 29,7 cm", price: 90, img: product28 },
        { id: 29, title: 'Winter world', category: "abstract", type: "acrylic",desc: "29,7 x 42,0 cm ", price: 90, img: product29 },
        { id: 30, title: 'Worlds end', category: "abstract", type: "acrylic", desc: "29,7 x 42,0 cm Canvas board ", price: 90, img: product30 },
   
    ],
    addedProducts: [],
    total: 0
};
export default products;