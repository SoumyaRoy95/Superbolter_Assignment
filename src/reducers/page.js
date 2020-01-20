import { SAVE_DETAILS, ERR_SAVE_DETAILS } from '../constants/pageTypes';

const initialState = {
    image: '',
    imageName: '',
    imageDesc: ''
}

export const page = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_DETAILS: {
            return { ...state, image: action.payload.image, imageName: action.payload.imageName, imageDesc: action.payload.imageDesc }
        }
        case ERR_SAVE_DETAILS: {
            return { ...state, image: '', imageName: '', imageDesc: '' }
        }
        default:
            return state
    }
}