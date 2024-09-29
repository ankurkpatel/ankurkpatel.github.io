import MarkdownDisplay from "../MarkdownDisplay";
import landingPageContent from '../mdFiles/LP.md?raw'

export default function Home() {
    return <MarkdownDisplay content={landingPageContent} />;
}