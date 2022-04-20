import {NavLink} from "react-router-dom";
import styled from "styled-components";
import getPages from "./useData/getPages";

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

const lastPage = 6;

const Pagination = () => {
    const pages = getPages(lastPage);
    return (
        <ListContainer>
            {pages.length > 0 ?
                <UnorderedList>
                    {
                        pages.map(el => 
                        <NavLink to={`/content/${el}`} key={el}>
                            <List>{el}</List>
                        </NavLink>)
                    }
                </UnorderedList> : null}
        </ListContainer>
    );
}

export default Pagination;