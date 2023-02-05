import FeaturedProperties from '@/features/Home/components/FeaturedProperties';
import HeroBanner from '@/features/Home/components/HeroBanner';
import MeetTheTeam from '@/features/Home/components/MeetTheTeam';
import Partners from '@/features/Home/components/Partners';
import Testimonials from '@/features/Home/components/Testimonials';
import DefaultLayout from '@/features/Layouts/DefaultLayout';

export default function Home({ featuredProperties }) {
	return (
		<>
			<DefaultLayout>
				<HeroBanner />
				<FeaturedProperties featuredProperties={featuredProperties} />
				<MeetTheTeam />
				<Partners />
				<Testimonials />
			</DefaultLayout>
		</>
	);
}

// Fetches data at build time and generates a statically generated page
export async function getStaticProps() {
	const { hits } = require('@/features/data/properties');
	return {
		props: { featuredProperties: hits.slice(0, 5) },
	};
}
