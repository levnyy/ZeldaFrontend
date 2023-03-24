import Header from '../Header/index.js';

export default function Layout({children}) {
    return (
        <>
            <Header />
            <main />
            <div>
                {children}
            </div>
            <main/>
        </>
    )
}