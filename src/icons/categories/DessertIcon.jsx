const DessertIcon = ({color}) => {

    const styleObj = {
        fill: 'none',
        stroke: color,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: '1px',
    }

    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="41.379" height="36.655" viewBox="0 0 41.379 36.655">
            <g>
                <path style={styleObj} d="M23.632,8,28.15,5.26C41.143,5,41.078,15.92,41.078,15.92L.3,22.126,18.714,10.977"/>
                <path style={styleObj} d="M.3,22.126V36.354H34.2s6.233.217,6.881-5.648V15.922"/>
                <path style={styleObj} d="M25.635,6.784c11.643,1.494,10.67,9.864,10.67,9.864v12.6a2.544,2.544,0,0,1-2.544,2.544H.3"/>
                <path style={styleObj} d="M25.658,11.157a3.479,3.479,0,1,1-3.479-3.479A3.479,3.479,0,0,1,25.658,11.157Z"/>
                <path style={styleObj} d="M22.179,7.679A8.249,8.249,0,0,1,24.536.3"/>
            </g>
        </svg>
    )
}

export default DessertIcon;