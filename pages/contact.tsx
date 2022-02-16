import ContactForm from "@/components/ContactForm"
import JobSearchStatus from "@/components/JobSearchStatus"
import Footer from "@/components/Navigation/Footer"
import Navigation from "@/components/Navigation/NavBar"
import PageSubHeading from "@/components/Navigation/PageSubHeading"
import PageContainer from '@/layouts/PageContainer'
import PageSection from "@/layouts/PageSection"
import Head from "next/head"
import Link from "next/link"
const Contact = ({ }) => {
    return (
        <>
            <Head>
                <title>Contact | Ben Gerlovin Portfolio</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <PageContainer>
                <PageSection fullWidth>
                    <PageSubHeading>
                        Have A Question?
                    </PageSubHeading>
                    <p className='text-inter tracking-tight text-gray-600 mb-6 md:text-md'>To recruiters: I am <JobSearchStatus status={'searching'}>looking for a new role</JobSearchStatus>. To everyone else: feel free to get in touch about anything! Always happy to chat :)</p>

                    {/* Contact Form */}
                    <ContactForm />

                    <PageSubHeading classes="mt-16">
                        Freelance Work
                    </PageSubHeading>
                    <p className='text-inter tracking-tight text-gray-600 mb-2 md:text-md'>Occasionally, I'll take on web design projects in my spare time. Right now, I'm <JobSearchStatus status={'not-searching'}>not taking new clients</JobSearchStatus> - you can check back here later for updates. Feel free to look at my <Link href={'/uses'} passHref><a className="text-blue-800 underline hover:text-blue-500 transition-colors duration-200 ease-in-out">Uses</a></Link> page to see what I normally build with.</p>
                </PageSection>
            </PageContainer>
        </>
    )
}

export default Contact
