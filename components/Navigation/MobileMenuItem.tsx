const MobileMenuItem = ({ children }: { children?: React.ReactNode }) => {
    return (
        <li>
            <div className="border-b-[1px] py-4">
                {children ?? 'Menu Item'}
            </div>
        </li>
    )
}

export default MobileMenuItem
