const ProjectHeading = ({ children, classes }: { children: React.ReactNode; classes?: string }) => {
    return (
        <>
            <h3 className={`${classes ? classes : ''} text-[26px] md:text-[28px] font-bold leading-[1.08] tracking-headings  font-heebo`}>
                {children}
            </h3>
        </>
    )
}

export default ProjectHeading
