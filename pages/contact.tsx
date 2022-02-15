import ContactForm from "@/components/ContactForm"
import Footer from "@/components/Navigation/Footer"
import Navigation from "@/components/Navigation/NavBar"
import PageContainer from '@/layouts/PageContainer'
import PageSection from "@/layouts/PageSection"
const Contact = ({ }) => {
    return (
        <>
            <Navigation />
            <PageContainer>
                <PageSection fullWidth>
                    <ContactForm />
                </PageSection>
            </PageContainer>

            <Footer />
        </>
    )
}

export default Contact
