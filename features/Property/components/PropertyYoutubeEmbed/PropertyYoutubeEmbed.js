import { Box } from '@chakra-ui/react';

const PropertyYoutubeEmbed = ({ coverVideo }) => {
	const ratio = (315 / 560) * 100; // Reserves a space on the page for the video to load in so it doesnt jump all over the page
	return (
		<Box paddingTop={`${ratio}%`} position='relative' height='0' overflow='hidden' frameBorder='0'>
			<iframe
				style={{ position: 'absolute', top: 0, bottom: 0 }}
				width='100%'
				height='100%'
				src={`https://www.youtube.com/embed/${coverVideo}`}
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
			/>
		</Box>
	);
};

export default PropertyYoutubeEmbed;
