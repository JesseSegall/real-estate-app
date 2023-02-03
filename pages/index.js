import HeroBanner from '@/features/Home/components/HeroBanner';
import DefaultLayout from '@/features/Layouts/DefaultLayout';

export default function Home() {
	return (
		<>
			<DefaultLayout>
				<HeroBanner />
			</DefaultLayout>
		</>
	);
}
