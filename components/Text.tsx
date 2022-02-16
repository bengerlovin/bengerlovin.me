type TextProps = {
    children: React.ReactNode;
    classes?: string
}

const Text = ({ children, classes }: TextProps) => {
    return (
        <p className={`text-inter tracking-tight text-gray-600 md:text-md ${classes ?? ''}`}>
            {children}
        </p>
    )
}

export default Text
