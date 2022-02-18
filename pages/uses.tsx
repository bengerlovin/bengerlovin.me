import ArrowListItem from "@/components/ArrowListItem"
import Footer from "@/components/Navigation/Footer"
import Navigation from "@/components/Navigation/NavBar"
import PageSubHeading from "@/components/Navigation/PageSubHeading"
import Text from "@/components/Text"
import TimelineHeading from "@/components/TimelineHeading"
import PageContainer from "@/layouts/PageContainer"
import PageSection from "@/layouts/PageSection"
import Head from "next/head"
import Link from "next/link"

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
                        Coding Tools I Build With
                    </PageSubHeading>

                    <Text>I've sampled a lot of different technologies since I began coding, and developed (pun intended) a few preferred tools. Here's a not-so-exhaustive list of the things I use to build web apps.</Text>
                </PageSection>

                <PageSection margin='mt-8'>
                    <TimelineHeading title="Frameworks" />
                    <ul>
                        <ArrowListItem>
                            <span><b>React</b></span> - my tool of choice for most projects. I love the flexibility and extensibility React provides, and how it's fundamentally a UI framework. All of my side-projects use it, typically also paired with Next.js.
                        </ArrowListItem>

                        <ArrowListItem>
                            <span><b>Vue.js</b></span> - I've been using Vue for about 2 years now at my current job, and it's been a fantastic experience so far. I've built a large section of my current company's next software product, and Vue has definitely streamlined this with their Composition API and two-way data binding features.
                        </ArrowListItem>

                        <ArrowListItem>
                            <span><b>Next.js</b></span> - the best website/webapp framework in my opinion. Next makes it so easy and fast to bootstrap a new project, I find myself gravitating towards it for all of my React projects these days (including this site!) - even more so than create-react-app.
                        </ArrowListItem>

                    </ul>
                </PageSection>

                <PageSection margin='mt-8'>
                    <TimelineHeading title="Libraries And Miscellaneous" />
                    <ul>
                        <ArrowListItem>
                            <span><b>Framer Motion</b></span> - all my animations and page-loading effects are handled by Framer Motion. Such a great library and amazing documentation, they really make it easy to craft beautiful animations quickly.
                        </ArrowListItem>

                        <ArrowListItem>
                            <span><b>TailwindCSS</b></span> - my all-time favorite CSS helper library, hands down. <a target="_blank" href="https://tailwindcss.com/" className="text-blue-800 underline hover:text-blue-400">Tailwind</a> is an API for style, meaning that it provides helper classes that eventually resolve to vanilla-CSS classes, i.e. <code className="text-[17px] tracking-tight text-pink-500 rounded-sm bg-gray-200/30">mt-1</code> represents a class with a <code className="text-[17px] tracking-tight text-pink-500 rounded-sm bg-gray-200/30">margin-top</code> property set to 4px (since each unit in Tailwind is multiplied by 4). Tailwind has forced me to really appreciate how powerful CSS is since it doesn't really sugarcoat anything - you're basically still using vanilla CSS.
                        </ArrowListItem>

                        <ArrowListItem>
                            <span><b>Firebase</b></span> - my go-to for authentication and data storage. It's great for small apps and proof-of-concepts because of its NoSQL design. If I find that I need a relational database setup, I can always turn to Prisma.
                        </ArrowListItem>

                        <ArrowListItem>
                            <span><b>Formik</b></span> - handles validation and submission logic for forms. Great features with minimal set-up, perfect for contact forms (like the one on my <Link passHref href={'/contact'}><a target="_blank" className="text-blue-800 underline hover:text-blue-400">Contact page</a></Link>)
                        </ArrowListItem>

                        <ArrowListItem>
                            <span><b>Jest</b></span> - no BS testing framework that I use to validate functions and "business logic". Nothing feels better than seeing all green when you do <code className="text-[17px] tracking-tight text-pink-500 rounded-sm bg-gray-200/30">npm run test</code>.
                        </ArrowListItem>

                    </ul>
                </PageSection>

                <PageSection margin='mt-8'>
                    <TimelineHeading title="My Gear" />
                    <ul className="pl-6 mt-2 list-disc marker:text-gray-300">
                        <li className="pl-2 mb-3 text-lg tracking-tight text-gray-700">
                            <span>Dell XPS 15, 2020 Model</span>
                        </li>

                        <li className="pl-2 mb-3 text-lg tracking-tight text-gray-700">
                            <span>AirPods Pro (noise-cancelling is a life-saver if you have cats)</span>
                        </li>

                        <li className="pl-2 mb-3 text-lg tracking-tight text-gray-700">
                            <span>Logitech Triathlon Mouse</span>
                        </li>

                        <li className="pl-2 mb-3 text-lg tracking-tight text-gray-700">
                            <span>Keychron K3 Keyboard</span>
                        </li>
                        <li className="pl-2 mb-3 text-lg tracking-tight text-gray-700">
                            <span>HP 32" Full HD Monitor (2UD96AA)</span>
                        </li>


                    </ul>
                </PageSection>
            </PageContainer>
        </>
    )
}

export default Uses
