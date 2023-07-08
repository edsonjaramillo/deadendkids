import JSONLDScript from '@/components/shared/seo/JSONLDScript';
import { Show } from '@/types/cms';
import { JSONLD } from '@/utils/JSONLD';
import { ShowFmt } from '@/utils/ShowFmt';

type ShowCardProps = {
  show: Show;
  isPastShow?: boolean;
};

export default function ShowCard({ show, isPastShow }: ShowCardProps) {
  const showFmt = new ShowFmt();
  const { startDate, dayOfWeekAndTime } = showFmt.getEventFields(show);
  const cityState = showFmt.getCityState(show);
  const jsonld = JSONLD.getMusicEvent(show);
  return (
    <>
      <JSONLDScript data={jsonld} />
      <article className={'flex py-2 w-full' + (isPastShow && ' line-through')}>
        {/* left side date info */}
        <div className="flex min-w-[7rem] sm:min-w-[8rem] flex-col text-xs sm:text-sm">
          <span className="font-semibold">{startDate}</span>
          <span className="">{dayOfWeekAndTime}</span>
        </div>

        {/* middle location & artist */}
        <div className="flex flex-col">
          <h3 className="text-sm font-bold sm:text-base line-clamp-1">{show.title}</h3>
          <span className="text-xs sm:text-sm line-clamp-1">{show.destination.name}</span>
          <span className="text-xs text-base-400 sm:text-sm line-clamp-1">{cityState}</span>
        </div>

        {/* right side ticket info and website infor */}

        <div className="flex flex-col md:flex-row gap-1 ml-auto">
          {!isPastShow && show.ticketsUrl && (
            <a
              rel="noopener nofollow noreferrer external"
              target="_blank"
              href={show.ticketsUrl}
              className="animate btn-responsive my-auto ml-auto self-start bg-primary-600 hover:bg-primary-700 px-2 py-1 sm:px-2.5 sm:py-1.5 break-keep">
              Tickets
            </a>
          )}
          {!isPastShow && show.moreInfoUrl && (
            <a
              rel="noopener nofollow noreferrer external"
              target="_blank"
              href={show.moreInfoUrl}
              className="animate btn-responsive my-auto ml-2 self-start bg-blue-600 hover:bg-blue-700 px-2 py-1 sm:px-2.5 sm:py-1.5 line-clamp-1">
              More Info
            </a>
          )}
        </div>
      </article>
    </>
  );
}
