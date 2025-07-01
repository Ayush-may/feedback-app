import { Label } from "@radix-ui/react-label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { LoaderCircle } from 'lucide-react'
import { useEffect, useState } from "react";
import ResponseText from "./ResponseText";
import ResponseTextHistory from "./ResponseTextHistory";

export default function Gethistory() {
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState("")



    useEffect(() => {
        console.log('this is work')
    }, [])

    return (
        < Card >
            <CardHeader>
                <CardTitle>History</CardTitle>
                {/* <CardDescription>Paste your response or short essay below and click "Get Feedback" to receive helpful suggestions from AI.</CardDescription> */}
            </CardHeader>
            <CardContent>
                <ResponseTextHistory
                    message={"This is message"}
                    feedback={`Lorem ipsum dolor sit amet consectetur `} />
            </CardContent >
        </Card >

    )
}