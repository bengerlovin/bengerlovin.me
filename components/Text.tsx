type TextProps = {
    children: React.ReactNode;
    classes?: string
}

const Text = ({ children, classes }: TextProps) => {
    return (
        <p className={`text-gray-600 leading-[1.45] text-lg tracking-tight ${classes ?? ''}`}>
            {children}
        </p>
    )
}

export default Text
