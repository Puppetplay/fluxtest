import AppDispatcher from '../AppDispatcher';
import constants from '../constants';
import {MapStore} from 'flux/utils';

class Data {

}

class Test1Store extends MapStore {
    constructor() {
        super(...arguments);
        this.data = 'abc';
    }

    testfunc() {
        console.log(this.data);
        return this.data;
    }

    reduce(state, action) {
        switch (action.type) {
            case constants.TEST1:
                return state.set('test1', [{info: action.info, a: '1'}, {info: action.info}])
            case constants.TEST2:
                return state.set('test2', this.testfunc)
            default:
                return state;
        }
    }
}
export default new Test1Store(AppDispatcher);