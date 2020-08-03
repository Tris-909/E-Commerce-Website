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

    @media screen and (max-width: 500px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 10px;
        row-gap: 20px;
        grid-template-rows: 1fr;
        justify-content: space-between;
    }
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
