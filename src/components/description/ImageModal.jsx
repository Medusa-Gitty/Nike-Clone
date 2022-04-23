import { Box, Grid, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";

export const ImageModal = ({ img }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Grid templateColumns={["repeat(2, 1fr)"]} gap={"10px"}>
                {img.map((e, i) => (
                    <Box key={i}>
                        <Image src={e} onClick={onOpen} cursor={'pointer'} />
                    </Box>
                ))}
            </Grid>

            <Modal isOpen={isOpen} onClose={onClose} size={'full'} >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader />
                    <ModalCloseButton />
                    <ModalBody>
                        <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']} gap={'15px'} >
                            {img.map((e, i) => (
                                <Image key={i} w={'100%'} src={e} />
                            ))}
                        </Grid>
                    </ModalBody>
                    <ModalFooter />
                </ModalContent>
            </Modal>
        </>
    );
};

