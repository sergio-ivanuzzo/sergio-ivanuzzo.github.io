import React, {useContext} from "react";
import {Content, Section} from "../../core/Layout";
import {LanguageContext} from "../../../providers/languageProvider";
import {UI} from "../../../i18n/content";


const Certifications = () => {
    const { lang } = useContext(LanguageContext);

    return (
        <Section>
            <h3>{UI[lang].certifications}</h3>
            <Content background={"rgba(100,222,240,0.1)"}>
                <div>
                    Advanced React
                </div>
                <div>
                    Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization
                </div>
                <div>
                    Neural Networks and Deep Learning
                </div>
            </Content>
        </Section>
    );
};

export default Certifications;