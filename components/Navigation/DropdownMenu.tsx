import { Menu, Popover } from '@headlessui/react'
import Link from 'next/link'

const DropdownMenu = ({ children }) => {
    return (
        <>
            <Popover as='div' className={'relative inline-block ring-blue-400 outline-red-300 focus:outline-red-300'}>
                {({ open }) => (
                    <>
                        <Popover.Button>{children}</Popover.Button>
                        <Popover.Panel as='div' className={'mt-1 absolute py-5 px-4 flex flex-col bg-white z-10 rounded-md shadow-soft min-w-max'}>
                            <div className='mb-2'>
                                <Link href={'/projects/hht'} passHref>
                                    <a className='text-base pr-3 pl-1 font-inter tracking-tight text-zinc-900 underline hover:text-blue-700 hover:decoration-blue-700 decoration-white transition-all duration-200' target={'_self'}>Developer Blog</a>
                                </Link>
                            </div>
                            <div>
                                <Link href={'/projects/speedscanr'}>
                                    <a className='text-base pr-3 pl-1 font-inter tracking-tight text-zinc-900 underline hover:text-blue-700 hover:decoration-blue-700 decoration-white transition-all duration-200' target={'_self'}>Speed Scanr</a>
                                </Link>
                            </div>
                        </Popover.Panel>
                    </>
                )}
            </Popover>
        </>
    )
}

export default DropdownMenu
