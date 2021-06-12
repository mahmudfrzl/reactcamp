import React,{useState} from "react";
import CartSummary from "./CartSummary";
import { Container,  Menu } from "semantic-ui-react";
import SignOut from "./SignOut";
import SignedIn from "./SignedIn";


export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    function handleSignedOut(params) {
        setIsAuthenticated(false)
    }
    function handleSignIn(params) {
        setIsAuthenticated(true)
    }
return (
    <div>

    <Menu inverted fixed="top">
        <Container>
        <Menu.Item name="home" />
        <Menu.Item name="messages" />

        <Menu.Menu position="right">
        <CartSummary/>
        {isAuthenticated?<SignedIn signOut={handleSignedOut} />:<SignOut signIn ={handleSignIn}/>}
        
        
        </Menu.Menu>
    </Container>
    </Menu>
    </div>
);
}
