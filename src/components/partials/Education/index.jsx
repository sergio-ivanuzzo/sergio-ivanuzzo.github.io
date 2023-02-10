import React from "react";

import {Caption, Section} from "../../core/Layout";

const Education = () => {
    return (
        <Section>
            <h3>Education</h3>
            <div className="content">
                <div className="item">
                    <Caption>
                        <div className="bold">Kharkov Radio-Engineering College</div>
                        <div className="bold">Kharkov, Ukraine</div>
                    </Caption>
                    <Caption>
                        <div>Associate degree in Programming for computers and automated systems</div>
                        <div>2011</div>
                    </Caption>
                </div>
            </div>
        </Section>
    );
};

export default Education;