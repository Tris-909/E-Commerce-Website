import React from 'react'
import styled from 'styled-components';
import CollectionItem from '../collection-item/CollectionItem';

const CollectionPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`;

const Title = styled.h1`
    font-size: 28px;
    margin-bottom: 25px;
`;

const Preview = styled.div`
    display: flex;
    justify-content: space-between;
`;

export default function PreviewCollection({ name, items }) {
    return (
        <CollectionPreviewContainer>
            <Title> {name.toUpperCase()} </Title>
            <Preview>
                {
                    items.filter((item, index) => index < 4).map((item) => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </Preview>
        </CollectionPreviewContainer>
    )
}
