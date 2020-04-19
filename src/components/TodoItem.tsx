import React from 'react';
import { Button } from 'semantic-ui-react';

interface Props {
    text: string;
    done: boolean;
    onToggle(): void;
    onRemove(): void;
}

const TodoItem: React.SFC<Props> = ({text, done, onToggle, onRemove}) => (
    <li>
        <button 
            onClick={onToggle}
            style={{ 
                textDecoration: done ? 'line-through' : 'none' 
            }}
        >
            {text}
        </button>
        <span  onClick={onRemove}><Button color="red"  size= "tiny" content="Remove"/></span>
    </li>
);

export default TodoItem;