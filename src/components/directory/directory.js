import React from 'react'

import MenuItem from '../menu-item/menu-item-component';

import {connect} from 'react-redux';
import styled from 'styled-components';

const DirectoryContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

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
            <DirectoryContainer>
                {content}
            </DirectoryContainer>
        );
    }
}

const mapStateToProps = (state) => ({
  sections: state.directory.sections
});

export default connect(mapStateToProps)(Directory);
