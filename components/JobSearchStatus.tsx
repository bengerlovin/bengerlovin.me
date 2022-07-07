type IProps = {
    children?: React.ReactNode;
    status: 'searching' | 'not-searching'
}

const JobSearchStatus = ({ children, status }: IProps) => {

    let message = children ? children : (status === 'searching' ? 'looking for a new role' : 'not looking for a new role')



    return (
        <>
            {status === 'searching' &&
                <span className="inline-flex items-center gap-1 px-1 align-top rounded-md justify-evenly bg-emerald-400/10">
                    <span className="animate-pulse h-1.5 w-1.5 mt-0.5 rounded-full bg-emerald-700"></span>
                    <span className="text-emerald-800">{message}</span>
                </span>
            }

            {status === 'not-searching' &&
                <span className="inline-flex items-center gap-1 px-1 align-top rounded-md justify-evenly bg-red-400/10">
                    <span className="animate-pulse h-1.5 w-1.5 mt-0.5 rounded-full bg-red-700"></span>
                    <span className="text-red-800">{message}</span>
                </span>
            }
        </>
    )
}

export default JobSearchStatus
