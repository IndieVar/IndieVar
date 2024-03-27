import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";

const HomePage = () => {
    const authHeader = useAuthHeader()

    return (
        <h1 className="text-3xl font-bold underline">
            You are welcome to IndieVar development <br/>
            {authHeader}
        </h1>
    )
}
export default HomePage;