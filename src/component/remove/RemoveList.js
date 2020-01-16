import React , { useContext } from 'react';
import {ListContext} from '../../Context';
import {InputContext} from '../../Context';
import Remove from './Remove';
import './removelist.css';

function RemoveList() {

    // use context
    const list = useContext(ListContext);
    const { handleRemove } = useContext(InputContext);

    return (
        <div className="jumbotron bg-dark jumbotronRemove mb-3 mt-4">
            <ul className="list-group text-white">
              {
                  list.length > 0? list.map(
                      (lis , index)=><Remove index={index} name={lis.name} cost={lis.cost} color={lis.color} img={lis.img} handleRemove={handleRemove}/>
                  ) : <h1><i className="fa fa-smile-o text-primary mr-2"></i>There is nothing yet...</h1>
              }
            </ul>
        </div>
    )
}

export default RemoveList;
