import { Footer } from "@/components/footer";
import Header from "@/components/header";
import {Outlet} from "react-router";
import AuthHandler from "@/handlers/auth-handler";
export const PublicLayout = () => {
    return (
        <div className="w-full">
            {/* handler to store the user data */}
            <AuthHandler />
            <Header />
            
            <Outlet />

            <Footer/>
        </div>
    );
}