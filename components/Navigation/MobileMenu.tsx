import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Spiral as Hamburger } from 'hamburger-react'
import MobileMenuItem from './MobileMenuItem'
import SocialIcons from './SocialIcons'

const MobileMenu = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)


    function toggleMenu() {
        if (isMenuOpen) {
            setIsMenuOpen(false)
            document.body.style.overflow = ''
        }
        else {
            setIsMenuOpen(true)
            document.body.style.overflow = 'hidden'
        }
    }

    useEffect(() => {

        //  cleanup overflow effects from toggleMenu
        return () => {
            if (document) {
                document.body.style.overflow = '';
            }
        }

    }, [])

    return (
        <>
            <Hamburger toggle={toggleMenu} toggled={isMenuOpen} direction='left' size={22} hideOutline={true} distance="sm" label={"Show menu"} />

            {isMenuOpen && (
                <div className='w-full max-w-full'>
                    <ul
                        className='max-w-full shadow-none z-40 flex absolute bg-white h-[100vh] w-full left-0 pt-6 gap-x-2 flex-col gap-y-2 px-8'
                    >
                        {/* About */}
                        <MobileMenuItem>
                            <Link href={'/about'} passHref>
                                <a download className=' tracking-[-0.015em] text-gray-700 group-hover:text-blue-800 transition-colors duration-150 ease-in-out text-[17px]'>About</a>
                            </Link>
                        </MobileMenuItem>

                        {/* Projects - HHT */}
                        <MobileMenuItem>
                            <Link href={'/projects/hht'}>
                                <div className='flex items-center gap-x-3'>
                                    <a download className=' tracking-[-0.015em] text-gray-700 group-hover:text-blue-800 transition-colors duration-150 ease-in-out text-[17px]'>Happy Healthy Techie</a>
                                    <span className='text-blue-800/70 rounded-md px-2 py-1 bg-blue-200/20 text-[11px] tracking-[-0.015em] font-semibold'>PROJECT</span>
                                </div>
                            </Link>
                        </MobileMenuItem>

                        {/* Projects - Speed Scanr */}
                        <MobileMenuItem>
                            <Link href={'/projects/speedscanr'}>
                                <div className='flex items-center gap-x-3'>
                                    <a download className=' tracking-[-0.015em] text-gray-700 group-hover:text-blue-800 transition-colors duration-150 ease-in-out text-[17px]'>Speed Scanr</a>
                                    <span className='text-blue-800/70 rounded-md px-2 py-1 bg-blue-200/20 text-[11px] tracking-[-0.015em] font-semibold'>PROJECT</span>
                                </div>
                            </Link>
                        </MobileMenuItem>

                        {/*  Uses */}
                        <MobileMenuItem>
                            <Link href={'/uses'}>
                                <a download className=' tracking-[-0.015em] text-gray-700 group-hover:text-blue-800 transition-colors duration-150 ease-in-out text-[17px]'>Uses</a>
                            </Link>
                        </MobileMenuItem>

                        {/* Contact */}
                        <MobileMenuItem>
                            <Link href={'/contact'}>
                                <a download className=' tracking-tight text-gray-700 group-hover:text-blue-800 transition-colors duration-150 ease-in-out text-[17px]'>Contact</a>
                            </Link>
                        </MobileMenuItem>

                        {/* Bottom Row With Socials And CV Download */}
                        <div className='flex items-center justify-between mt-5 '>
                            <SocialIcons />
                            <div className='flex items-center gap-x-1.5 group border-[1px] rounded-md border-blue-700 py-1.5 px-3'>
                                <a href='/resume/ben-gerlovin-cv-2022.pdf' target={'_blank'} download className='text-sm tracking-tight text-blue-700 transition-colors duration-150 ease-in-out group-hover:text-blue-800'>Download CV</a>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-[18px] w-[18px] group-hover:text-blue-800 text-blue-700 transition-colors duration-150 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                                </svg>
                            </div>
                        </div>

                    </ul>
                </div>
            )}

        </>
    )
}

export default MobileMenu
