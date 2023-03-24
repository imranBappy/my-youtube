import { useGetVideosQuery } from "../../features/api/apiSlice";
import Error from "../ui/Error";
import VideoLoader from "../ui/loaders/VideoLoader";
import Video from "./Video";

export default function Videos() {
    const { data: videos, isError, isLoading, error } = useGetVideosQuery();
    let content = null;
    if (isLoading) content = <>
        <VideoLoader />
        <VideoLoader />
        <VideoLoader />
        <VideoLoader />
    </>;
    if (isError) content = <Error message={error} />;
    if (videos) content = videos.map((video) => <Video key={video.id} video={video} />);
    return content;
}
