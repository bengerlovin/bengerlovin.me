const PageSubHeading = ({ children, classes }: { children: React.ReactNode, classes?: string }) => {
    return (
        <>
            <h2 className={`${classes ?? ''} mb-4 text-[38px] md:text-[42px] font-extrabold leading-[1.08] tracking-heading text-zinc-800 font-heebo`}>
                {children}
            </h2>
        </>
    )
}

export default PageSubHeading
