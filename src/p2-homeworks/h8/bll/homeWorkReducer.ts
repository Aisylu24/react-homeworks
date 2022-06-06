import {UserType} from "../HW8";


type ActionsType = ReturnType<typeof sortAC>
| ReturnType<typeof checkAgeAC>

export const homeWorkReducer = (state: Array<UserType>, action: ActionsType): Array<UserType> => {
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up')
            return [...state.sort((a,b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)]
            else return [...state.sort((a,b) => a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1 )]
        }
        case 'check': {
            return state.filter(user => user.age > action.payload)
        }
        default: return state
    }
}

const sortAC = ()=> {
    return {
        type: 'sort',
        payload: 'up' || 'down'
    }
}

const checkAgeAC = (age:number)=> {
    return {
        type: 'check',
        payload: age
    }
}