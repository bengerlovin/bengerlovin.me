const PageHeading = ({ children }) => {
    return (
        <>
            <h1 className='mb-4 text-[45px] md:text-[48px] font-extrabold leading-[1.08] tracking-heading text-zinc-800 font-heebo'>
                {children}
            </h1>
        </>
    )
}

export default PageHeading
