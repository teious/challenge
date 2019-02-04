import React from 'react';
import styled from "styled-components";

export interface Message {
    type: 'sent' | 'received',
    text: string
}
export interface MessageProps {
    type: 'sent' | 'received',
    // status: 'error' | 'success' | 'loading',
    children: any

}

const StyledMessage = styled.li`
    background: ${({ type }: MessageProps) => type === 'sent' ? '#24e28b' : '#dddddd'};
    width: max-content;
    align-self :  ${({ type }: MessageProps) => type === 'sent' ? 'flex-end' : 'flex-start'};
    padding: 8px;
    margin: 2px;
    border-radius: 8px;
    color: ${({ type }: MessageProps) => type === 'sent' ? 'white' : 'black'};
`;

export const Message =
    ({ type, children }: MessageProps) =>
        (<StyledMessage
            type={type}>
            {children}

        </StyledMessage>)