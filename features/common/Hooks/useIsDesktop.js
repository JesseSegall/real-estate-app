import { useEffect, useState } from 'react';

export const useIsDesktop = () => {
	const [isDesktop, setIsDesktop] = useState(null);
	useEffect(() => {
		if (window.innerWidth > 1080) {
			setIsDesktop(true);
		} else {
			setIsDesktop(false);
		}

		const updateMedia = () => {
			if (window.innerWidth > 1080) {
				setIsDesktop(true);
			} else {
				setIsDesktop(false);
			}
		};

		window.addEventListener('resize', updateMedia);
		return () => window.removeEventListener('resize', updateMedia);
	}, []);

	return { isDesktop };
};
