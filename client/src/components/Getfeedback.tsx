import { Label } from "@radix-ui/react-label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { LoaderCircle } from 'lucide-react'
import { useState } from "react";
import ResponseText from "./ResponseText";

export default function Getfeedback() {
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState("")

    return (

        < Card >
            <CardHeader>
                <CardTitle>Get AI-Powered Feedback</CardTitle>
                <CardDescription>Paste your response or short essay below and click "Get Feedback" to receive helpful suggestions from AI.</CardDescription>
            </CardHeader>
            <CardContent>
                <form action="" className="flex flex-col gap-6" >
                    {response === "" ? (
                        <div className="grid gap-2" >
                            <Label>Enter your response</Label>
                            <Textarea
                                className="h-[100px]"
                                placeholder="Type your paragraph, answer, or idea here..."
                            />
                            <p className="text-xs text-end text-muted-foreground ms-1 -mt-1">
                                No more than 200 words.
                            </p>
                        </div>) : (<ResponseText text={"Lorem this is text"} />
                    )}

                    {
                        response === "" ? (
                            <Button type="submit" disabled={loading}>
                                {loading ? (
                                    <div className="flex items-center gap-2" >
                                        <LoaderCircle className="h-4 w-4 animate-spin" />
                                        Getting Feedback...
                                    </div>) : (
                                    "Get Feedback"
                                )}
                            </Button>
                        ) : (
                            <Button variant={"destructive"} className="w-fit ms-auto"
                                onClick={() => setResponse("")}
                            >Clear</Button>
                        )
                    }

                </form>
            </CardContent >
        </Card >

    )
}