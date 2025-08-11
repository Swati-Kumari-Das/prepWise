import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useClerk } from "@clerk/clerk-react";

export const SSORedirectHandler = () => {
  const { handleRedirectCallback } = useClerk();
  const navigate = useNavigate();

  useEffect(() => {
    const processSSO = async () => {
      try {
        await handleRedirectCallback({
          redirectUrl: "/signin/sso-callback", // current route
        });
        navigate("/"); // manually send them home
      } catch (err) {
        console.error("SSO callback error:", err);
        navigate("/signin");
      }
    };
    processSSO();
  }, [handleRedirectCallback, navigate]);

  return <div>Signing you in...</div>;
};
