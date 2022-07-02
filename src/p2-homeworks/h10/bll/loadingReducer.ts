const initState = false


export type StateType = boolean

type ActionType = loadingTypeAC

type loadingTypeAC = {
    type: 'SET-LOADING'
    loading: boolean
}

export const loadingReducer = (state: StateType = initState, action:ActionType ): StateType => {
    switch (action.type) {
        case 'SET-LOADING':
            return action.loading
        default: return state
    }
}

export const loadingAC = (loading: boolean): loadingTypeAC => ({type: 'SET-LOADING', loading} as const)
