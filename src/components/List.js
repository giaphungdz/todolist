import React, { useMemo } from 'react';
import {useSelector} from 'react-redux';
import Item from './Item';
import {filter, includes, orderBy as funcOrderBy } from 'lodash';

function List() {
    const items = useSelector(state => state.items)
    const sort = useSelector(state => state.sort)
    const strSearch = useSelector(state => state.search)

    const {orderBy, orderDir}   = sort;

    const itemsAfterFiltered = useMemo(() => {
        let _items = filter(items || [], (item) => {
            return includes(item.name.toLowerCase(), strSearch.toLowerCase());
        });   

        return _items
    }, [items, strSearch])

    const itemsAfterSorted = useMemo(() => {
       return funcOrderBy(itemsAfterFiltered, [orderBy], [orderDir]);  
    }, [itemsAfterFiltered, orderBy, orderDir])


    let elmItem     = <tr><th colSpan={4}>Không có công việc</th></tr>;
    
    if(itemsAfterSorted.length > 0 ){
        elmItem = itemsAfterSorted.map((item, index)=> {
            return (
                <Item key={index} item={item} index={index} />
            );
        });
    }
    
    return (
        <div className="panel panel-success">
            <div className="panel-heading">List Task</div>
            <table className="table table-hover ">
                <thead>
                    <tr>
                        <th style={{width: '10%'}} className="text-center">#</th>
                        <th>Task</th>
                        <th style={{width: '20%'}} className="text-center">Level</th>
                        <th style={{width: '20%'}}>Action</th>
                    </tr>
                </thead>
                <tbody>{elmItem}</tbody>
            </table>
        </div>
    );
}

export default List;
