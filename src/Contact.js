import React from 'react'

class Contact extends React.Component {
	constructor(props) {
    super(props);
    this.state = {text: ''};
   this.handleClick = this.handleClick.bind(this);
  }
	handleClick(e) {
    e.preventDefault();

    //this.setState({ text:  });
    console.log(this.state.text);
  }
  handleChange(event) {
  	//console.log(event.target.value);
    this.setState({text: event.target.value});
  }
	render(){
		return (
				<div>
					<h2>Contact Us</h2>
					<p>
		            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
		            </p>
		            <p>
		              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
		            </p>
		            <form>
					  <div className="form-group">
					    <label>Email address</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.handleChange.bind(this)} />
					    <small id="emailHelp" className="form-text text-muted">{this.state.text}</small>
					  </div>
					  <div className="form-group">
					    <label for="exampleInputPassword1">Password</label>
					    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
					  </div>
					  <div className="form-check">
					    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
					    <label className="form-check-label" for="exampleCheck1">Check me out</label>
					  </div>
					  <button type="submit" className="btn btn-primary" onClick={this.handleClick}>Submit</button>
					</form>
				</div>
			)
	};
} 

export default Contact