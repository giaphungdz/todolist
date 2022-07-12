import React from 'react';
import {actSearch} from './../actions/index';
import {useSelector, useDispatch} from 'react-redux';

function Search() {
    const dispatch = useDispatch()
    const strSearch = useSelector(state => state.search)

    function handleClear(){
        dispatch(actSearch(''));
    }

    function handleChange(event){
        dispatch(actSearch(event.target.value));
    }

    return (
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="input-group">
                <input value={strSearch} onChange={handleChange} type="text" className="form-control" placeholder="Search for..." />
                <span className="input-group-btn">
                    <button onClick={handleClear} className="btn btn-warning" type="button">Clear</button>
                </span>
            </div>
        </div>
    );
}

export default Search;
