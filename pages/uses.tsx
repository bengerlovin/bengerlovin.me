import Footer from "@/components/Navigation/Footer"
import Navigation from "@/components/Navigation/NavBar"
import PageSubHeading from "@/components/Navigation/PageSubHeading"
import PageContainer from "@/layouts/PageContainer"
import PageSection from "@/layouts/PageSection"
import Head from "next/head"

const Uses = ({ props }) => {
    return (
        <>
            <Head>
                <title>Uses | Ben Gerlovin Portfolio</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <PageContainer>
                <PageSection fullWidth>
                    <PageSubHeading>
                        What I Use For Coding
                    </PageSubHeading>

                    <div>hello from uses page</div>
                </PageSection>
            </PageContainer>
        </>
    )
}

export default Uses
