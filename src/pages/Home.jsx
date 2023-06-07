import { Box } from "@chakra-ui/react";
import {
    MainSection,
    AboutUs,
    Services,
    OurTechnology,
    Footer,
    ContactUs,
} from "../components";

function Home() {
    return (
        <Box className="flex flex-col gap-20">
            {/* hero section */}
            <MainSection />
            {/* about us section */}
            <AboutUs />
            {/* OurTechnology section */}
            <OurTechnology />
            {/* Services section */}
            <Services />
            {/* contact section */}
            <ContactUs />
            {/* Footer section */}
            <Footer />
        </Box>
    );
}

export default Home;
