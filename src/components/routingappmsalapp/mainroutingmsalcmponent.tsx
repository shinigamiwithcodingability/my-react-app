import {Routes,Route,Link} from 'react-router-dom';
import ProductListComponent from './profuctlistmsalcomponent';
import ProductCreateComponent from './productcreatemsalcomponent';
import ProductEditComponent from './producteditmsalcomponent';

const MainRoutingMsalComponent = () => {
    return (
        <div className="container alert alert-warning">
            <h1>Main Routing Component</h1>
            <table className="table table-bordered table-striped">                
                <tbody>
                    <tr>
                        <td>
                            <Link to="/">Product List</Link>
                        </td>
                        <td>
                            <Link to="/">Create Product</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
            {/* Define the routw tables */}
            <Routes>
                <Route path="/" element={<ProductListComponent/>}/>
                <Route path="/create" element={<ProductCreateComponent/>}/>
                <Route path="/edit" element={<ProductEditComponent/>}/>

            </Routes>
        </div>
    );
}


export default MainRoutingComponent;
