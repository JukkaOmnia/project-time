import React, {Component} from 'react';
import personService from '../services/customers'

class Customers extends Component {

    componentDidMount() {
     personService.getAll()
         .then( c => console.log(c))
    }

    render() {
        return (
            <div>
                Customer component works!
            </div>
        );
    }
}

export default Customers;