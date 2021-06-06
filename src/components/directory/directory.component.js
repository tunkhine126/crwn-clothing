import React, { Component } from 'react';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import SectionsData from '../../data/sections.json';

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: SectionsData.sections
    }
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({id, ...otherSectionProps}) => (
          <MenuItem key={id} {...otherSectionProps}/>
        ))}
      </div>
    )
  }
}

export default Directory;