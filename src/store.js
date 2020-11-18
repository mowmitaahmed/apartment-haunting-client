import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

// actions
export const addRentHouse = house => {
    return {
        type: "CREATE_HOUSE",
        payload: house
    }
}
const initialState = {
    houses: [
        {
            id: 1,
            "title": "Washington Avenue",
            "features": {
                "feature-1": "Nasirabad H/S, Chattogram",
                "feature-2": "3 Bedrooms",
                "feature-3": "2 Bathroom"
            },
            "price": 194
        },
        {
            id: 2,
            "title": "Family Apartment Three",
            "features": {
                "feature-1": "Nasirabad H/S, Chattogram",
                "feature-2": "3 Bedrooms",
                "feature-3": "2 Bathroom"
            },
            "price": 356
        },
        {
            id: 3,
            "title": "Gorgeous house",
            "features": {
                "feature-1": "Nasirabad H/S, Chattogram",
                "feature-2": "3 Bedrooms",
                "feature-3": "2 Bathroom"
            },
            "price": 256
        },
        {
            id: 4,
            "title": "Luxury villa",
            "features": {
                "feature-1": "Nasirabad H/S, Chattogram",
                "feature-2": "3 Bedrooms",
                "feature-3": "2 Bathroom"
            },
            "price": 345
        },
        {
            id: 5,
            "title": "Epic Huda Palacio",
            "features": {
                "feature-1": "Nasirabad H/S, Chattogram",
                "feature-2": "3 Bedrooms",
                "feature-3": "2 Bathroom"
            },
            "price": 536
        },
        {
            id: 6,
            "title": "Washington Avenue",
            "features": {
                "feature-1": "Nasirabad H/S, Chattogram",
                "feature-2": "3 Bedrooms",
                "feature-3": "2 Bathroom"
            },
            "price": 283
        }
    ],
    myRent: [
        {
            "houseName": "Washington Avenue",
            "price": 195
        },
        {
            "houseName": "Gorgeous house",
            "price": 256
        },
        {
            "houseName": "Luxury villa",
            "price": 345
        },
        {
            "houseName": "Washington Avenue",
            "price": 195
        }
    ],
    bookingList: [
        {
            "name": "Sufi Ahmed Hamim",
            "email": "sufi@gmail.com",
            "phone": "0171000000",
            "massage": "Washington Avenue",
            "status" : "0"
        },
        {
            "name": "Pro Rasel",
            "email": "rasel@gmail.com",
            "phone": "0171000000",
            "massage": "Washington Avenue",
            "status" : "1"
        },
        {
            "name": "Abu Sufian",
            "email": "abusufian@gmail.com",
            "phone": "0171000000",
            "massage": "Washington Avenue",
            "status" : "0"
        },
        {
            "name": "Mujahid",
            "email": "mujahid@gmail.com",
            "phone": "0171000000",
            "massage": "Washington Avenue",
            "status" : "2"
        },
        {
            "name": "Reza Ahmed",
            "email": "reza@gmail.com",
            "phone": "0171000000",
            "massage": "Washington Avenue",
            "status" : "0"
        },
        {
            "name": "Sajedul Karim",
            "email": "sajedul@gmail.com",
            "phone": "0171000000",
            "massage": "Washington Avenue",
            "status" : "1"
        }

    ]
}

const houseReducer = (state = initialState, action) =>{
    switch(action.type) {
        case "CREATE_HOUSE":
            return {
                ...state,
                houses: [action.payload, ...state.houses]
            }
    
        default:
            return state;
    }
}

const store = createStore(houseReducer, composeWithDevTools())

export default store;