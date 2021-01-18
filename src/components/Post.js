import React from "react";
import styled from 'styled-components';

const Root = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #d3cfcf;
    margin-top: 20px;
    padding: 20px 10px;
`

const TitleText = styled.div`
    font-size: 20px;
    margin-bottom: 40px;
    font-weight: bold;
`

const DateText = styled.div`
    color: gray;
`

const BodyText = styled.div`
    font-size: 15;
`

const Post = ({ dataPost }) => {
    const { name, body } = dataPost;
    const date = new Date();
    return (
        <Root>
            <TitleText>{name}</TitleText>
            <DateText>{date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</DateText>
            <BodyText>{body}</BodyText>
        </Root>
    );
};

export default Post;
