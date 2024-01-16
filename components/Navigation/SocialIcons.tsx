import { RiGithubLine, RiTwitterLine, RiLinkedinBoxLine } from 'react-icons/ri'

const SocialIcons = ({ classes }: { classes?: string }) => {
    return (
        <>
            <div className={`flex gap-4 items-center justify-start ${classes ?? ''}`}>

                <a href="https://github.com/bengerlovin" target={'_blank'} aria-label='Ben Gerlovin Github'>
                    <RiGithubLine size={22} className={'hover:text-blue-800 transition-all duration-200 ease-in-out'} />
                </a>
                <a href="https://twitter.com/" target={'_blank'} aria-label='Ben Gerlovin Twitter'>
                    <RiTwitterLine size={22} className={'hover:text-blue-800 transition-all duration-200 ease-in-out'} />
                </a>
                <a href="https://www.linkedin.com/in/benjamin-gerlovin/" target={'_blank'} aria-label='Ben Gerlovin LinkedIn'>
                    <RiLinkedinBoxLine size={22} className={'hover:text-blue-800 transition-all duration-200 ease-in-out'} />
                </a>

            </div>
        </>
    )
}

export default SocialIcons
