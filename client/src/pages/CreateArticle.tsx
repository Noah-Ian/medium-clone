import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createArticle } from "../api/article.api";

function CreateArticle(){
    const navigate =useNavigate();

    const[form,setForm] = useState({
        title:"",
        content:"",
        coverImage:""
    });

    async function handleSubmit(
        e:React.SubmitEvent
    ){
        e.preventDefault();

        const article = await createArticle(form);

        navigate(
            `/articles/${article.id}`
        );
    }

    return(
        <div className="max-w-3xl mx-auto mt-10">
            <form
            onSubmit={handleSubmit}
            className="space-y-6"
            >

            <h1 className="text-4xl font-bold">
                Write Article
            </h1>

            <input
            className="border p-3 w-full text-2xl"
            placeholder="Article Title"
            value={form.title}

            onChange={(e)=>
                setForm({
                    ...form,
                    title:e.target.value
                })
            }
            />

            <input

            className="border p-3 w-full"

            placeholder="Cover image URL"

            value={form.coverImage}

            onChange={(e)=>

            setForm({

            ...form,

            coverImage:e.target.value

            })

            }

            />

            <textarea

            className="
            border
            p-3
            w-full
            h-96
            "

            placeholder="Tell your story..."

            value={form.content}

            onChange={(e)=>

            setForm({

            ...form,

            content:e.target.value

            })

            }

            />

            <button

            className="
            bg-black
            text-white
            px-6
            py-3
            rounded
            "

            >

            Publish

            </button>



            </form>
        </div>
    )
}

export default CreateArticle;