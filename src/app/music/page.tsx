import MusicCard from '@/components/music/MusicCard';
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import { CMSClient } from '@/utils/cms/CMSClient';

export default async function Page() {
  const client = new CMSClient();
  const aPromise = client.getAlbums();
  const sPromise = client.getSingles();

  const [albums, singles] = await Promise.all([aPromise, sPromise]);

  return (
    <>
      <PageHeader
        header="Music"
        subHeader="Join the movement of fans who love our raw and powerful music. Stream our latest release and experience the power of punk rock."
      />
      {albums.length > 0 && (
        <Section header="Albums">
          <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-3 xl:grid-cols-4">
            {albums.map((album) => (
              <MusicCard
                key={album.id}
                title={album.title}
                releaseDate={album.releaseDate}
                image={album.albumCover}
                url={album.url}
              />
            ))}
          </div>
        </Section>
      )}
      <Section header="Singles">
        <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-3 xl:grid-cols-4">
          {singles.map((single) => (
            <MusicCard
              key={single.id}
              title={single.title}
              releaseDate={single.releaseDate}
              image={single.singleCover}
              url={single.url}
            />
          ))}
        </div>
      </Section>
      {/* <Section header="Music Videos">
        <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-3 xl:grid-cols-4">
          <MusicVideoCard />
          <MusicVideoCard />
          <MusicVideoCard />
          <MusicVideoCard />
          <MusicVideoCard />
        </div>
      </Section> */}
    </>
  );
}
