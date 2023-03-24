import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <nav className="bg-slate-100 shadow-md">
            <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3 items-center">
                <Link to="/">
                    <img className="h-10" src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/640px-YouTube_full-color_icon_%282017%29.svg.png' alt="Learn with Sumit" />
                </Link>
                <Link
                    to="/videos/add"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
                >
                    + Add Video
                </Link>
            </div>
        </nav>
    );
}
