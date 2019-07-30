import React from 'react';
//por ser classe DirectoryMenu, NÃO tem que ter { ... }
import DirectoryMenu from "../../components/directoryMenu/directoryMenu.component"

import './homepage.style.scss';

class Homepage extends React.Component{
    
    render(){
        return(
            <div className="homepage">
                <DirectoryMenu/>
            </div>
        );
    }
}

export default Homepage;