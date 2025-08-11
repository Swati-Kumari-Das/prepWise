import { cn } from "@/lib/utils";
import { Container } from "./container";
import { LogoContainer } from "./logo-container";


import { NavLink } from "react-router-dom";

import { ProfileContainer } from "./profile-container";
import ToggleContainer from "./toggle-container";
import { useAuth } from "@clerk/clerk-react";
import { NavigationRoutes } from "./navigation-routes";

const Header = () => {
  const { userId } = useAuth();

  return (
    <header
      className={cn("w-full border-b duration-150 transition-all ease-in-out")}
    >
      <Container>
        <div className="flex items-center gap-4">
          {/* logo section */}
          <LogoContainer />
          {/* nvigation section */}

          <nav className="hidden md:flex items-center gap-3">
            <NavigationRoutes />
            {userId && (
              <NavLink
                    
                    to={"/generate"}
                    className={({ isActive }) =>
                        cn(
                            "text-base text-neutral-600",
                            isActive && "text-neutral-900 font-semibold"
                        )
                    }
                >
                  Take An Interview
                </NavLink>
            )}
          </nav>

          <div className="ml-auto flex items-center gap-6">
            {/* profile section */}
            <ProfileContainer />
            {/* toggle action */}
            <ToggleContainer />
          </div>
        </div>
      </Container>
    </header>
  );
};
export default Header;