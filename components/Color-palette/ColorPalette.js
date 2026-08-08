import styledComponents from "styled-components";
import { ColorContainer } from "./styles.js";
import { ColorBadge } from "./styles.js";

export default function ColorPalette({ colors }) { 
return (
 <ColorContainer> 
{colors.map((color) => (
<ColorBadge key={color} $color={color} />
 ))} 
</ColorContainer> 
); 
}