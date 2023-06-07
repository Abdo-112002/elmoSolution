import { Box } from "@chakra-ui/react";
import {
    MainSection,
    AboutUs,
    Services,
    OurTechnology,
    Footer,
} from "../components";

function Home() {
    return (
        <Box className="flex flex-col gap-20">
            {/* hero section */}
            <MainSection />
            {/* about us section */}
            <AboutUs />
            {/* Services section */}
            <Services />
            {/* OurTechnology section */}
            <OurTechnology />

            {/* Footer section */}
            <Footer />
        </Box>
    );
}

export default Home;
