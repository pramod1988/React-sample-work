import React from 'react';
import {
  Link,
} from 'react-router-dom';

var footerStyle = {
	borderTop:'.05rem solid #e5e5e5',
	margin:'40px 10px 10px 10px',
	padding:'10px'
};
class Footer extends React.Component {
    render() {
        return (<footer className="footer" style={footerStyle}>
        <p>&copy; Company 2018</p>
      </footer>
        );
    }
}

export default Footer;