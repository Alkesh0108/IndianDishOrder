import { createSlice } from '@reduxjs/toolkit';
import chapati from '../Images/chapati.PNG'
import daal from '../Images/daal.PNG'
import curd from '../Images/curd.PNG'
import pickle from '../Images/pickle.PNG'
import paneer from '../Images/paneer.png'
import sweet from '../Images/sweet.png'

const ItemSlice = createSlice({
    name: 'itemsList',
    initialState: [
        { id: 1, name: 'Chapati', price: 5, priceType: 'Pcs.', img: chapati, quantity: 1, totalAmount: 5 },
        { id: 2, name: 'Daal', price: 120, priceType: 'Plate', img: daal, quantity: 1, totalAmount: 120 },
        { id: 3, name: 'Shahi Paneer', price: 220, priceType: 'Plate', img: paneer, quantity: 1, totalAmount: 220 },
        { id: 4, name: 'Curd', price: 30, priceType: 'Pack', img: curd, quantity: 1, totalAmount: 30 },
        { id: 5, name: 'Pickle', price: 20, priceType: 'Pack', img: pickle, quantity: 1, totalAmount: 20 },
        { id: 6, name: 'Sweet', price: 40, priceType: '2 Pcs.', img: sweet, quantity: 1, totalAmount: 40 }
    ]
});

export default ItemSlice.reducer;
