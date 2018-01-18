import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

var Style = {
    backgroundColor: '#e9ecef',
    borderRadius: '.3rem',
    padding: '20px',
    textAlign: 'center',
    fontSize:'28px'
};

class Album extends React.Component {
	constructor(props)
	{
		super(props);
		this.state = { photos:[], loading:true}
	}

	componentDidMount()
	{
		axios.get('https://jsonplaceholder.typicode.com/albums/'+this.props.match.params.id+'/photos')
	      .then(response => {
	        //console.log("Hello");
	        	setTimeout(() => this.setState({ loading: false }), 500); // simulates an async action, and hides the spinner
	            this.setState({ photos: response.data });
	            //console.log(response);
	            //console.log("Hi");
	      })
	      .catch(function (error) {
	        console.log(error);
	      });
	}

	getAlbumList(){
	    return this.state.photos.map((item,index) => {
	      if(item.title!='')
	      {
	         return( <div key={item.id} className="col-md-4">
	         		  <div className="box">
	         		    <img src={item.thumbnailUrl} className="img-fluid" />
	                    <h1 style={Style}>{ item.title }</h1>
	                  </div>
	          </div>)
	      }
	    });
	}

	render(){
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
            			<div className="panel-list row">{ this.getAlbumList() }</div>
          			</div>
            );
        }
	}
}

export default Album