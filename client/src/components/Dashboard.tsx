import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "@radix-ui/react-label"
import { useForm } from "react-hook-form";
import Getfeedback from "./Getfeedback"

export default function Dashboard() {
    return (
        <div className="w-screen h-screen bg-stone-100 flex pt-[100px] justify-center" >

            <Tabs defaultValue="field" className="w-[600px]">
                <TabsList>
                    <TabsTrigger value="field">Field</TabsTrigger>
                    <TabsTrigger value="history">History</TabsTrigger>
                </TabsList>
                <TabsContent value="field">
                    <Getfeedback />
                </TabsContent>
                <TabsContent value="history">Change your password here.</TabsContent>
            </Tabs>
        </div>
    )
}