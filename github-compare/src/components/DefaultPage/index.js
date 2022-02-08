import defaultImage from '../../images/dataSet.svg';

const EmptyPage = (props) => {
    return (
        <div className="container text-center mt-9">
            <img src={defaultImage} />
            <h3 className="mt-5">{props.Title}</h3>
            <p className >{props.Description}</p>
            { props.buttonName && <button className="btn btn-secondary mt-3" onClick={props.callbackButton}>{props.buttonName}</button>}
        </div>
    )
}

export default EmptyPage;