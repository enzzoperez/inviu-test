import React, { useState } from "react";
import styled from "styled-components";
import { getCommentPost } from "../utils/services";
import Comments from "./Comments";

const Root = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #d3cfcf;
    margin-top: 20px;
    padding: 20px 10px;
    ${(props) => props.yellowBackground && `background-color: yellow;`}
`;

const TitleText = styled.div`
    font-size: 20px;
    margin-bottom: 40px;
    font-weight: bold;
`;

const DateText = styled.div`
    color: gray;
`;

const BodyText = styled.div`
    font-size: 15;
`;

const Post = ({ dataPost }) => {
    const [postComments, setPostComment] = useState();
    const [openComments, setOpenComments] = useState(false);
    const { title, body } = dataPost;
    const date = new Date();

    const chargeComments = async () => {
        const data = await getCommentPost(dataPost.id);
        setPostComment(data);
        setOpenComments(!openComments);
    };

    const formatTitle = title => {
        const titleSplit = title.split(' ')
        return titleSplit.length < 4 ? `${titleSplit.slice(0,4).join(' ')}` : `${titleSplit.slice(0,4).join(' ')}...`
    }

    return (
        <Root onClick={chargeComments} yellowBackground={openComments} >
            <TitleText>{title && formatTitle(title)}</TitleText>
            <DateText>
                {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
            </DateText>
            <BodyText>{body}</BodyText>

            {openComments && <Comments dataComments={postComments} />}
        </Root>
    );
};

export default Post;
