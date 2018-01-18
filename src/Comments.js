import React from 'react'
import axios from 'axios'

class Comments extends React.Component {
    constructor(props) {
    super(props);

    this.state = {comments: [],loading: true};
  }
  
  componentDidMount() {
    //console.log(this.props.match.params.id);
    //this.UserList();
    axios.get('https://jsonplaceholder.typicode.com/posts/'+this.props.post_id+'/comments')
      .then(response => {
        //console.log("Hello");
        	setTimeout(() => this.setState({ loading: false }), 500); // simulates an async action, and hides the spinner
            this.setState({ comments: response.data });
            //console.log(response);
            //console.log("Hi");
      })
      .catch(function (error) {
        console.log(error);
      });
      
  }

getListView(){
    //console.log(this.state.comments);
    return this.state.comments.map((item,index) => {
      //console.log()
      return( <div key={item.id}>
          <h5>{ item.name }</h5>
          <p>{item.body}</p>
        </div>)
    });
     
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
                <h2> Comments</h2>
        			<div className="panel-list">{ this.getListView() }</div>
      			</div>
        	);
		}
    }

}

export default Comments;