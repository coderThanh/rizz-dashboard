type FooterProps = { className?: string }
export const Footer = (props: FooterProps) => {
    return <div className={`${props?.className ?? ''} px-default`}>
        <div className={'bg-bg p-[18px_16px] rounded-radius-1 shadow-1 text-center'}>
            <p className={'text-size-small m-0 text-sub'}>© 2025 Pt Coder</p>
        </div>
    </div>
}