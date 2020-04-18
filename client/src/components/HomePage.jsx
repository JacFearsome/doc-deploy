import React from 'react';
import PropTypes from "prop-types";
import ReactMarkdown from 'react-markdown';
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import {
    Alignment,
    Button,
    Classes,
    Code,
    Divider,
    Drawer,
    Label,
    Position,
    Switch,
    Navbar,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading,
    FormGroup,
    InputGroup,
    HTMLTable,
    Dialog,
    H3,
} from "@blueprintjs/core";
import Header from "./Header";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: "",
        }
    }

    componentDidMount() {
    }

    onChange = (newValue) => {
        this.setState({ file: newValue });
    }

    render() {
        return (
        <div>
            <Header />
            <H3>Home</H3>
        </div>
        );
    }
}

export default HomePage;