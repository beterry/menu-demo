const EntreeIcon = ({color}) => {

    const styleObj = {
        fill: 'none',
        stroke: color,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: '1px',
    }

    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="44.589" height="27.92" viewBox="0 0 44.589 27.92">
            <g transform="translate(0 0.001)">
                <g>
                    <path style={styleObj} d="M41.109,27.62H3.48a3.181,3.181,0,0,1,0-6.361H41.109a3.181,3.181,0,0,1,0,6.361Z"/>
                    <path style={styleObj} d="M4.585,21.241c0-9.346,7.929-16.922,17.709-16.922S40,11.9,40,21.241"/>
                    <path style={styleObj} d="M20.883,4.357V1.711a1.411,1.411,0,0,1,2.822,0V4.357"/>
                </g>
            </g>
        </svg>
    )
}

export default EntreeIcon;