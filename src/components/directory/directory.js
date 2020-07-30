import React from 'react'
import './directory.scss';

import MenuItem from '../menu-item/menu-item-component';

import {connect} from 'react-redux';


class Directory extends React.Component {

    render() {
        const {sections} = this.props;
        const content = sections.map((section, index) => {
            return <MenuItem 
                        name={section.title} 
                        key={section.id} 
                        imageUrl={section.imageUrl} 
                        size={section.size ? section.size : null} 
                        linkUrl={section.linkUrl}/>
        });

        return(
            <div className="directory-menu">
                {content}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
  sections: state.directory.sections
});

export default connect(mapStateToProps)(Directory);
