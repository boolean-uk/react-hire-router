import PropTypes from "prop-types";

export default PropTypes.shape({
    name: PropTypes.shape({
        first: PropTypes.string.isRequired,
        last: PropTypes.string.isRequired,
    }).isRequired,
    picture: PropTypes.shape({
        large: PropTypes.string.isRequired,
    }).isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    wage: PropTypes.number,
    id: PropTypes.shape({
        value: PropTypes.string.isRequired,
    }).isRequired,
})