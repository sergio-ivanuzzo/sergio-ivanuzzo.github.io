import React from "react";

const Icon = ({ width = "100%", height = "100%" }) => {
    return (
        <svg width={width}
             height={height}
             viewBox="0 0 60 60"
             xmlns="http://www.w3.org/2000/svg"
        >
            <g fill="none"
               fillRule="evenodd"
               id="soical"
               stroke="none"
               strokeWidth="1">
                <g id="social"
                   transform="translate(-973.000000, -438.000000)">
                    <g id="slices"
                       transform="translate(173.000000, 138.000000)"/>
                    <g fill="#000000"
                       id="hexagon-black"
                       transform="translate(173.000000, 138.000000)">
                        <polygon id="Polygon-38"
                                 points="830 300 855.980762 315 855.980762 345 830 360 804.019238 345 804.019238 315 "/>
                    </g>
                    <g fill="#FFFFFF"
                       id="icon"
                       transform="translate(182.000000, 150.000000)">
                        <path d="M827.934218,320.012758 L812.552382,316.846154 L811.769231,320.129843 L829.446713,323.769231 L830.096746,321.046843 L830.963976,321.461538 L832.538462,317.997229 L815.651408,309.923077 L814.076923,313.386431 L827.934218,320.012758 L827.934218,320.012758 Z M834.846154,321.461538 L834.846154,331.846154 L807.153846,331.846154 L807.153846,321.461538 L810.615385,321.461538 L810.615385,328.384615 L831.384615,328.384615 L831.384615,321.461538 L834.846154,321.461538 Z M811.769231,323.769231 L830.230769,323.769231 L830.230769,327.230769 L811.769231,327.230769 L811.769231,323.769231 Z M834.846154,314.962841 L832.542622,318 L817.538462,306.348945 L819.204645,304.153846 L820.924729,304.153846 L834.846154,314.962841 Z"
                              id="stackoverflow"/>
                    </g>
                </g>
            </g>
        </svg>
    );
};

export default Icon;