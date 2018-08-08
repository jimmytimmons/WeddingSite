import React, { Component } from 'react'

import macys from "./images/macys.png";
import amazon from "./images/amazon.png";

import TextPanel from "../Components/TextPanel/TextPanel.js";

const className = `Registry`;

import './styles/_registry.scss'

class Registry extends Component {
    render() {
        return (
            <div className={`${className}__container`}>
                <h1
                    className={`${className}__title`}
                >
                    {"We are registered at the following:"}
                </h1>
				<i>{"Click the logo to be directed to the registry"}</i>
                <TextPanel className={`${className}__container`}>
                    <div className={`${className}__links`}>
						<a
							href={"https://www.macys.com/wgl/registry/guest/6907782"}
							className={`${className}__link`}
						>
							<img src={macys} alt={"Macy's logo"}/>
						</a>
                        <a
                            href={"https://www.amazon.com/wedding/jimmy-timmons-kathryn-fiallo-hamilton-december-2018/registry/C4XRRUH6VA71"}
                            className={`${className}__link`}
                        >
							<img src={amazon} alt={"Amazon logo"}/>
                        </a>
                    </div>
                </TextPanel>
            </div>
        );
    }
}
export default Registry;
