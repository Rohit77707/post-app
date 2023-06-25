import React, { useEffect, useState } from "react";
import styled from "styled-components";

const App = () => {
    const [post, setPost] = useState("");

    useEffect(() => {
        const url = "https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json.hits[0]);
                setPost(json.hits[0]);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    return (
      

        <Wrapper>
          
            <Paragraph>Title :{post.title}</Paragraph>
            <Paragraph>URL :{post.url}</Paragraph>
            <Paragraph>Create at :{post.created_at}</Paragraph>
            <Paragraph>Author Name :{post.author}</Paragraph>
        </Wrapper>
    );
};

export default App;

const Wrapper = styled.div`
    padding-top: 150px;
    margin: 0 auto;
    
`;

const Paragraph = styled.h2`
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 48px;
    text-align: center;
    border: 1px solid black;
`;