import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {useState} from "react";
import {toggleLike} from "../api/like.api";

function LikeButton(
    {
        articleId
    }:{articleId:string
    }){
        const [liked,setLiked]=useState(false);
        const [likeCount,setLikeCount]=useState(0);

        const queryClient = useQueryClient();

        const {data:likeData} = useQuery({
            queryKey:["likes",articleId],
            queryFn:()=>toggleLike(articleId)
        });

        const mutation = useMutation({
            mutationFn:()=>toggleLike(articleId),
            onSuccess:(data)=>{
                setLiked(data.liked);
                setLikeCount(data.likeCount);
                queryClient.invalidateQueries({
                    queryKey:["likes",articleId]
                });
            }
        });
    }