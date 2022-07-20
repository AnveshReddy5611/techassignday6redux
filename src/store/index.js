import {createStore} from 'redux';


const initialvalue=0;


const reducerFn=(state={counter:0},action)=>{
 if (action.type==='INCREMENT'){
    return{counter:state.counter+1}
 }
 else if (action.type==='DECREMENT'){
    return{counter:state.counter-1}
 }
 else if (action.type==='RESET'){
    return{counter:initialvalue}
 }
 
 
    return state;
}




const store=createStore(reducerFn)
export default store;