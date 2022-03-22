import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Layout = (props) => {
    return (
        <div>
            <Header />
            <div className="flex h-full">
                <Sidebar />
                {props.children}
            </div>
            <Footer />
        </div>
    )
}


export default Layout