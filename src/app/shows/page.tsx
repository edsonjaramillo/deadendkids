import { Metadata } from 'next';

import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import ShowCard from '@/components/shows/ShowCard';
// import PageHeader from '@/components/shared/PageHeader';
// import Section from '@/components/shared/Section';
// import Show from '@/components/shows/Show';
import { Show } from '@/types/cms';
import { SEO } from '@/utils/SEO';
import { CMSClient } from '@/utils/cms/CMSClient';

export async function generateMetadata(): Promise<Metadata> {
  return SEO.setMetadata({ title: 'Shows', description: 'Meet Dead End Kids', route: '/shows', index: true });
}

export default async function Page() {
  const shows = await new CMSClient().getShows();
  const previousShows: Show[] = [];
  const upcomingShows: Show[] = [];

  shows.forEach((show) => {
    // if the ending date is in the future, it's an upcoming show
    const endDate = new Date(show.endingTime);
    const now = new Date();
    endDate > now ? upcomingShows.push(show) : previousShows.push(show);
  });

  previousShows.reverse();

  return (
    <>
      <PageHeader
        header="Shows"
        subHeader="Turn up the volume and feel the adrenaline rush of Dead End Kids live shows. Our music is designed to be experienced at high volume, with driving rhythms, infectious hooks, and anthemic choruses that will have you singing along and pumping your fist."
      />
      <Section header="Upcoming Shows">
        {upcomingShows.map((show) => (
          <ShowCard key={show.id} show={show} />
        ))}
      </Section>
      <Section header="Previous Shows">
        {previousShows.map((show) => (
          <ShowCard key={show.id} show={show} isPastShow />
        ))}
      </Section>
    </>
  );
}
