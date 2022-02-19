import '../style/card.css';

const Card = ({ firstName, lastName, street, city, onClick}) => {

    return(
        <div className='card'>
            <p>{firstName || '/'}</p>
            <p>{lastName || '/'}</p>
            <p>{street || '/'}</p>
            <p>{city || '/'}</p>
            <button className="btn" type="delete" title="Remove" onClick={onClick} >
                Remove
            </button>
        </div>
    )
}

export default Card;