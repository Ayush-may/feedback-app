import { Label } from "@radix-ui/react-label";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface ResponseTextHistoryType {
    message: String,
    feedback: String
}

export default function ResponseTextHistory(
    { message, feedback }: ResponseTextHistoryType
) {
    return (
        <Card className="border-none shadow-none bg-gray-100" >
            <CardContent >
                <h2 className="text-stone-900 font-semibold line-clamp-2" >Header</h2>
                <Label className="text-muted-foreground line-clamp-2" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium velit repellat error, ipsum, provident impedit repellendus exercitationem doloremque aspernatur eligendi nostrum vel facere accusamus beatae. Distinctio nulla delectus expedita, perferendis debitis, quibusdam obcaecati a corporis veritatis odio sed ratione quam?
                </Label>
                <p className="text-sm text-muted-foreground text-end mt-2" >{new Date().toDateString()}</p>
            </CardContent>
        </Card>
    )
}