import ContactForm from "@/components/ContactForm"
import JobSearchStatus from "@/components/JobSearchStatus"
import Footer from "@/components/Navigation/Footer"
import Navigation from "@/components/Navigation/NavBar"
import PageSubHeading from "@/components/Navigation/PageSubHeading"
import PageContainer from '@/layouts/PageContainer'
import PageSection from "@/layouts/PageSection"
const Contact = ({ }) => {
    return (
        <>
            <Navigation />
            <PageContainer>
                <PageSection fullWidth>
                    <PageSubHeading>
                        Have A Question?
                    </PageSubHeading>
                    <p className='text-inter tracking-tight text-gray-600 mb-6 md:text-md'>To recruiters: I am <JobSearchStatus status={'searching'}>looking for a new role</JobSearchStatus>. To everyone else: feel free to get in touch about anything! Always happy to chat :)</p>
                    <ContactForm />
                </PageSection>
            </PageContainer>

            <Footer />
        </>
    )
}

export default Contact
