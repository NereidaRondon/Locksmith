import { Link } from 'react-router-dom';
export default function Error(){

    return(
        <section className="error--pg">
            <h1>Error: 404</h1>
            
            <p>Page not found.</p>
            <Link to='/'>← back home</Link>
        </section>
    );
}