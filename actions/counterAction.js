export const reduxIncreaseCounter = () => ({
    type: 'INCREASE_COUNTER',
    value: 1,
})
// Decrease Counter
export const reduxDecreaseCounter = () => ({
    type: 'DECREASE_COUNTER',
    value: 1,
})

export const reduxMultiply = value => ({
    type: 'MULTIPLY_SAGA',
    value: value,
})
export const resetCount = value => ({
    type: 'RESET_SAGA',
    value: value,
})
export const shareCount = () => ({
    type: 'SHARE_SAGA',
    value: 2,
})