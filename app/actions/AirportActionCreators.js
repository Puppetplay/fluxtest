import AppDispatcher from '../AppDispatcher';
import constants from '../constants'

let AirportActionCreators = {

    selectMain(info) {
        AppDispatcher.dispatch({
            type: constants.TEST1,
            info: info
        });
    },

    test2(info) {
        AppDispatcher.dispatch({
            type: constants.TEST2,
            info: info
        });
    },
};

export default AirportActionCreators;
