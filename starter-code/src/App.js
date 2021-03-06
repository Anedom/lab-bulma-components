import React, {Component} from "react";

import Navbar from './Navbar';
import FormField from "./FormField";
import CoolButton from "./CoolButton";
import Message from './Message';

class App extends Component {
    render() {
        return(
            <div>
                <Navbar />
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
                <CoolButton isSmall isSuccess>Button 2</CoolButton>
                <Message isInfo title="Hello World">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
                </Message>
            </div>
        )
    }
}

export default App;