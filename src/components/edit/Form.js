import { useNavigate, useParams } from "react-router-dom";
import { useEditVideoMutation, useGetVideoQuery } from "../../features/api/apiSlice";
import TextArea from "../ui/TextArea";
import TextInput from "../ui/TextInput";
import { useEffect, useState } from "react";

export default function Form() {
    const { videoId } = useParams();
    const { data: video } = useGetVideoQuery(videoId)
    const [updateVideo, setVideo] = useState({ ...video })
    useEffect(() => {
        setVideo({ ...video })
    }, [video])
    const [editVideo, { isLoading, error }] = useEditVideoMutation()
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (video.id) {
            editVideo({ id: videoId, data: updateVideo })
        }
        navigate(`/videos/${video.id}`)
        console.log({ error });
    }
    return (
        <form action="#" method="POST">
            <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <TextInput onChange={(e) => {
                                setVideo({ ...updateVideo, title: e.target.value })
                            }} title="Video Title" value={updateVideo?.title || ""} />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <TextInput
                                onChange={(e) => {
                                    setVideo({ ...updateVideo, author: e.target.value })
                                }}
                                title="Author" value={updateVideo?.author || ""} />
                        </div>

                        <div className="col-span-6">
                            <TextArea
                                onChange={(e) => {
                                    setVideo({ ...updateVideo, description: e.target.value })
                                }}
                                title="Description" value={updateVideo?.description || ""} />
                        </div>

                        <div className="col-span-6">
                            <TextInput
                                onChange={(e) => {
                                    setVideo({ ...updateVideo, link: e.target.value })
                                }}
                                title="YouTube Video link" value={updateVideo?.link || ""} />
                        </div>

                        <div className="col-span-6">
                            <TextInput
                                onChange={(e) => {
                                    setVideo({ ...updateVideo, thumbnail: e.target.value })
                                }}
                                title="Thumbnail link" value={updateVideo?.thumbnail || ""} />
                        </div>

                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                            <TextInput
                                onChange={(e) => {
                                    setVideo({ ...updateVideo, date: e.target.value })
                                }}
                                title="Upload Date" value={updateVideo?.date || ""} />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <TextInput
                                onChange={(e) => {
                                    setVideo({ ...updateVideo, duration: e.target.value })
                                }}
                                title="Video Duration" value={updateVideo?.duration || ""} />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <TextInput

                                onChange={(e) => {
                                    setVideo({ ...updateVideo, views: e.target.value })
                                }}
                                title="Video no of views" value={updateVideo?.views || ""} />
                        </div>
                    </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                        disabled={isLoading}
                        type="submit"
                        onClick={handleSubmit}
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
                    >
                        {isLoading ? 'Loading' : 'Save'}
                    </button>
                </div>
            </div>
        </form>
    );
}
