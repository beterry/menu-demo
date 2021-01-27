const AppIcon = ({color}) => {

    const styleObj = {
        fill: 'none',
        stroke: color,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: '1px',
    }

    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="37.266" height="36.638" viewBox="0 0 37.266 36.638">
            <g transform="translate(0 0)">
                <g>
                    <path style={styleObj} d="M31.307,36.338H5.959A5.659,5.659,0,0,1,.3,30.679H36.966A5.659,5.659,0,0,1,31.307,36.338Z"/>
                    <path style={styleObj} d="M9.6,30.679H8.619a5.922,5.922,0,1,1,0-11.844H9.6a5.922,5.922,0,0,1,0,11.844Z"/>
                    <path style={styleObj} d="M28.408,30.679h-.982a5.922,5.922,0,1,1,0-11.844h.982a5.922,5.922,0,1,1,0,11.844Z"/>
                    <circle style={styleObj} cx="5.387" cy="5.387" r="5.387" transform="translate(3.722 8.061)"/>
                    <circle style={styleObj} cx="5.387" cy="5.387" r="5.387" transform="translate(22.529 8.061)"/>
                    <line style={styleObj} y1="7.76" transform="translate(9.11 0.3)"/>
                    <line style={styleObj} y1="7.76" transform="translate(27.916 0.3)"/>
                </g>
            </g>
        </svg>
    )
}

export default AppIcon;