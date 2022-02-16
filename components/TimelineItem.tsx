import Text from "./Text"
import TimelineHeading from "./TimelineHeading";
import { RiTimeLine } from 'react-icons/ri'

type TimelineItemProps = {
    children: React.ReactNode;
    date: string;
    title: string;
}

const TimelineItem = ({ children, date, title }: TimelineItemProps) => {
    return (
        <>
            <div className="flex flex-col items-start justify-center">

                <TimelineHeading title={title ?? ''} />
                <div className="flex gap-x-1 items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.h-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className='text-gray-500 font-inter tracking-tight text-sm'>{date}</span>
                </div>

                <>
                    {children}
                </>


            </div>
        </>
    )
}

export default TimelineItem
