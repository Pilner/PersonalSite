import React from 'react'
import '../../stylesheets/sections/tools.css';
import JSLogo from '../../images/tools/png/js.png';
import CLogo from '../../images/tools/png/c.png';
import CPPLogo from '../../images/tools/svg/cpp.svg';
import JavaLogo from '../../images/tools/svg/java.svg';
import MongoDBLogo from '../../images/tools/svg/mongodb.svg';
import ExpressLogo from '../../images/tools/png/express.png';
import NodeLogo from '../../images/tools/svg/nodejs.svg';
import WindowsLogo from '../../images/tools/svg/windows.svg';
import VSCodeLogo from '../../images/tools/svg/vscode.svg';
// import VimLogo from '../../images/tools/svg/vim.svg';
import WSLLogo from '../../images/tools/svg/linux.svg';


const Tools = () => {
  return (
	  <section id="tools" className="hidden">
		  <div className="spacer-1"></div>
		  <div>
			  <p className="alt-topic-title topic-position hidden-slide">Environments:</p>
			  <div className="container">
				  <div className="grid-container languages">
					  <div className="tool-title">
						  <p className="body-title"><span className="tooltip" data-tooltip="Sets of syntactic instructions to program applications">Languages</span></p>
					  </div>
					  <div className="grid-item">
						  <a href="https://www.javascript.com/" target="_blank">
							  <img className="tool-items" src={JSLogo} alt="javascript"/>
						  </a>
					  </div>
					  <div className="grid-item">
						  <a href="https://www.open-std.org/jtc1/sc22/wg14/" target="_blank">
							  <img className="tool-items" src={CLogo} alt="C"/>
						  </a>
					  </div>
					  <div className="grid-item">
						  <a href="https://cplusplus.com/" target="_blank">
							  <img className="tool-items" src={CPPLogo} alt="C++"/>
						  </a>
					  </div>
					  <div className="grid-item">
						  <a href="https://www.java.com/en/" target="_blank">
							  <img className="tool-items" src={JavaLogo} alt="java"/>
						  </a>
					  </div>
				  </div>
				  <div className="grid-container stacks">
					  <div className="tool-title">
						  <p className="body-title"><span className="tooltip" data-tooltip="Combination of technologies that completely build and run applications">Stacks</span></p>
					  </div>
					  <div className="grid-item">
						  <a href="https://www.mongodb.com/" target="_blank">
							  <img className="tool-items" src={MongoDBLogo} alt="mongodb"/>
						  </a>
					  </div>
					  <div className="grid-item">
						  <a href="https://expressjs.com/" target="_blank">
							  <img className="tool-items" src={ExpressLogo} alt="ExpressJS"/>
						  </a>
					  </div>
					  <div className="grid-item">
						  <a href="https://nodejs.org/en/" target="_blank">
							  <img className="tool-items" src={NodeLogo} alt="NodeJS"/>
						  </a>
					  </div>
				  </div>
				  <div className="grid-container workspaces">
					  <div className="tool-title">
						  <p className="body-title"><span className="tooltip" data-tooltip="Technologies I use to get the job done">Workspaces</span></p>
					  </div>
					  <div className="grid-item">
						  <a href="https://www.microsoft.com/en-us/windows" target="_blank">
							  <img className="tool-items" src={WindowsLogo} alt="Windows"/>
						  </a>
					  </div>
					  <div className="grid-item">
						  <a href="https://code.visualstudio.com/" target="_blank">
							  <img className="tool-items" src={VSCodeLogo} alt="VS Code"/>
						  </a>
					  </div>
					  <div className="grid-item">
						  <a href="https://www.vim.org/" target="_blank">
							  <img className="tool-items" src="/images/tools/svg/vim.svg" alt="Vim"/>
						  </a>
					  </div>
					  <div className="grid-item">
						  <a href="https://ubuntu.com/wsl" target="_blank">
							  <img className="tool-items" src={WSLLogo} alt="WSL"/>
						  </a>
					  </div>
				  </div>
			  </div>

		  </div>
	  </section>

  )
}

export default Tools