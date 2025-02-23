import * as React from 'react'

const SvgMenu = (props: any) => {
    return <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="icon multi-color"
        {...props}
    >
        <path
            style={{
                fill: "none",
                stroke: "currentcolor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
            }}
            d="M3 12h18"
        />
        <path
            data-name="primary-stroke"
            d="M9 18h12M3 6h12"
            style={{
                fill: "none",
                stroke: "currentcolor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
            }}
        />
    </svg>
}
export default SvgMenu
