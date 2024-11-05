import { ChevronRight } from "lucide-react"
import { Text } from "../ui/text"
import { Button } from "../ui/button"
import Link from "next/link"

export default function RSVP(){
    return (
        <div className="text-center">
            <Text coloring={"fossday-yellow"} size={"h2"} variant={"fossday"}>
                Already Registered for FOSSDay?
            </Text>
            <br/>
            <Text coloring={"white"} size={"p"}>
            Confirm your spot by filling out the RSVP form before 3pm, 6th November 2024.Don’t miss out on this day of open-source exploration and collaboration.
            </Text>
            <Link href="/fossday/rsvp" className="z-50">
                <Button size="lg" variant="fossday">
                    <span className="text-xl"> RSVP</span>
                    <ChevronRight />
                </Button>
            </Link>
        </div>
    )
}