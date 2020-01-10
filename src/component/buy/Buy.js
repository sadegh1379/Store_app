import React , { useContext} from 'react';
import {ListContext} from '../../Context';
import './buylist.css';
import BuyList from './BuyList';

function Buy() {
    const list = useContext(ListContext);

    // style
    const myStyle={
        display:'grid',
        gridTemplateColumns:'repeat(3,1fr) ',
        gridGap:'1rem'
    }

    return (
        <div style={myStyle} className="jumbotron jumbotronBuy mt-4 mx-auto text-center">
          
            {
                list.map(
                    (lis , index)=>{
                        return(
                                <BuyList key={index} index={index} name={lis.name} cost={lis.cost} color={lis.color}/>
                        )
                    }
                )
            }
        </div>
    )
}

export default Buy;
