// Imports: Dependencies
import { put } from 'redux-saga/effects';

// Increase Counter Async
export function* increaseCounterAsync() {
  try {
    yield put({ 
      type: 'INCREASE_COUNTER_ASYNC',
      value: 1,
    });
  }
  catch (error) {
    // CHANGE LATER
    console.log(error);
  }
}




// Decrease Counter Async
export function* decreaseCounter() {
  try {
    // Delay 4 Seconds
    // yield delay(4000);
  
    // Dispatch Action To Redux Store
    yield put({ 
      type: 'DECREASE_COUNTER_ASYNC',
      value: 1,
    });
  }
  catch (error) {
    console.log(error);
  }
}

// Generator: Watch decrease Counter

export function* multiplyCounter(action){
  console.log(action.value)
  try {
    yield put({
      type: 'MULTIPLY',
      value: action.value
    })
  } catch (error) {
    console.log(error)
  }
}
export function* resetCounter(action){
  try {
    yield put({
      type: 'RESET',
      value: 0
    })
  } catch (error) {
    console.log(error)
  }
}
export function* shareSaga(action) {
  try {
    yield put({ 
      type: 'SHARE',
      value: action.value,
    });
  }
  catch (error) {
    // CHANGE LATER
    console.log(error);
  }
}