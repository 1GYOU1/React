import React from 'react';
import { ColorConsumer } from '../contexts/color';

const colors=['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const SelectColors = () => {
    return (
        <div>
            <h2>색상을 선택하세요.</h2>
            <ColorConsumer>{/*자식 요소들을 조회*/}
            {({actions})=>(//컬러값 변경되는 부분
                <div style={{display:'flex'}}>
                    {colors.map(color=>(
                        <div key={color} style={{
                            background:color,
                            width:'24px',
                            height:'24px',
                            corsor:'pointer'
                        }}
                        //우클릭
                        onClick={()=>actions.setColor(color)}
                        //좌클릭
                        onContextMenu={e=>{ 
                        e.preventDefault();//기본동작 취소(좌클릭시 메뉴 나오는 동작)
                        actions.setSubcolor(color);
                    }}
                        />
                    ))}
                </div>
                )}
            </ColorConsumer>
            <hr />
        </div>

    );
};

export default SelectColors;