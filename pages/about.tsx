import AboutTimeline from '@/components/AboutTimeline'
import PageSubHeading from '@/components/Navigation/PageSubHeading'
import Text from '@/components/Text'
import Head from 'next/head'
import PageContainer from '../layouts/PageContainer'

const About = () => {
    return (
        <>
            <Head>
                <title>About | Ben Gerlovin Portfolio</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <PageContainer>
                <PageSubHeading>
                    About Me
                </PageSubHeading>
                <Text classes='mb-10'>I've had a twisting journey to get to my current job as a full-stack developer. I've made a little timeline below that covers all the steps I took to get to where I am, starting with my first computer science course in university.</Text>

                <AboutTimeline />

            </PageContainer>
        </>
    )
}

export default About