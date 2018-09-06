import * as iconTemplate from "./icon-templates";

export const getTemplate = props => {
    return (props.icon != undefined) ? iconTemplate[props.icon](props) : '';
}
