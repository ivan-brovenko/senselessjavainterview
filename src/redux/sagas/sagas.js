import {takeEvery, put, call} from 'redux-saga/effects';
import {putData} from "../actions";
import '@babel/polyfill/noConflict';

function* workerLoadData(action) {
    try {
        const {from, to, text} = action;
        const response = yield call(fetch,"https://hirak-translate.p.rapidapi.com/tr", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "hirak-translate.p.rapidapi.com",
                "x-rapidapi-key": "60e043cd53mshfa78b4412e40826p11fc3ejsnacf6729893fa"
            }
        });
        const data = yield response.json();
        console.log(data)
        yield put(putData(data))
    } catch (e) {
        console.log(e);
    }


}

export default function* watchLoadData() {
    yield takeEvery('LOAD_DATA', workerLoadData);
}