// import Success from "../ui/Success";
import { useEffect, useState } from "react";
import TextArea from "../ui/TextArea";
import TextInput from "../ui/TextInput";
import { useAddVideoMutation } from "../../features/api/apiSlice";
import { useNavigate } from "react-router-dom";

export default function Form() {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [description, setDescription] = useState("")
    const [link, setLink] = useState("")
    const [thumbnail, setThumbnail] = useState("")
    const [date, setDate] = useState("")
    const [duration, setDuration] = useState("")
    const [views, setViews] = useState("")
    const [addVideo, { isLoading, isSuccess, isError }] = useAddVideoMutation()
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/')
    }, [isSuccess])
    const handleSubmit = (e) => {
        e.preventDefault()
        addVideo({
            title, author, description, link, thumbnail, date, duration, views
        })

    }
    return (
        <form onSubmit={handleSubmit} method="POST">
            <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <TextInput value={title} onChange={(e) => setTitle(e.target.value)} title="Video Title" />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <TextInput value={author} onChange={(e) => setAuthor(e.target.value)} title="Author" />
                        </div>

                        <div className="col-span-6">
                            <TextArea value={description} onChange={(e) => setDescription(e.target.value)} title="Description" />
                        </div>

                        <div className="col-span-6">
                            <TextInput value={link} onChange={(e) => setLink(e.target.value)} title="YouTube Video link" />
                        </div>

                        <div className="col-span-6">
                            <TextInput value={thumbnail} onChange={(e) => setThumbnail(e.target.value)} title="Thumbnail link" />
                        </div>

                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                            <TextInput value={date} onChange={(e) => setDate(e.target.value)} title="Upload Date" />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <TextInput value={duration} onChange={(e) => setDuration(e.target.value)} title="Video Duration" />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <TextInput value={views} onChange={(e) => setViews(e.target.value)} title="Video no of views" />
                        </div>
                    </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
                    >
                        Save
                    </button>
                </div>

                {/* <Success message="Video was added successfully" /> */}
            </div>
        </form>
    );
}
