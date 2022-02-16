const TimelineHeading = ({ title }: { title: string }) => {
    return (
        <>
            <h3 className='mb-3 text-[22px] md:text-[24px] font-semibold leading-[1.08] tracking-heading text-zinc-800 font-heebo'>
                {title}
            </h3>
        </>
    )
}

export default TimelineHeading
