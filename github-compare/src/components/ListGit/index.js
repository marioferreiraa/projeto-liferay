import styled from 'styled-components';
import spritemap from '../../images/icons.svg';
import ClayIcon from '@clayui/icon';
import ModalDelete from '../ModalDelete';
import { useState } from 'react';

const StyledLogo = styled.img`
    width: 40px;
`;

const StyledHeadButton = styled.button`
    background-color: #FFF;
    border: none;
    color: #6B6C7E;
    padding: 0;
    width: 38px;
    height: 24px;
    & svg{
        width: 16px;
        height: 16px;
    }
`;

const StyledHeadDiv = styled.div`
    background-color: #FFF;
    border-bottom: 1px solid #E7E7ED;
`

const StyledBodyList = styled.li`
    list-style: none;
    font-size: 14px;
    color: #272833;
`

const StyledTitleItem = styled.span`
    font-weight: 600;
    font-size: 14px;
`

const StyledLanguage = styled.div`
    text-transform: uppercase;
    color: #B95000;
    border: 1px solid #B95000;
    font-size: 10px;
    border-radius: 2px;
    width: fit-content;
    padding: 0 4px;
`

const StyledShaddowList = styled.div`
    box-shadow: 0 1px 3px -1px rgb(0 0 0 / 60%);
`;

const ListGit = (props) => {
    
    const [favorite, setFavorite] = useState(false);

    return (
            <StyledShaddowList className="row p-3">
                <div className="col-md-1">
                    <StyledLogo src={props.logo}/>
                </div>
                <div className="col-md-10">
                    <div className="col-xs-12">
                        <StyledTitleItem>{props.name}</StyledTitleItem>
                    </div>
                    <div className="col-xs-12">
                        <ul className="d-flex p-0 mb-2">
                            <StyledBodyList className="mr-4">Stars {props.stars}</StyledBodyList>
                            <StyledBodyList className="mr-4">Forks {props.forks}</StyledBodyList>
                            <StyledBodyList className="mr-4">Open {props.openIssues}</StyledBodyList>
                            <StyledBodyList className="mr-4">Age {props.age}</StyledBodyList>
                            <StyledBodyList className="mr-4">Last {props.lastCommit}</StyledBodyList>
                            <StyledBodyList className="mr-4">License {props.license || 'N/A' }</StyledBodyList>
                        </ul>
                    </div>
                    <div className="col-xs-12">
                        <StyledLanguage>{props.language}</StyledLanguage>
                    </div>
                </div>
                <div className="col-md-1">
                    <StyledHeadButton className="favorite-button" onClick={() => setFavorite(!favorite)}>
                        <ClayIcon className="search-icon" spritemap={spritemap} symbol={!favorite ? "star-o" : "star"} />
                    </StyledHeadButton>
                    <ModalDelete deleteCardFromDashboard={props.deleteCardFromDashboard} deleteCardName={props.name}></ModalDelete>
                </div>
            </StyledShaddowList>
    );
};

export default ListGit;