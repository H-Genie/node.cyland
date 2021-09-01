import { Section } from '../styled/Router';
import { Visitor } from '../Components/CylandRight/Visitor';
import { story1, story2, story3, story4 } from '../Components/CylandRight/storyObj';

const Story = () => {
    document.title = "Story";

    return (
        <Section>
            <Visitor no={1} visitor={story1} notice="true" />
            <Visitor no={2} visitor={story2} />
            <Visitor no={3} visitor={story3} />
            <Visitor no={4} visitor={story4} />
        </Section>
    )
}

export default Story;