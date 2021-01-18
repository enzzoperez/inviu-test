import React from "react";
import styled from "styled-components";

const Root = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
`;

const TitleText = styled.div`
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 20px;
`;

const CommentEmailText = styled.div`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

const Comments = ({ dataComments }) => {
    return (
        <Root>
            <TitleText>Comments</TitleText>
            {dataComments &&
                dataComments.map((dc) => (
                    <CommentEmailText key={dc.id}>{dc.email}</CommentEmailText>
                ))}
        </Root>
    );
};

export default Comments;
