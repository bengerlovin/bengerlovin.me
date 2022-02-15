type SpecialLinkProps = {
    children: React.ReactNode;
    variant?: 'blue' | 'yellow' | 'green' | 'purple'
    href?: string;
    target?: 'blank' | 'default';
}


const SpecialLink = ({ children, variant, href, target }: SpecialLinkProps) => {


    let classes = null;
    let destination = href ?? '#'
    let targetValue = target ?? '_blank'



    if (variant === 'blue') {
        classes = 'decoration-blue-500 hover:bg-blue-100 hover:text-blue-800'
    } else if (variant === 'yellow') {
        classes = 'decoration-yellow-500 hover:bg-yellow-100 hover:text-yellow-800'
    } else if (variant === 'green') {
        classes = 'decoration-green-500 hover:bg-green-100 hover:text-green-800'
    } else if (variant === 'purple') {
        classes = 'decoration-violet-500 hover:bg-violet-100 hover:text-violet-800'
    } else {
        // default to blue variant styling
        classes = 'decoration-blue-500 hover:bg-blue-100 hover:text-blue-800'
    }

    return (
        <a href={destination} target={targetValue} className={`transition-all ease-in-out underline duration-[205ms] rounded-sm decoration-2 ${classes}`}>{children}
        </a>
    )
}

export default SpecialLink
