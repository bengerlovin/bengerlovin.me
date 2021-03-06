const PageHeading = ({ children }) => {
    return (
        <>
            <h1 className='mt-0 md:text-left text-[33px] md:text-[40px] font-extrabold leading-[1.08] tracking-heading text-zinc-800 font-heebo'>
                {children}
            </h1>
        </>
    )
}

export default PageHeading
