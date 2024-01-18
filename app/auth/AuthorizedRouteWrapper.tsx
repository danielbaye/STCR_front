import { LoginPage } from "../routes/LoginPage"
import { userIsLoggedIn } from "../services/ApiService";

type AuthorizedRouteWrapperProps = {
    page: React.ReactElement,
}

export const AuthorizedRouteWrapper: React.FC<AuthorizedRouteWrapperProps> = ({ page }) => {
    const isLoggedIn = userIsLoggedIn();
    if (!isLoggedIn) {
        return <LoginPage />;
    }
    return page;
}