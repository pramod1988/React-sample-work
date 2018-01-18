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
class Home extends React.Component {
    constructor(props) {
    super(props);

    this.state = {person: [],loading: true};
  }
  
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
            //console.log(response);
            setTimeout(() => this.setState({ loading: false }), 500);
            this.setState({ person: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
      
  }

getListView(){
    return this.state.person.map((item,index) => {
      if(item.title!='')
      {
         return( <div key={item.id} className="col-md-4">
                  <h1 style={Style}><Link to={`/emp/${item.id}`}>{ item.title }</Link></h1>
          </div>)
      }
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
            <div className="panel-list row">{ this.getListView() }</div>
          </div>
            );
        }
    }

}

export default Home;