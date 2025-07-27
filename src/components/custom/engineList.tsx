import type { DatabaseEngine } from "@/lib/model/databaseEngine";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link";


export function EngineList({ urlPrefix, engines }: { urlPrefix: string; engines: DatabaseEngine[] }) {
    return (
        <Card className="w-full max-w-2xl mx-auto flex flex-col gap-4 items-center">
            <CardHeader className="w-full text-center">
                <CardTitle>Available Database Engines</CardTitle>
                <CardDescription>List of all available database engines</CardDescription>
            </CardHeader>
            {
                engines.map((engine) => (
                    <Link href={`${urlPrefix}/${engine.id}`} key={engine.id} className="w-full">
                        <CardContent className="flex flex-col items-center gap-2 p-4 hover:bg-gray-100 transition-colors border">
                            <div className="flex items-center gap-2">
                                {engine.logo && (
                                    <img src={engine.logo} alt={`${engine.name} logo`} className="h-6 w-6" />
                                )}
                                <span className="text-lg font-semibold">{engine.name}</span>
                            </div>
                        </CardContent>
                    </Link>
                ))
            }
        </Card>
    );
}