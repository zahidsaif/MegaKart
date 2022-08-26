//PageWrapper component forces the footer to the bottom of page, even if the main content is very less

const PageWrapper = ({ className, children }) => {
    return <section className={`d-flex flex-column min-vh-100 ${className}`}>
        {children}
    </section>
}

export default PageWrapper