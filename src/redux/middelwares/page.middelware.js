import {actions} from '../../redux/actions/actions'

export const getPage = ({ dispatch, getState }) => next => action => {

    if (action.type === 'GET_PAGE') {

        fetch(`https://localhost:44372/data/page/${action.payload.from}/${action.payload.itemsPerPage}`)
            // .then(response => response.json())
            .then(data => {
                data.json().then(data=>{
                    console.log(data)
                dispatch(actions.setImages(data));
                action.payload.history&&action.payload.history.push({
                pathname: "/page",
                state: { from:action.payload.from,itemsPerPage:action.payload.itemsPerPage }})
            })
        })
            .catch((error) => {
                
                console.error('Error:', error);
            });
    }
    return next(action);
}
