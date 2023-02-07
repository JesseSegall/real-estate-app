import ContactForm from '@/features/common/modules/ContactForm';
import TextContentBox from '@/features/common/modules/TextContentBox';
import DefaultLayout from '@/features/Layouts/DefaultLayout';
import { Box, Grid, GridItem, Text } from '@chakra-ui/react';

const ContactPage = ({}) => {
	return (
		<DefaultLayout>
			<Box backgroundColor='#f7f8f9' paddingY='3rem'>
				<Grid templateColumns='repeat(6,1fr)' gap='5' maxWidth='1280px' margin='0 auto'>
					<GridItem colSpan={{ base: 6, sm: 4 }}>
						<TextContentBox title='Contact Us'>{<ContactForm />}</TextContentBox>
					</GridItem>
					<GridItem colSpan={{ base: 6, sm: 2 }}>
						<TextContentBox title='For Inquiries Contact: '>
							<Text fontWeight='light' color='gray.600' fontSize='1rem' marginBottom='1rem'>
								Jimmy Jones <br />
								Public Relations Manager <br />
								1234 Wallaby Ln Boulder, CO
							</Text>
							<Text fontWeight='light' color='gray.600' fontSize='1rem'>
								Sam Appleton <br />
								Public Relations Manager <br />
								1234 Wallaby Ln Boulder, CO
							</Text>
						</TextContentBox>
					</GridItem>
				</Grid>
			</Box>
		</DefaultLayout>
	);
};

export default ContactPage;
