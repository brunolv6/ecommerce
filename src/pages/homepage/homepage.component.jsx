import React from 'react';
//por ser classe DirectoryMenu, NÃO tem que ter { ... }
import Directory from "../../components/directory/directory.component"

import './homepage.style.scss';

class Homepage extends React.Component{
    
    render(){
        return(
            <div className="homepage">
                <Directory/>
            </div>
        );
    }
}

export default Homepage;