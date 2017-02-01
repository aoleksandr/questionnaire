import React from 'react';
import {Link} from 'react-router';

class NotFoundPage extends React.Component {
    render() {
        return (
            <div>
                <h3>Page Not Found</h3>
                <Link to="/">Back home</Link>
            </div>
        );
    }
}

export default NotFoundPage;