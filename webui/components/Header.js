import Link from 'next/link'

const Header = () => {
    return (
        <header className="flex justify-between items-center bg-blue-300 p-4">
            <div className="flex">Left</div>
            <div className="flex">Right</div>
            <Link href="/">
                <a>Home</a>
            </Link>
        </header>
    );
}

export default Header;