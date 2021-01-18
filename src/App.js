import React, { useState } from "react";
import ButtonCharge from "./components/ButtonCharge";
import Header from "./components/Header";
import ListPosts from "./components/ListPosts";
import { getPosts } from "./utils/services";
import styled from "styled-components";

const Root = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

function App() {
    const [data, setData] = useState();

    const chargePosts = async () => {
        const data = await getPosts();
        setData(data);
    };

    return (
        <Root>
            <Header headerText={"Demo JS"} />
            <ButtonCharge
                textButton={"Cargar Posts"}
                clickBehaviour={chargePosts}
            />
            {data && <ListPosts data={data} />}
        </Root>
    );
}

export default App;
