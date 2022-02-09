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

const CardGit = (props) => {

    const [favorite, setFavorite] = useState(false);

    return (
        <div className="card">
            <StyledHeadDiv className="card-header d-flex justify-content-between align-items-center">
                <div>
                    <StyledLogo src={props.logo}/>
                    <span>{props.name}</span>
                </div>
                <div className="d-flex">
                    <StyledHeadButton onClick={() => setFavorite(!favorite)}>
                        <ClayIcon className="search-icon" spritemap={spritemap} symbol={!favorite ? "star-o" : "star"} />
                    </StyledHeadButton>
                    <ModalDelete deleteCardFromDashboard={props.deleteCardFromDashboard} deleteCardName={props.name}></ModalDelete>
                </div>
            </StyledHeadDiv>
            <div className="card-body">
                <ul>
                    <StyledBodyList><StyledTitleItem>Stars</StyledTitleItem> {props.stars}</StyledBodyList>
                    <StyledBodyList><StyledTitleItem>Forks</StyledTitleItem> {props.forks}</StyledBodyList>
                    <StyledBodyList><StyledTitleItem>Open Issues</StyledTitleItem> {props.openIssues}</StyledBodyList>
                    <StyledBodyList><StyledTitleItem>Age</StyledTitleItem> {props.age}</StyledBodyList>
                    <StyledBodyList><StyledTitleItem>Last Commit</StyledTitleItem> {props.lastCommit}</StyledBodyList>
                    <StyledBodyList><StyledTitleItem>License</StyledTitleItem> {props.license || 'N/A' }</StyledBodyList>
                    <StyledLanguage>{props.language}</StyledLanguage>
                </ul>
            </div>
        </div>
    );
};

export default CardGit;