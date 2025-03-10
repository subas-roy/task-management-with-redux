import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto h-16, flex items-center gap-3 px-5">
      <div className="flex items-center">
        <Link to="/">
          <span className="font-bold ml-2">Task</span>Master
        </Link>
      </div>
      <Link to="/">Tasks</Link>
      <Link to="/users">Users</Link>
    </nav>
  );
};

export default Navbar;
