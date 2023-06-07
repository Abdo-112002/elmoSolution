import {
    Flex,
    FormControl,
    FormLabel,
    Input,
    Textarea,
} from "@chakra-ui/react";
import React from "react";

function ContactForm() {
    return (
        <>
            <Flex flexDir={"column"} gap={"20px"}>
                <div className="flex items-center gap-5 sm:flex-col md:flex-row">
                    <FormControl isRequired>
                        <FormLabel>First name</FormLabel>
                        <Input placeholder="First name" />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Last name</FormLabel>
                        <Input placeholder="Last name" />
                    </FormControl>
                </div>
                <FormControl>
                    <FormLabel>Subject</FormLabel>
                    <Input placeholder="Subject.." />
                </FormControl>
                <FormControl>
                    <Textarea placeholder="Write A Message" />
                </FormControl>
                <button className="hero__info--btn contactUs__form--btnSend">
                    Send Message
                </button>
            </Flex>
        </>
    );
}

export default ContactForm;
