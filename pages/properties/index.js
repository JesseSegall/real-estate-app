import DefaultLayout from '@/features/Layouts/DefaultLayout';
import { Box, SimpleGrid } from '@chakra-ui/react';
import PropertyCard from '@/features/common/modules/PropertyCard';

const Properties = ({ properties }) => {
	return (
		<DefaultLayout>
			<Box backgroundColor='#f7f8f9' padding='3rem'>
				<Box maxWidth='1280px' margin='0 auto'>
					<SimpleGrid columns={{ base: '1', sm: '3' }} gap={{ base: '0', sm: '2rem' }}>
						{properties.map((property) => (
							<PropertyCard key={property.id} {...property} />
						))}
					</SimpleGrid>
				</Box>
			</Box>
		</DefaultLayout>
	);
};
export default Properties;

export async function getStaticProps() {
	const { hits } = require('@/features/data/properties');
	return {
		props: { properties: hits },
	};
}
