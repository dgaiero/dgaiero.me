import '../assets/less/UnderlineA.less'

export default function(props) {
   return (
      <a
         className="underline-link"
         href={props.href}
         target={props._blank ? "_blank" : "_self"}
         rel="noopener noreferrer">
            {props.text}
      </a>
   )
}