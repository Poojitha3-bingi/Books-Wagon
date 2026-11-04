
import { useSelector } from "react-redux";
export default function ViewAllOrders(){

      var allOrders = useSelector((state)=>state.order.allOrders); 



       return(
        <>
       <table className = "table table-bordered">
            <thead>
                <tr>
                    <th>sNo</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>quantity</th>
                    <th>Image</th>
    
                </tr>
            </thead>

            <tbody>

                {
                allOrders &&
                allOrders.map((c,ind)=>(

                    <tr key={ind}>
                        <td>{ind+1}</td>
                        <td>{c.title}</td>
                        <td>{c.price}</td>
                        <td>{c.quantity}</td>
                        <td> <img src = {c.img} height = {150} width = {200} alt = " " /> </td>
                       
                    </tr>
            
                ))
            }
                
            </tbody>
        </table>
        </>
       )
}

