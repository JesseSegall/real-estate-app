import { usePropertyFormat } from '../../Hooks/usePropertyFormat';

const PropertyCard = (property) => {
	const {
		address,
		coverPhoto,
		propertyType,
		price,
		title,
		rooms,
		baths,
		purpose,
		sqSize,
		externalID,
	} = usePropertyFormat(property);

	return (
		<>
			<>{address}</>
		</>
	);
};

export default PropertyCard;
