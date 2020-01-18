import React , { useContext } from 'react';
import {ListContext} from '../../Context';
import {InputContext} from '../../Context';
import Remove from './Remove';
import './removelist.css';

function RemoveList() {

    // use context
    const list = useContext(ListContext);
    const { handleRemove } = useContext(InputContext);


    // filter
    function Filter() {
        // Declare variables
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
      
        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[0];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }
        }
      }

    return (
        <div className="jumbotron bg-dark jumbotronRemove mb-3 mt-4">
                        <div>
                                
                                <input onKeyUp={Filter} name="myInput" id="myInput" type="text" placeholder="Search by Name..." className="  form-control mb-4 "/>
                                
                        </div>
            
                    <table id="myTable" className="table tableremove table-dark table-responsive    text-center text-white">
                        <thead >
                            <tr className="table-info">
                                <th  scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Color</th>
                                <th scope="col">Cost</th>
                                <th scope="col">Memory</th>
                                <th scope="col">Camera</th>
                                <th scope="col">Image</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                    <tbody >
                    {
                        list.length > 0? list.map(
                            (lis , index)=><Remove key={index} index={index} name={lis.name} cost={lis.cost} color={lis.color} memory={lis.memory} camera={lis.camera} img={lis.img} handleRemove={handleRemove}/>
                        ) : <h1 className="mt-4"><i className="fa fa-smile-o text-primary mr-2"></i>There is nothing yet...</h1>
                    }
                    </tbody>
            </table>
        </div>
    )
}

export default RemoveList;
