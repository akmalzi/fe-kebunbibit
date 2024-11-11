import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Diskusi from "../data/dummy/diskusi-list.json";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DetailDiskusi from "../components/DiskusiDetail";
import Reply from "../data/dummy/diskusi-reply-list.json";
import DiskusiReply from "../components/DiskusiReply";

function DetailForum() {
    const { parameter } = useParams();

    const detailDiskusi = Diskusi.filter((value) => value.slug === parameter);

    if (detailDiskusi.length === 0) {
        return (
            <div>
                <h1>404 Not Found</h1>
            </div>
        );
    }

    const reply = Reply.filter((value) => value.diskusi_id === detailDiskusi[0].id);

    return (
        <>
            <Navbar />
            <section className="mb-12 px-16 animate-fade-in">
                <Link to={"/forum"} className="
                        text-primaryColor
                        text-2xl
                        hover:text-primaryColor
                        hover:underline
                        flex items-center
                        my-4
                    ">
                    <svg
                        className="size-5 fill-current text-primaryColor font-bold"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"><g
                            id="Back"
                        >
                            <path d="M14.5,22a1,1,0,0,1-.71-.29l-9-9a1,1,0,0,1,0-1.42l9-9a1,1,0,1,1,1.42,1.42L6.91,12l8.3,8.29a1,1,0,0,1,0,1.42A1,1,0,0,1,14.5,22Z" /></g>
                    </svg>
                    Forum Diskusi
                </Link>
                <DetailDiskusi
                    photo={detailDiskusi[0].photo}
                    nama={detailDiskusi[0].nama}
                    created_at={detailDiskusi[0].created_at}
                    judul={detailDiskusi[0].judul}
                    deskripsi={detailDiskusi[0].deskripsi}
                    reply_count={detailDiskusi[0].reply_count}
                    tags={detailDiskusi[0].tags}
                />
                <div className="mt-4 mb-2 p-4 rounded-md shadow-md border-[1px] border-gray-300">
                    <form id="replyDiskusi" action="">
                        <textarea
                            rows={5}
                            className="w-full"
                            name="reply"
                            id="replyDiskusi"
                            placeholder="Tulis Komentar Anda..."
                            style={{ resize: "none" }}
                        >
                        </textarea>
                    </form>
                </div>
                <div className="w-full flex justify-end">
                    <button 
                        form="replyDiskusi"
                        className="transition-colors bg-primaryColor hover:bg-hoverPrimaryColor text-white rounded-md px-4 py-2 mt-2"
                        type="submit"
                    >
                        Kirim Pesan
                    </button>
                </div>
                <h3 className="text-xl text-primaryColor my-4">
                    Komentar
                </h3>
                <div className="flex flex-col gap-y-4">
                    {reply.map((value, index) => (
                        <DiskusiReply
                            key={index}
                            photo={value.photo}
                            name={value.name}
                            created_at={value.created_at}
                            comment={value.comment}
                        />
                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
}

export default DetailForum;