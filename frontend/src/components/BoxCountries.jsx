
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function BoxCountries({countryName, href}) {
    return(
        <div className='bg-slate-400 w-full mb-4 p-4 rounded'>
            <Link className='font-semibold text-white' to={href}>{countryName}</Link>
        </div>
    );
}

BoxCountries.propTypes = {
    countryName: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
}

export default BoxCountries;