import produce from 'immer';
import createReducer from "./reducerUtil";
import Image from '../../models/image'
const initialState = 

   [];


const imagesListReducer = {
    setImages(state, action) {
        action.payload&&action.payload.map(image =>{
          state.push( Image(image.albumId,image.id, image.title, image.url, image.thumbnailUrl))}
            );
    }
    
}


export default produce((state, action) => createReducer(state, action, imagesListReducer), initialState);