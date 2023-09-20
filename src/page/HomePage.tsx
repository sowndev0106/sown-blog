import Intro from "../sections/home/Intro";
import FeaturedPostsSection from "../sections/home/FeaturedPostsSection";
import FeaturedProjectsSection from "../sections/home/FeaturedProjectsSection";
import { styled } from "@mui/styles";
const Root = styled('div')(({ theme }) => ({
    overflowX: "hidden",
}));
export default function HomePage() {

    return (
        <Root>
            <title>Home</title>
            <Intro />
            <FeaturedPostsSection />
            <FeaturedProjectsSection />
        </Root>
    )
}
