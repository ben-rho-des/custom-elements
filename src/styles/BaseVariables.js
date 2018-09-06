import * as StyleHelper from './StyleHelper';

const fontSizeBase = "1rem";

export const variables = {
    black:              "#000",
    white:              "#FFF",
    primary:            "#C20000",
    secondary:          "#2C853C",
    tertiary:           "#E9600E",
    brandGrey:          "#4C626C",

    greyDarkest:        "#272727",
    greyDark:           "#4C4C4C",
    greyMedium:         "#666666",
    greyInactive:		"#BFBFBF",
    greyDisabled:       "#BFBFBF",
    greyMediumLight:    "#DFDFDF",
    greyLight: 		    "#F5F5F5",
    greyDarkCool:       "#b2bcc0",
    greyMediumCool:	    "#DCE0E5",
    greyLightCool:	    "#F2F4F6",

    focusColor:         "#5897fb",
    borderWidth:        "1px",
    fontFamilyBase:     "Source Sans Pro, Helvetica, Arial, sans-serif",
    fontFamilyHeadline: "Nab Impact, Helvetica, Arial, sans-serif",
    fontSizeBase:       fontSizeBase,
    fontSizeLg:         StyleHelper.remCalc(fontSizeBase, 1.25),
    fontSizeSm:         StyleHelper.remCalc(fontSizeBase, .875),
    lineHeightBase:     1.5,
    fontWeightLight:    300,
    fontWeightNormal:   400,
    fontWeightSemibold: 600,
    fontWeightBold:     700,
    fontSizeH1:         StyleHelper.remCalc(fontSizeBase, 2.5),
    fontSizeH2:         StyleHelper.remCalc(fontSizeBase, 2),
    fontSizeH3:         StyleHelper.remCalc(fontSizeBase, 1.75),
    fontSizeH4:         StyleHelper.remCalc(fontSizeBase, 1.5),
    fontSizeH5:         StyleHelper.remCalc(fontSizeBase, 1.25),
    fontSizeH6:         fontSizeBase,

    borderRadius:       '5px',
}
