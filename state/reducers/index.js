import {combinedReducers} from 'redux'
import amountReducer from './amountReducer';

export default reducers = combinedReducers({
    amount: amountReducer
})