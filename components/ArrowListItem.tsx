import Text from "./Text";

type ListItemProps = {
    children: React.ReactNode;
}

const ArrowListItem = ({ children }: ListItemProps) => {
    return (
        <>
            <li className='relative pb-0 pl-12 my-4 text-lg tracking-tight text-gray-700 md:text-lg arrow-list-item list-item'>
                {children}
            </li>
        </>
    )
}

export default ArrowListItem
