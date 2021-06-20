import React,{useState} from "react";
import CartSummary from "./CartSummary";
import { Container,  Menu } from "semantic-ui-react";
import { useSelector } from 'react-redux';
import SignOut from "./SignOut";
import SignedIn from "./SignedIn";
import { useHistory } from "react-router-dom";


export default function Navi() {

    const { cartItems } = useSelector(state => state.cart)
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const history = useHistory()
    function handleSignedOut() {
        setIsAuthenticated(false)
        history.push("/")
    }
    function handleSignIn() {
        setIsAuthenticated(true)
    }
return (
    <div>

    <Menu inverted fixed="top">
        <Container>
        <Menu.Item name="home" />
        <Menu.Item name="messages" />

        <Menu.Menu position="right">
        {cartItems.length>0&&<CartSummary/>}
        {isAuthenticated?<SignedIn signOut={handleSignedOut} />:<SignOut signIn ={handleSignIn}/>}
        
        
        </Menu.Menu>
    </Container>
    </Menu>
    </div>
);
}
