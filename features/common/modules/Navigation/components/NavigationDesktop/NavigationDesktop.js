import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { HiHomeModern } from 'react-icons/hi2';
import Link from 'next/link';
import { navigationLinks } from '../../navigationConsts';
const NavigationDesktop = () => {
	return (
		<Box
			color='blue.600'
			paddingY='2rem'
			backgroundColor='white'
			display={{ base: 'none', md: 'block' }} // In mobile displays None, but med will display
		>
			<Box maxWidth='1280px' margin='0 auto'>
				<Flex alignItems='center' justifyContent='space-between'>
					<Link href='/'>
						<Box display='flex' gap='2' alignItems='center'>
							<HiHomeModern size='30' />
							<Text fontSize='2xl' fontWeight='black'>
								CASA
							</Text>
						</Box>
					</Link>
					<Flex gap='12' alignItems='center' fontWeight='medium'>
						{navigationLinks.map(
							(
								item // Iterates through the nav consts array and passes the data into the NavigationLink component to display the links and icon if there is one
							) => (
								<NavigationLink key={item.title} {...item} />
							)
						)}
						<Button padding='1.5rem' colorScheme='twitter' fontSize='0.8rem' fontWeight='medium'>
							Create Listing
						</Button>
					</Flex>
				</Flex>
			</Box>
		</Box>
	); // Box is basically a div for Charkra
};

export default NavigationDesktop;

// This component takes in data from the nav consts objects and returns links and displays icon if one and title
const NavigationLink = ({ title, link, icon }) => {
	return (
		<Link href={link}>
			<Flex alignItems='center' gap='0.5rem'>
				{icon}
				{title}
			</Flex>
		</Link>
	);
};
