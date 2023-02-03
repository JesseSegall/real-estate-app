import { Box, Button, Checkbox, Flex, FormControl, Input, Text } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

const HeroForm = ({}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => console.log(data);
	return (
		<Box width='100%' padding='2rem' borderRadius='small' backgroundColor='white' color='gray.700'>
			<Text fontSize='xl' fontWeight='bold'>
				Free Boar PDF
			</Text>
			<Text fontSize='lg'>Complete the form below to download your guide</Text>
			<form onSubmit={handleSubmit(onSubmit)}>
				<FormControl>
					<Input
						marginTop='1.3rem'
						id='name'
						type='text'
						placeholder='Name'
						{...register('name', { required: true })}
					/>
					<Flex gap={{ base: '0', sm: '1rem' }} flexDirection={{ base: 'column', sm: 'row' }}>
						{errors.name && (
							<Text fontSize='xs' color='red.400'>
								{errors.name.type}
							</Text>
						)}
						<Input
							marginTop='1.3rem'
							id='email'
							type='email'
							placeholder='Email'
							{...register('email', { required: true })}
						/>
						{errors.email && (
							<Text fontSize='xs' color='red.400'>
								{errors.email.type}
							</Text>
						)}
						<Input
							marginTop='1.3rem'
							id='phone'
							type='text'
							placeholder='Phone'
							{...register('phone', { required: true })}
						/>
						{errors.phone && (
							<Text fontSize='xs' color='red.400'>
								{errors.phone.type}
							</Text>
						)}
					</Flex>
					<Checkbox
						marginTop='1.3rem'
						id='consent'
						placeHolder='Consent'
						{...register('consent', { required: true })}
					>
						I consent to having my cheeks clapped
					</Checkbox>
					{errors.consent && (
						<Text fontSize='xs' color='red.400'>
							{errors.consent.type}
						</Text>
					)}
				</FormControl>
				<Button
					type='submit'
					colorScheme='blue'
					width='100%'
					fontSize='xl'
					padding='2rem'
					marginTop='2rem'
				>
					Download Now
				</Button>
			</form>
		</Box>
	);
};

export default HeroForm;
