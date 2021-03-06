import React from 'react'
import axios from 'axios'
import Comments from './Comments.js'

class Employee extends React.Component {
    constructor(props) {
    super(props);

    this.state = {employee: [],loading: true};
  }
  
  componentDidMount() {
    
    axios.get('https://jsonplaceholder.typicode.com/posts/'+this.props.match.params.id)
      .then(response => {
        //console.log("Hello");
        	setTimeout(() => this.setState({ loading: false }), 500); // simulates an async action, and hides the spinner
            this.setState({ employee: response.data });
            //console.log(response);
            //console.log("Hi");
      })
      .catch(function (error) {
        console.log(error);
      });
      
  }

getListView(){
    //console.log( this.state.person.data);
     return( <div key={this.state.employee.id}>
        <h1>{ this.state.employee.title }</h1>
        <p>{this.state.employee.body}</p>
        <Comments post_id={this.state.employee.id} />
      </div>)
}


    render() {
    	if(this.state.loading)
		{
			return (
				<h1>Loading</h1>
			);
		}
		else 
		{
			return (
                <div id="layout-content" className="layout-content-wrapper">
        			<div className="panel-list">{ this.getListView() }</div>
      			</div>
        	);
		}
    }

}

export default Employee;