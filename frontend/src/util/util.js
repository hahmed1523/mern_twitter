export const renderErrors = errorsObj => {
    return (
        <ul className='errors-list'>
            {Object.keys(errorsObj).map(key => (
                <li key={`error-${key}`}>
                    {errorsObj[key]}
                </li>
            ))}
        </ul>
    );
};