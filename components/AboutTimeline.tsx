import Text from "./Text"
import TimelineItem from "./TimelineItem"

const AboutTimeline = ({ }) => {
    return (
        <>

            <ul className="relative">
                <li className="timeline-list-item">
                    <TimelineItem title="Discovering Programming" date="September, 2018">
                        <Text classes="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus risus at ultrices mi. Adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum.</Text>

                        <Text> Amet consectetur adipiscing elit ut aliquam. Orci eu lobortis elementum nibh tellus molestie. </Text>
                    </TimelineItem>
                </li>
                <li className="timeline-list-item">
                    <TimelineItem title="Discovering Programming" date="March 2019">
                        <Text classes="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus risus at ultrices mi. Adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum.</Text>

                        <Text> Amet consectetur adipiscing elit ut aliquam. Orci eu lobortis elementum nibh tellus molestie. </Text>

                    </TimelineItem>
                </li>
            </ul>
        </>
    )
}

export default AboutTimeline
