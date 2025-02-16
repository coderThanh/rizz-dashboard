type FooterProps = {className?: string}
 export const Footer = (props: FooterProps) => {
return <div className={`${props?.className ?? ''}`}>Footer</div>
}