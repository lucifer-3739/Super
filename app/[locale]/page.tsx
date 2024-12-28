import { LoadingScreen } from "@/components/common/LoadingScreen";
import { ModeToggle } from "@/providers/modetoggle";


const Home = () => {

    return (
        <>
            <ModeToggle />
            <LoadingScreen />
        </>
    )
}

export default Home;