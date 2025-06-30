import { Label } from "@radix-ui/react-label";
import { Separator } from "@/components/ui/separator";

export default function ResponseText({ text }) {
    return (
        <div className="flex flex-col gap-6 border bg-gray-100/30 rounded-lg p-3" >
            <div className="flex gap-2 flex-col" >
                <Label className="whitespace-pre-line font-semibold text-stone-800 line-clamp-2" >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, mollitia.
                </Label>
                <Separator className="my-1 bg-stone-300" />
                <Label className="whitespace-pre-line text-stone-600 line-clamp-4" >
                    {text}
                </Label>
                <Label className="text-muted-foreground text-end text-sm" >
                    {new Date().toLocaleString()}
                </Label>
            </div>
        </div>
    )
}