
type initStateType = {
    theme: string
};

export type changeTypeThemeC = {
    type: 'SET_THEME'
    theme: string
}

type ActionType = changeTypeThemeC

const initState = {
    theme: 'red'
};

export const themeReducer = (state:initStateType = initState, action: ActionType): initStateType => { // fix any
    switch (action.type) {
        case "SET_THEME": {
            return {...state, theme: action.theme};
        }
        default:
            return state;
    }
};

export const changeThemeC = (theme:string): changeTypeThemeC => ({
    type: 'SET_THEME',
    theme
} as const); // fix any