import * as iconTemplate from "./icon-templates";

export const getTemplate = props => {
    return iconTemplate[props.icon](props);
}
