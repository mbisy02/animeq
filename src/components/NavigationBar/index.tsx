import Link from "next/link"
import InputSearch from "./InputSearch"
import UserActionButton from "./UserActionButton"

const NavigationBar = () => {
    return (
        <header className="bg-color-accent">
            <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-4">
                <Link href="/" className="font-bold text-2xl">AnimeList</Link>
                <InputSearch/>
                <UserActionButton/>
            </div>
        </header>
    )
}

export default NavigationBar 