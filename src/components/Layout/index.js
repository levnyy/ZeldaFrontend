import Header from "../Header/index";

export default function Layout({ children }) {

    return (
        <>
            <Header />
            <main>
                <div>
                    {children}
                </div>
            </main>
        </>
    )
}
