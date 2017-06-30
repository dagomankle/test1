import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


/*import React from 'react';
import ReactDOM from 'react-dom';

const MypPrimerComponente = ()=> (
	React.createElement('div', {className: 'text-center'}, 'Hola Mundo');

	//<div className = 'tex-center'>
	//hola mundo 
	//</div>

);//flechas sustituyen  la palabra funtcion y el return eliminan llaves

//ReactDOM.render(
//	React.createElement(MypPrimerComponente, null, null),
//	document.getElementById('root')
//	);

ReactDOM.render(<MypPrimerComponente/>,
	document.getElementById('root')
	);*/