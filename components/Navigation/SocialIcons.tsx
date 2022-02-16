import { RiLinkedinFill, RiGithubLine, RiTwitterLine, RiLinkedinBoxLine } from 'react-icons/ri'

const SocialIcons = () => {
    return (
        <>
            <div className="flex gap-4 items-center justify-start">

                <a href="https://github.com/bengerlovin" target={'_blank'}>
                    <RiGithubLine size={22} />
                </a>
                <a href="https://twitter.com/BenGerlovin" target={'_blank'}>
                    <RiTwitterLine size={22} />
                </a>
                <a href="https://www.linkedin.com/in/benjamin-gerlovin/" target={'_blank'}>
                    <RiLinkedinBoxLine size={22} />
                </a>

            </div>
        </>
    )
}

export default SocialIcons
