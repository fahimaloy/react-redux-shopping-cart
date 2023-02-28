import { createStore } from 'redux';
import productsReucer from './products/ProductsReducer';

const store = createStore(productsReucer);

export default store;