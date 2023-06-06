import { Box } from "@chakra-ui/react";
import { MainSection, AboutUs, Services } from "../components";

function Home() {
    return (
        <Box className="flex flex-col gap-20">
            {/* hero section */}
            <MainSection />
            {/* about us section */}
            <AboutUs />
            {/* Services section */}
            <Services />
        </Box>
    );
}

export default Home;
