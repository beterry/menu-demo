const BurgerIcon = ({color}) => {

    const styleObj = {
        fill: 'none',
        stroke: color,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: '1px',
    }

    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="36.845" height="32.899" viewBox="0 0 36.845 32.899">
            <g transform="translate(0 0)">
                <g>   
                    <path style={styleObj} d="M35.165,24.2v2.331A6.071,6.071,0,0,1,29.094,32.6H7.639a6.071,6.071,0,0,1-6.072-6.071V24.2"/>
                    <path style={styleObj} d="M35.165,13.1c0-7.068-8.716-12.8-15-12.8H16.907C10.624.3,1.567,6.031,1.567,13.1Z"/>
                    <rect style={styleObj} width="36.246" height="4.046" rx="1.602" transform="translate(0.3 18.166)"/>
                    <rect style={styleObj} width="33.598" height="1.936" transform="translate(1.567 22.261)"/>
                    <path style={styleObj} d="M1.406,16.312a5.16,5.16,0,0,1,6.089-.528,7.335,7.335,0,0,0,3.135,1.137c2.3.138,4.129-1.751,6.41-2.1,2.983-.455,5.536,2.195,8.517,1.724,1.321-.208,2.422-1.105,3.681-1.557a5.8,5.8,0,0,1,6.083,1.5"/>
                    <path style={styleObj} d="M8.551,8.11a.788.788,0,1,1-.789-.789.789.789,0,0,1,.789.789"/>
                    <path style={styleObj} d="M26.8,5.424a.789.789,0,1,1-.789-.789.789.789,0,0,1,.789.789"/>
                    <path style={styleObj} d="M16.709,3.693a.774.774,0,1,1-.773-.774.774.774,0,0,1,.773.774"/>
                    <path style={styleObj} d="M20.638,8.524a.818.818,0,1,1-.817-.818.817.817,0,0,1,.817.818"/>
                    <path style={styleObj} d="M13.917,10.456a.818.818,0,1,1-.818-.818.818.818,0,0,1,.818.818"/>
                    <path style={styleObj} d="M30.925,10.1a.818.818,0,1,1-.817-.818.817.817,0,0,1,.817.818"/>
                </g>
            </g>
        </svg>
    )
}

export default BurgerIcon;