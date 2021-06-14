// Imports: Dependencies
import { all, takeLatest } from 'redux-saga/effects';

// Imports: Redux Sagas
import { decreaseCounter, increaseCounterAsync, multiplyCounter, resetCounter, shareSaga } from './counterSaga';

// Redux Saga: Root Saga
export function* rootSaga () {
  yield all([
    yield takeLatest('INCREASE_COUNTER',increaseCounterAsync),
    yield takeLatest('DECREASE_COUNTER',decreaseCounter),
    yield takeLatest('MULTIPLY_SAGA', multiplyCounter),
    yield takeLatest('SHARE_SAGA', shareSaga),
    yield takeLatest('RESET_SAGA', resetCounter),
  ]);
};
