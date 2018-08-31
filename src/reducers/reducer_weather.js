import {FETCH_WEATHER} from '../actions/index'

export default function weatherReducer (state= [], action){
    switch (action.type){
        case FETCH_WEATHER:
        // console.log(action.payload.data)
        return [action.payload.data, ...state] //this will give value as [city,city,city] NOT city,[city,city]
        // return state.concat([action.payload.data])// we can user this methode also but above method is new 
        //never change state like state.push is will manupulate exisiting array above method will create new array 
    }
    return state
}