import {combineReducers} from 'redux';
import globalSettingsReducer from './globalSettingsReducer'

export default combineReducers({
   globalSettings: globalSettingsReducer
});
