import PropTypes from 'prop-types';
import shortid from 'shortid';
import Star from './Star';

export default function Stars({ count }) {
    if (!count || typeof count !== 'number' || count > 5) {
        return null;
    }

    const stars = [];
    for (let i = 1; i <= count; i++) {
        stars.push(shortid.generate());
    }

    return (
        <ul className="card-body-stars">
            {stars.map(item => <Star key={item} />)}
        </ul>
    )
}

Stars.defaultProps = {
    count: 0
};

Stars.propTypes = {
    count: PropTypes.number
};