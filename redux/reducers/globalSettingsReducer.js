import { Actions } from '../actions/globalSettingsActions'

const initialState = {
   theme: 'light'
}

export default function globalSettingsReducer(state = initialState, action) {
   switch (action.type) {
      case Actions.SET_THEME_DARK:
         console.log('dark theme settings');
         return {
            ... state,
            theme: 'dark',
         }
      case Actions.SET_THEME_LIGHT:
         console.log('light theme settings');
         return {
            ...state,
            theme: 'light',
         }
      case Actions.SET_THEME_SYSTEM:
         return {
            ...state,
            theme: 'system',
         }
      default:
         return state;
   }
}
