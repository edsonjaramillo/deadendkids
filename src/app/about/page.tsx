import BandMemberBio from '@/components/about/BandMemberBio';
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import { CMSClient } from '@/utils/cms/CMSClient';

export default async function AboutPage() {
  const bandMembers = await new CMSClient().getBandMembers();

  return (
    <>
      <PageHeader
        header="About Us"
        subHeader="Raw, Rebellious, and Ready to Rock: Meet Dead End Kids, the Ferocious Five-Piece Delivering High-Energy Punk Anthems."
      />
      <Section header="Meet the Band">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {bandMembers.map((bandMember) => (
            <BandMemberBio key={bandMember.id} bandMember={bandMember} />
          ))}
        </div>
      </Section>
    </>
  );
}
