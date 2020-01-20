import * as types from '../constants/pageTypes'

export function saveImageDetails(image, imageName, imageDesc) {
    return function (dispatch) {
        dispatch({
            type: types.SAVE_DETAILS,
            payload: {
                image: image,
                imageName: imageName,
                imageDesc: imageDesc
            }
        })
    }
}