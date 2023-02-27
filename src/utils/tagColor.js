import {colors} from "../enum/colors";

export function tagColor (int) {
    switch (int) {
        case 0:
            return colors.blue.tag
        case 1:
            return colors.orange.tag
        case 2:
            return colors.red.tag
        case 3:
            return colors.green.tag
        case 4:
            return colors.black.tag
    }
}