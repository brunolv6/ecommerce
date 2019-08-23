import React from 'react';
import MenuItem from '../menu-item/menu-item.component.jsx'

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import "./directory.style.scss"
import { selectSections } from '../../redux/directory/directory.selectors.js';

const Directory = ({sections}) => (
    <div className="directory-menu">
        {
            sections.map(({id, ...outrosEstados}) => (
                <MenuItem key={id} {...outrosEstados}/>
            ))       
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectSections
})

export default connect(mapStateToProps)(Directory);