const SpecialsIcon = ({color}) => {

    const styleObj = {
        fill: 'none',
        stroke: color,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: '1px',
    }

    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="43.461" height="35.592" viewBox="0 0 43.461 35.592">
            <g>
                <path style={styleObj} d="M.3,35.292,11.067.3H32.861L22.442,35.292H18.881L20.1,31.385H5.336L4.207,35.292Z"/>
                <line style={styleObj} y1="31.084" x2="9.214" transform="translate(5.336 0.3)"/>
                <line style={styleObj} y1="31.084" x2="9.212" transform="translate(20.097 0.3)"/>
            </g>
            <path style={styleObj} d="M24.122,29.645h13.74L30.992,6.574"/>
            <g>
                <path style={styleObj} d="M32.861.3l10.3,34.992H39.755l-1.892-5.647"/>
            </g>
            <line style={styleObj} x2="8.256" transform="translate(15.867 5.081)"/>
            <line style={styleObj} x2="8.256" transform="translate(15.208 6.923)"/>
            <line style={styleObj} x2="8.256" transform="translate(13.946 11.565)"/>
            <line style={styleObj} x2="8.256" transform="translate(13.288 13.406)"/>
            <line style={styleObj} x2="8.256" transform="translate(11.739 18.11)"/>
            <line style={styleObj} x2="8.256" transform="translate(11.08 19.951)"/>
        </svg>
    )
}

export default SpecialsIcon;