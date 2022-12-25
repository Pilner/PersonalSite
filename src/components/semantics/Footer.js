import React from 'react'
import '../../stylesheets/semantics/footer.css';
import SiteLogo from '../../images/site-logo/FRV-logo-light.png';

const Footer = () => {
  return (
	  <div className="footer">
		  <div className="container">
			  <div>
				  <img className="site-logo-sm" src={SiteLogo} alt=""/>
					  <p className=""><b>&copy; 2022<a href="/"></a></b></p>
			  </div>
		  </div>
	  </div>
  )
}

export default Footer