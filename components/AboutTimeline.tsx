import Image from "next/image"
import Text from "./Text"
import TimelineItem from "./TimelineItem"
import merckOffices from '../public/images/merck-kennilworth.jpeg'
import montreal from '../public/images/downtown-montreal.jpg'
import hht from '../public/images/hht-screenshot.png'
import JobSearchStatus from "./JobSearchStatus"
import Link from "next/link"

const AboutTimeline = ({ }) => {
    return (
        <>

            <ul className="relative">
                <li className="timeline-list-item">
                    <TimelineItem title="Discovering Programming" date="September, 2018">
                        <Text classes="mb-2">At my best friend's request, I take an introductory computer science course in Java. I don't think I'll enjoy it (spoilers, I do) since  I'm mostly there to hang out with my friends in computer science degrees. </Text>

                        <Text classes="mb-3">I write my first "Hello World" program and grow to appreciate computer science. At this point, I declare my degree as Bio-Organic Chemistry and decide to pursue more CS courses as electives. </Text>
                    </TimelineItem>
                </li>
                <li className="timeline-list-item">
                    <TimelineItem title="Pursuing Chemistry" date="May 2019">
                        <Text classes="mb-2">I'm accepted into a prestigious pharmaceutical internship at Merck's headquarters in Kennilworth. I pack my bags and move to New Jersey for the summer of 2019. </Text>

                        <div className="flex flex-col w-full py-2 mt-4 mb-3 md:p-2">
                            <Image className="rounded-lg shadow-soft" height={500} width={1000} layout='responsive' alt='Mercks Kenilworth Offices' placeholder='blur' src={merckOffices}></Image>
                            <caption className="mt-3 text-sm italic tracking-tight text-gray-600">Merck's offices in Kennilworth, NJ - my home for the summer of 2019</caption>
                        </div>

                        <Text classes="mb-3"> I get to work with incredible chemists in Merck's Drug Discovery division, and meet with several professors in New York whose labs I plan on applying to in the fall for PhD programs.</Text>

                    </TimelineItem>
                </li>
                <li className="timeline-list-item">
                    <TimelineItem title="Deciding Against A PhD" date="September 2019">
                        <Text classes="mb-2">Having finished my internship at Merck, I come to a crossroads. I feel grateful for my experiences in chemistry, but I can't shake the feeling that I don't want to work in another lab for 5 years, the average length of a PhD program.</Text>

                        <Text classes="mb-3"> I decide to give myself a year to pursue tech as an alternative and see if I like working as a developer more than as a chemist.</Text>

                    </TimelineItem>
                </li>
                <li className="timeline-list-item">
                    <TimelineItem title="Going All In On Tech" date="October 2019">
                        <Text classes="mb-2">I use the rest of my senior year in college (2019-2020) to learn as much as I can about web development and apply to tech jobs.</Text>

                        <Text classes="mb-2">I learn the essentials of JavaScript, HTML, and CSS, as well as more advanced concepts like software design patterns, unit testing, backend technologies (Spring/Hibernate for Java).</Text>

                        <Text classes="mb-3"> After several rounds of interviews in the spring of 2020, I get an offer to work as a full-stack developer at <a target="_blank" href="https://www.sponsor.com" className="text-blue-800 underline transition-colors duration-200 ease-in-out hover:text-blue-400">Sponsorium, Inc</a>.</Text>

                    </TimelineItem>
                </li>
                <li className="timeline-list-item">
                    <TimelineItem title="Starting My First Developer Role" date="May 2020">
                        <Text classes="mb-2">In late spring 2020, I start a full-stack developer role in Montréal, the city where I went to college.</Text>

                        <div className="flex flex-col w-full py-2 mt-4 mb-3 md:p-2">
                            <Image className="rounded-lg" height={500} width={1000} layout='responsive' placeholder='blur' src={montreal} alt="montreal downtown"></Image>
                            <caption className="mt-3 text-sm italic tracking-tight text-gray-600">I may be biased, but I think Montréal is one of the most beautiful and fun cities to exist and I was glad to start my tech career here</caption>
                        </div>

                        <Text classes="mb-3">I was hired to help build the new version of my company's software, meaning a modern tech stack (Vue.js and Java) and a completely refreshed UI. Full-stack paradise! </Text>

                    </TimelineItem>
                </li>
                <li className="timeline-list-item">
                    <TimelineItem title="Moving Forward With Tech And Sharing What I Know" date="May 2021">
                        <Text classes="mb-2">Once I got the hang of my tech job, I didn't look back. I knew I liked software development more than I did chemistry, and I was thankful I took the leap to try something new.</Text>

                        <Text classes="mb-3">Still, going from a hard-science degree to a tech job without any internhip experience was stressful, to say the least. I wanted to share what I discovered from the journey so that other people in a similar situation could know what to expect. </Text>


                        <Text classes="mb-2">
                            And so, my <a target="_blank" href="https://happyhealthytechie.com" className="text-blue-800 underline transition-colors duration-200 ease-in-out hover:text-blue-400">developer blog</a> was born.
                        </Text>

                        <a target="_blank" href="https://happyhealthytechie.com" className="flex flex-col w-full py-2 mt-4 mb-5 transition-colors duration-200 ease-in-out border-[2.5px] border-white rounded-md shadow-soft-small md:p-2 hover:border-blue-500 cursor-pointer">
                            <Image className="rounded-lg" height={1000} width={1500} layout='responsive' placeholder='blur' src={hht} alt="montreal downtown"></Image>

                        </a>


                        <Text classes="mb-2">
                            The name, Happy Healthy Techie, comes from the fact that I also wanted to write about health and fitness (something I will drone on about to no end unless someone stops me).
                        </Text>

                        <Text classes="mb-5">
                            Eventually, I decided to go full-blast on tech-related articles to share what it was like landing my first tech job and what I do now as a developer.
                        </Text>


                    </TimelineItem>
                </li>
                <li className="timeline-list-item">
                    <TimelineItem title="What I'm Up To Now" date="June 2022">
                        <Text classes="mb-2">I've started a new job at Google Montréal working on WebProtect, a security service offered within the Chrome Enterprise product family. To any developers (or soon-to-be developers) based in Montréal, feel free to reach out! I'm always open to chat :)</Text>

                    </TimelineItem>
                </li>

            </ul>
        </>
    )
}

export default AboutTimeline
