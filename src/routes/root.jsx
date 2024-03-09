import { Outlet, Link } from 'react-router-dom';

function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <Link to={`/contact`}>contact</Link>
            </li>
            <li>
              <Link to={`/signIn`}>signIn</Link>
            </li>
            <li>
              <Link to={`/HomePage`}>HomePage</Link>
            </li>
            <li>
              <Link to={`/SearchPage`}>SearchPage</Link>
            </li>
            <li>
              <Link to={`/table`}>table</Link>
            </li>
            <li>
              <a href={`/contacts/2`}>how are u</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        {/* render children */}
        <Outlet />
      </div>
    </>
  );
}

export default Root;
