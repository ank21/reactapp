import React, { Component } from 'react';

class Home extends Component {
    constructor() {
        super();
        this.state = { items: [] }
    }
    componentDidMount() {
        fetch(`http://jsonplaceholder.typicode.com/users`)
            .then(result => result.json())
            .then(items => this.setState({ items }))
    }
    render() {
        return (
        <div>
        
            {this.state.items.length ?
                this.state.items.map(item => <li key={item.id}><div>NAme={item.name}</div><div>email{item.email}</div></li>)
                : <li>Loading...</li> 
            }
        
        </div>)
    }
}
export default Home;
