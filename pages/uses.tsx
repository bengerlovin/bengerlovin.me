import Footer from "@/components/Navigation/Footer"
import Navigation from "@/components/Navigation/NavBar"
import PageSubHeading from "@/components/Navigation/PageSubHeading"
import PageContainer from "@/layouts/PageContainer"
import PageSection from "@/layouts/PageSection"

const Uses = ({ props }) => {
    return (
        <>
            <Navigation />
            <PageContainer>
                <PageSection fullWidth>
                    <PageSubHeading>
                        What I Use For Coding
                    </PageSubHeading>

                </PageSection>
            </PageContainer>

            <Footer />
        </>
    )
}

export default Uses
