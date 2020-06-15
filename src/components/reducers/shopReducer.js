import Item1 from '../Assets/Beach2.jpg'
import Item2 from '../Assets/Durdle Door.jpg'
import Item3 from '../Assets/Exotic Sunset2.jpg'
import Item4 from '../Assets/Fireplace2.jpg'
import Item5 from '../Assets/Forest2.jpg'
import Item6 from '../Assets/From Above2.jpg'
import Item7 from '../Assets/High in the clouds2.jpg'
import Item8 from '../Assets/Melting.jpg'
import Item9 from '../Assets/Moonlight2.jpg'
import Item10 from '../Assets/Paint1.jpg'
import Item11 from '../Assets/Paint3.jpg'
import Item12 from '../Assets/Paint4.jpg'
import Item13 from '../Assets/Paint5.jpg'
import Item14 from '../Assets/Paint6.jpg'
import Item15 from '../Assets/paint7.jpg'
import Item16 from '../Assets/Park way2.jpg'
import Item17 from '../Assets/Sunday Walk2.jpg'
import Item18 from '../Assets/Sunset2.jpg'
import Item19 from '../Assets/The all seeing eye2.jpg'
import Item20 from '../Assets/The Fall2.jpg'
import Item21 from '../Assets/The ghost.jpg'
import Item22 from '../Assets/The Mind Beyond2.jpg'
import Item23 from '../Assets/The Night.jpg'
import Item24 from '../Assets/The Path2.jpg'
import Item25 from '../Assets/The Roots.jpg'
import Item26 from '../Assets/The Shine.jpg'
import Item27 from '../Assets/The spartan.jpg'
import Item28 from '../Assets/Waterfall2.jpg'
import Item29 from '../Assets/Winter world2.jpg'
import Item30 from '../Assets/Worlds End.jpg'
import { ADD_TO_SHOP, REMOVE_ITEM } from '../actions/shop-actions'


const initState = {
 items: [
        { id: 1, title: 'Beach', desc: "21,0 x 29,7 cm", price: 110, img: Item1 },
        { id: 2, title: 'Durdle Door', desc: "21,0 x 29,7 cm", price: 80, img: Item2 },
        { id: 3, title: 'Exotic Sunset', desc: "21,0 x 29,7 cm", price: 120, img: Item3 },
        { id: 4, title: 'FIreplace', desc: "21,0 x 29,7 cm", price: 260, img: Item4},
        { id: 5, title: 'Forest', desc: "21,0 x 29,7 cm", price: 160, img: Item5 },
        { id: 6, title: 'From Above', desc: "21,0 x 29,7 cm", price: 90, img: Item6 },
        { id: 7, title: 'High in the clouds', desc: "21,0 x 29,7 cm", price: 90, img: Item7 },
        { id: 8, title: 'Melting', desc: "29,7 x 42,0 cm ", price: 90, img: Item8 },
        { id: 9, title: 'Moonlight', desc: "21,0 x 29,7 cm", price: 90, img: Item9 },
        { id: 10, title: 'Yng yang', desc: "21,0 x 29,7 cm", price: 90, img: Item10 },
        { id: 11, title: 'Palm Trees', desc: "21,0 x 29,7 cm", price: 90, img: Item11},
        { id: 12, title: 'The Road', desc: "21,0 x 29,7 cm", price: 90, img: Item12 },
        { id: 13, title: 'Alone in the sun', desc: "21,0 x 29,7 cm", price: 90, img: Item13 },
        { id: 14, title: 'The past', desc: "21,0 x 29,7 cm", price: 90, img: Item14 },
        { id: 15, title: 'Prague', desc: "29,7 x 42,0 cm ", price: 90, img: Item15 },
        { id: 16, title: 'Park way', desc: "21,0 x 29,7 cm", price: 90, img: Item16 },
        { id: 17, title: 'Sunday walk', desc: "21,0 x 29,7 cm", price: 90, img: Item17 },
        { id: 18, title: 'Sunset', desc: "21,0 x 29,7 cm", price: 90, img: Item18 },
        { id: 19, title: 'The eye', desc: "29,7 x 42,0 cm ", price: 90, img: Item19 },
        { id: 20, title: 'The fall', desc: "21,0 x 29,7 cm", price: 90, img: Item20 },
        { id: 21, title: 'The ghost', desc: "29,7 x 42,0 cm ", price: 90, img: Item21 },
        { id: 22, title: 'The mind beyond', desc: "29,7 x 42,0 cm ", price: 90, img: Item22 },
        { id: 23, title: 'The night', desc: "29,7 x 42,0 cm ", price: 90, img: Item23 },
        { id: 24, title: 'The path', desc: "29,7 x 42,0 cm ", price: 90, img: Item24 },
        { id: 25, title: 'The roots', desc: "29,7 x 42,0 cm ", price: 90, img: Item25 },
        { id: 26, title: 'The shine', desc: "29,7 x 42,0 cm ", price: 90, img: Item26 },
        { id: 27, title: 'The spartan', desc: "29,7 x 42,0 cm ", price: 90, img: Item27 },
        { id: 28, title: 'Waterfall', desc: "21,0 x 29,7 cm", price: 90, img: Item28 },
        { id: 29, title: 'Winter world', desc: "29,7 x 42,0 cm ", price: 90, img: Item29 },
        { id: 30, title: 'Worlds end', desc: "29,7 x 42,0 cm Canvas board ", price: 90, img: Item30 },
        
    ],
    addedItems: [],
    total: 0

}
const shopReducer = (state = initState, action) => {

    //INSIDE HOME COMPONENT
    if (action.type === ADD_TO_SHOP) {
        let addedItem = state.items.find(item => item.id === action.id)
        //check if the action id exists in the addedItems
        let existed_item = state.addedItems.find(item => action.id === item.id)
        if (existed_item) {
            addedItem.quantity = 1
            return {
                ...state,
                total: state.total + addedItem.price
            }
        }
        else {
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price

            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal
            }

        }
    }
    if (action.type === REMOVE_ITEM) {
        let itemToRemove = state.addedItems.find(item => action.id === item.id)
        let new_items = state.addedItems.filter(item => action.id !== item.id)

        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
        console.log(itemToRemove)
        return {
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    return state;
    }

export default shopReducer;
