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
                <Text classes='mb-2'>I've had a winding path to get to my current job as a full-stack developer, espcially since I come from a background in organic chemistry and working in pharmaceutical companiess. </Text>

                <Text classes='mb-10'>
                    I've made this little timeline to summarize my journey, starting with my first CS elective course in college.
                </Text>

                <AboutTimeline />

            </PageContainer>
        </>
    )
}

export default About