import { askQuestionToGPT } from "@/utils/ai";
import { NextResponse, NextRequest } from "next/server";

export const POST = async (request) => {
    //get content from request.body
    try{
        const { content } = await request.json();

        //send content to GPT
        const res = await askQuestionToGPT(content);

        return NextResponse.json({data:res});
    }catch(e){
        console.error(e);
    }
    
    return NextResponse.json({data:"Hello World"});
}