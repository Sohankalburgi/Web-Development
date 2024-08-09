import ColorBox from "./colorbox";


export default function ColorBoxList({colors}){
   
    const boxes = [];
    for(let i=0;i<25;i++){
        boxes.push(<ColorBox colors={colors}/>)
    }
    console.log(boxes)
    return (
        <div className="ColorBoxGrid">
            {boxes}
        </div>
    );
}