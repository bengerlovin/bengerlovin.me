type TextProps = {
    children: React.ReactNode;
    classes?: string
    small?: boolean
}

const Text = ({ children, classes, small }: TextProps) => {
    return (
        <p className={`text-gray-600 leading-[1.45] ${small ? 'text-base' : 'text-lg'} tracking-tight ${classes ?? ''}`}>
            {children}
        </p>
    )
}

export default Text
