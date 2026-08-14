import {
useState
} from "react";


import {
useQuery,
useMutation,
useQueryClient
} from "@tanstack/react-query";


import {

getComments,

createComment

} from "../api/comment.api";



function Comments({

articleId

}:{
articleId:string
}){


const [text,setText]=useState("");



const queryClient =
useQueryClient();



const {
data:comments

}=useQuery({

queryKey:[
"comments",
articleId
],

queryFn:()=>getComments(articleId)

});



const mutation =
useMutation({

mutationFn:()=>createComment(

articleId,

text

),


onSuccess:()=>{


setText("");


queryClient.invalidateQueries({

queryKey:[
"comments",
articleId
]

});


}


});



return(

<div className="mt-10">


<h2 className="text-2xl font-bold mb-5">

Comments

</h2>



<div className="flex gap-3">


<input

className="border p-2 flex-1"

placeholder="Write a comment..."

value={text}

onChange={(e)=>

setText(e.target.value)

}

/>



<button

className="bg-black text-white px-4"

onClick={()=>mutation.mutate()}

>

Post

</button>


</div>



<div className="mt-6 space-y-4">


{

comments?.map((comment:any)=>(


<div

key={comment.id}

className="border-b pb-3"

>


<p className="font-bold">

{comment.user.name}

</p>



<p>

{comment.content}

</p>


</div>


))

}


</div>



</div>

)

}


export default Comments;