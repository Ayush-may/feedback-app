import { Label } from "@radix-ui/react-label";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export default function ResponseTextHistory(
    { message, feedback }: { message: string; feedback: string }
) {
    return (
        <>
            <Dialog >
                <DialogTrigger asChild >
                    <Card className=" shadow-none border border-gray-300 bg-gray-100 cursor-pointer hover:bg-gray-200/80 duration-300 transition-all" >
                        <CardContent >
                            <h2 className="text-stone-900 font-semibold line-clamp-2" >Header</h2>
                            <Label className="text-muted-foreground line-clamp-2" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium velit repellat error, ipsum, provident impedit repellendus exercitationem doloremque aspernatur eligendi nostrum vel facere accusamus beatae. Distinctio nulla delectus expedita, perferendis debitis, quibusdam obcaecati a corporis veritatis odio sed ratione quam?
                            </Label>
                            <p className="text-sm text-muted-foreground text-end mt-2" >{new Date().toDateString()}</p>
                        </CardContent>
                    </Card>
                </DialogTrigger>
                <DialogContent className="min-w-11/12" >
                    <DialogHeader>
                        <DialogTitle>This is titlle</DialogTitle>
                        <DialogDescription></DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </>
    )
}