import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import getPages from "./useData/getPages";
import { useEffect, useState } from "react";
import getPageCount from "./useData/getPageCount";

const ListContainer = styled.div`
    height: 5rem;
`;

const UnorderedList = styled.ul`
    list-style: none;
    display: table;
    margin-left: auto;
    margin-right: auto;
`;

const List = styled.li`
    display: inline;
    font-size: 2rem;
    color: black;
    padding: 1rem;
`;

const Pagination = () => {

    const [lastPage, setLastPage] = useState(1);
    const nowPage = useParams().page;
    const pages = getPages(lastPage, parseInt(nowPage));

    useEffect(() => {
        getPageCount()
            .then(el => {
                if(el % 12 === 0){
                    setLastPage(parseInt(el / 12));
                } else {
                    setLastPage(parseInt(el / 12) + 1);
                }
            })
    }, []);
    
    return (
        <ListContainer>
            {pages.length > 0 ?
                <UnorderedList>
                    {
                        pages.includes(1) ? null :
                            <NavLink to={`/content/1`}>
                                <List>1 ...</List>
                            </NavLink>
                    }
                    {
                        pages.map(el => 
                        <NavLink to={`/content/${el}`} key={el}>
                            <List>{el}</List>
                        </NavLink>)
                    }
                    {
                        pages.includes(lastPage) ? null :
                            <NavLink to={`/content/${lastPage}`}>
                                <List>... {lastPage}</List>
                            </NavLink>
                    }
                </UnorderedList> : null}
        </ListContainer>
    );
}

export default Pagination;