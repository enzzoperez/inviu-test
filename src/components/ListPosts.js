import React from "react";
import Post from "./Post";
import styled from "styled-components";

const Root = styled.div`
  display: grid;
    grid-template-columns: repeat(3, 200px);
    grid-gap: 30px;
    width: 70%;
    justify-content: center;
`;


const ListPosts = ({ data }) => {
    if (data) {
        return (
            <Root>
                {data.map((p, index) => (
                    <Post key={index} dataPost={p} />
                ))}
            </Root>
        );
    }
    return <></>;
};

export default ListPosts;
