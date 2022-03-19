import { Menu, Popover } from '@headlessui/react'
import Link from 'next/link'

const DropdownMenu = ({ children, menuItems }: { children: any; menuItems: { href: string, title: string }[] }) => {
    return (
        <>
            <Popover as='div' className={'relative inline-block ring-blue-400 outline-red-300 focus:outline-red-300'}>
                {({ open }) => (
                    <>
                        <Popover.Button>{children}</Popover.Button>
                        <Popover.Panel as='div' className={'mt-1 absolute py-5 px-4 flex flex-col bg-white z-10 rounded-md shadow-soft min-w-max'}>
                            <div className='mb-2'>
                                <Link href={menuItems[0].href} passHref>
                                    <a className='pl-1 pr-3 text-base tracking-tight underline transition-all duration-200 font-inter text-zinc-900 hover:text-blue-700 hover:decoration-blue-700 decoration-white' target={'_self'}>{menuItems[0].title}</a>
                                </Link>
                            </div>
                            <div>
                                <Link href={menuItems[1].href}>
                                    <a className='pl-1 pr-3 text-base tracking-tight underline transition-all duration-200 font-inter text-zinc-900 hover:text-blue-700 hover:decoration-blue-700 decoration-white' target={'_self'}>{menuItems[1].title}</a>
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
