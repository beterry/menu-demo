const SandwichIcon = ({color}) => {

    const styleObj = {
        fill: 'none',
        stroke: color,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: '1px',
    }

    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="47.459" height="27.181" viewBox="0 0 47.459 27.181">
            <g transform="translate(0 0)">
                <g>
                    <path style={styleObj} d="M2.443,16.123A2.248,2.248,0,0,1,.38,13.236C1.514,8.894,5.963,1.138,23.228.308c0,0,19.538-.754,23.8,12.264a2.489,2.489,0,0,1-2.02,3.317Z"/>
                    <path style={styleObj} d="M45.437,21.169c.676.417,1.04.861,1.04,1.322,0,2.425-10.085,4.39-22.525,4.39S1.426,24.916,1.426,22.491a1.544,1.544,0,0,1,.8-1.166"/>
                    <line style={styleObj} x1="10.272" transform="translate(18.942 18.434)"/>
                    <path style={styleObj} d="M36.649,18.434h7.012a1.945,1.945,0,0,1,0,3.89H4.025a1.945,1.945,0,1,1,0-3.89H11.5"/>
                    <line style={styleObj} x2="3.301" y2="4.325" transform="translate(15.809 1.269)"/>
                    <line style={styleObj} x2="3.301" y2="4.325" transform="translate(21.877 0.499)"/>
                    <line style={styleObj} x2="3.301" y2="4.325" transform="translate(28.687 0.665)"/>
                    <path style={styleObj} d="M8.2,16.123l7.234,5.065,6.445-5.069"/>
                    <path style={styleObj} d="M25.842,16.074l7.3,5.114,6.692-5.265"/>
                    <path style={styleObj} d="M4.025,18.434a1.424,1.424,0,0,1,0-2.311"/>
                    <path style={styleObj} d="M42.282,16a1.424,1.424,0,0,1,0,2.311"/>
                </g>
            </g>
        </svg>
    )
}

export default SandwichIcon;