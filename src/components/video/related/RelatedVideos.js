import { useGetVideosQuery } from "../../../features/api/apiSlice";
import Error from "../../ui/Error";
import RelatedVideoLoader from "../../ui/loaders/RelatedVideoLoader";
import RelatedVideo from './RelatedVideo';
export default function RelatedVideos({ id, title }) {
    const { data: videos, isLoading, isError } = useGetVideosQuery({ id, title });
    let content = null;
    if (isLoading) content = <>
        <RelatedVideoLoader />
        <RelatedVideoLoader />
        <RelatedVideoLoader />
    </>
    if (!isLoading && isError) content = <Error message={'There was an error occured!'} />;
    if (!isLoading && !isError && videos?.length) {
        content = videos.map(video => <RelatedVideo key={video.id} video={video} />)
    }
    return (
        <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
            {
                content
            }
        </div>
    );
}
