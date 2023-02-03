import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { HiHomeModern } from 'react-icons/hi2';
import { services, about, ourOffices, workWithUs } from './footerConsts';

const Footer = () => {
	return (
		<Box backgroundColor='blue.600'>
			<Box
				maxWidth='1280px'
				margin='0 auto'
				paddingY='3rem'
				paddingX={{ base: '2rem', sm: '2rem' }}
			>
				<SimpleGrid columns='4' color='whiteAlpha.700' gap='1.7rem' minChildWidth='150px'>
					<Flex flexDirection='column'>
						<FooterHeader title='Services' />
						{services.map((item) => (
							<FooterLink key={item.name} {...item} />
						))}
					</Flex>
					<Flex flexDirection='column'>
						<FooterHeader title='About' />
						{about.map((item) => (
							<FooterLink key={item.name} {...item} />
						))}
					</Flex>
					<Flex flexDirection='column'>
						<FooterHeader title='Our Offices' />
						{ourOffices.map((item) => (
							<FooterLink key={item.name} {...item} />
						))}
					</Flex>
					<Flex flexDirection='column'>
						<FooterHeader title='Work With Us' />
						{workWithUs.map((item) => (
							<FooterLink key={item.name} {...item} />
						))}
					</Flex>
				</SimpleGrid>
			</Box>
			<Box
				backgroundColor='blue.900'
				display='flex'
				padding='2rem'
				justifyContent='center'
				alignItems='center'
				flexDirection='column'
				color='white'
			>
				<Box display='flex' gap='2' alignItems='center'>
					<HiHomeModern />
					<Text fontSize='lg' fontWeight='black'>
						CASA
					</Text>
				</Box>
				<Text marginTop='1rem' fontSize='xs' textAlign='center'>
					All rights reserved - Copyright CASA
				</Text>
			</Box>
		</Box>
	);
};

export default Footer;

const FooterLink = ({ name, link }) => {
	return (
		<Text>
			<Link href={link}>{name}</Link>
		</Text>
	);
};

const FooterHeader = ({ title }) => {
	return (
		<Text as='h4' fontWeight='light' fontSize='xl' marginBottom='1rem'>
			{title}
		</Text>
	);
};
