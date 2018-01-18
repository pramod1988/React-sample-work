import React from 'react'
import axios from 'axios'

class Employee extends React.Component {
    constructor(props) {
    super(props);

    this.state = {employee: [],loading: true};
  }
  
  componentDidMount() {
    //console.log(this.props.match.params.id);
    //this.UserList();
    axios.get('http://dummy.restapiexample.com/api/v1/employee/'+this.props.match.params.id)
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
        <h1>{ this.state.employee.employee_name }</h1>
        <p>Salary: {this.state.employee.employee_salary}</p>
        <p>age: {this.state.employee.employee_age}</p>
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