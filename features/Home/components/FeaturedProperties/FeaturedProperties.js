import { Box, Text } from '@chakra-ui/react';

const FeaturedProperties = ({ featuredProperties }) => {
	return (
		<Box backgroundColor='blue.50'>
			<Box
				maxWidth='1280px'
				margin='0 auto'
				color='gray.600'
				paddingY={{ base: '3rem', sm: '6rem' }}
			>
				<Text
					fontSize={{ base: '4xl', sm: '5xl' }}
					lineHeight='shorter'
					fontWeight='light'
					paddingX='2rem'
					textAlign='center'
				>
					Discover Our Featured Properties!
				</Text>
			</Box>
		</Box>
	);
};

export default FeaturedProperties;
