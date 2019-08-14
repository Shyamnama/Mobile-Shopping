import Item1 from '../../images/item1.jpg';
import Item2 from '../../images/item2.jpg';
import Item3 from '../../images/item3.jpg';
import Item4 from '../../images/item4.jpg';
import Item5 from '../../images/item5.jpg';
import Item6 from '../../images/item6.jpg';
import Item7 from '../../images/item7.jpg';
import Item8 from '../../images/item8.jpg';
import Item9 from '../../images/item9.jpg' ;
import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY } from '../actions/cartActions';



const initState = {
    items: [
        {id:1, title: 'Iphone XS', desc:" One of the most noticeable attractions of the iPhone Xs is its indulgent 14.73 cm (5.8) Super Retina Display. The A12 Bionic Chip which powers this Apple phone transforms the way you look at pictures, the way you game, or even the way you browse the internet on your phone with its fluid performance.", price: 97400 , img: Item1},
        {id:2, title: 'Samsung S10', desc:"Samsung Galaxy S10 comes with an Intelligent Camera that automatically optimizes its settings to give you picture-perfect photos. and its Dynamic AMOLED screen ensure that this smartphone is easy on your eyes while also enhancing your user experience. ", price: 61900, img: Item2},
        {id:3, title: 'Google Pixel 3XL', desc:"With a powerful battery, massive internal storage, impressive cameras and innovative features, there's more to Pixel 3 XL than meets the eye. The cameras of this smartphone are equipped with various features, such as the Portrait Mode to help take Insta-worthy portraits and group selfies.", price: 54999, img: Item3},
        {id:4, title: 'Huawei P30 Pro', desc:"Zoom in to explore the mystery of the celestial at night, examine the delicate details of crystal. Capture the best things in the moment and create your vision for the future. 16.4 centimeters The IP68 rated water and dust resistance multi-touch capacitive touchscreen.", price: 71990, img: Item4},
        {id:5, title: 'OnePlus 7 Pro', desc:"Go beyond speed with 'OnePlus' newest flagship with an unique full display, an industry leading triple camera and premium glass design. 16.9 centimeters multi-touch capacitive touchscreen. Android Oxygen operating system with 2.84GHz Snapdragon 855 octa core processor.", price: 52999, img: Item5},
        {id:6, title: 'Sony Xperia 1', desc:"The new Xperia 1 was made with the advanced technology from Sony’s professional monitors, cameras and audio devices, to deliver the best experience in a smartphone. It features the world´s first 21:9 CinemaWide™ 4K HDR OLED display and a pro-quality triple lens camera.", price: 73990, img: Item6},
        {id:7, title: 'Iphone XR', desc:" The iPhone XR has arrived to scintillate our senses with a host of features, such as the Liquid Retina Display, a faster Face ID, and a powerful A12 Bionic Chip. The cameras of the iPhone XR will continue to amaze you with their brilliance. Now, experience beauty, in every way.", price: 59990, img: Item7},
        {id:8, title: 'Samsung Note 10', desc:"The Galaxy Note 10 is designed to give you the mobile experience of a computer, a gaming console, a movie-tech camera, and an intelligent pen - all in one device. Powered by a 7nm processor, 8 GB of RAM, 256 GB of internal storage capacity and a 2.0 Gbps LTE connection.", price: 69999, img: Item8},
        {id:9, title: 'Redmi K20 Pro', desc:" The blazing-fast processor Qualcomm Snapdragon 855 gives you peak performance, while a 48 MP Triple camera setup lets you see things from a different perspective altogether. Be it gaming or everyday tasks this device handles it flawlessly.  ", price: 27999, img: Item9},
    ],
    addedItems: [],
    total: 0

}

const cartReducer =  (state = initState, action) => {

    if(action.type === ADD_TO_CART){
        let addedItem = state.items.find(item=> item.id === action.id)
        let existed_item = state.addedItems.find(item=> action.id === item.id)
        if(existed_item){
            addedItem.quantity += 1
            return {
                ...state, 
                total: state.total + addedItem.price
            }
        }else{
            addedItem.quantity = 1;
            let newTotal = state.total + addedItem.price

            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal
            }
        }
    }
    
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }

    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    else{
        return state
    }
}  





export default cartReducer;