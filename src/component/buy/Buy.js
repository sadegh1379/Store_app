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
               list.length > 0? list.map(
                    (lis , index)=>{
                        return(
                                <BuyList key={index} index={index} name={lis.name} cost={lis.cost} color={lis.color} img={lis.img} memory={lis.memory} description={lis.description} camera={lis.camera}/>
                        )
                    }
                ) : <h6 className=" text-center text-white mx-auto"><i className="fa fa-smile-o text-primary mr-2"></i>There is nothing yet...</h6>
            }
        </div>
    )
}

export default Buy;
