import {Routes,Route,Link} from 'react-router-dom';
import ProductListComponent from '../reduxapp/views/profuctlistcomponent';
import ProductCreateComponent from './productcreatecomponent';
import ProductEditComponent from './producteditcomponent';

const MainRoutingComponent = () => {
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
                            <Link to="/create">Create Product</Link>
                        </td>       
                    </tr>
                </tbody>
            </table>
            {/* Define the routw tables */}
            <Routes>
                <Route path="/" element={<ProductListComponent/>}/>
                <Route path="/create" element={<ProductCreateComponent/>}/>
                <Route path="/edit/:id" element={<ProductEditComponent/>}/>

            </Routes>
        </div>
    );
}


export default MainRoutingComponent;
