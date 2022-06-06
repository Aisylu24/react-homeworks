import {UserType} from "../HW8";


type ActionsType = ReturnType<typeof sortAC>
| ReturnType<typeof checkAgeAC>

export const homeWorkReducer = (state: Array<UserType>, action: ActionsType): Array<UserType> => {
    switch (action.type) {
        case 'sort': {
            const newState = [...state].sort((a,b) => {
                if( a.name < b.name) return -1
                else if( a.name < b.name) return 1
                else return 0
            })
            return action.payload === 'up' ? newState : newState.reverse()
        }
        case 'check': {
            return state.filter(user => user.age >= action.payload)
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