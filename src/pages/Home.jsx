import { Box } from "@chakra-ui/react";
import { MainSection, AboutUs } from "../components";

function Home() {
    return (
        <Box className="flex flex-col gap-20">
            {/* hero section */}
            <MainSection />
            <AboutUs />
        </Box>
    );
}

export default Home;
