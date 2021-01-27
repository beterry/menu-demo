const DrinkIcon = ({color}) => {

    const styleObj = {
        fill: 'none',
        stroke: color,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: '1px',
    }

    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="18.958" height="35.762" viewBox="0 0 18.958 35.762">
            <g transform="translate(0 0)">
                <g>
                    <path style={styleObj} d="M18.05,2.065s2.016,8.53-1.3,23.072a46.1,46.1,0,0,0-.935,9.718s-6.7,1.367-12.526,0A38.067,38.067,0,0,0,2.285,24.849s-3.4-12.035-1.3-22.784"/>
                    <path style={styleObj} d="M.982,2.065a21.316,21.316,0,0,1,17.068,0"/>
                    <path style={styleObj} d="M.357,9.733s7.1-3.6,18.3,0"/>
                </g>
            </g>
        </svg>
    )
}

export default DrinkIcon;