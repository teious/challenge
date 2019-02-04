import React, { Component, KeyboardEvent, ChangeEvent } from 'react';
import styled from 'styled-components';
import { Message } from '../message/Message';

export interface ChatWindowProps {

}

export interface ChatWindowState {
    messages: Message[],
    inputValue: string;
}
const ChatWrapper = styled.div`
    width: 300px;
`

const ChatHeader = styled.header`
    color: white;
    font-weight: 600;
    font-size: 17px;
    padding: 16px;
    background: #24e28b;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`;
const ChatList = ({ className, children }: any) => <ul className={className}>
    {children}
</ul>

const StyledChatList = styled(ChatList)`
    height: 300px;
    list-style: none;
    margin: 0;
    padding: 8px;
    background: #f0f0f0;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
`


const ChatKeyboard = styled.input`
    padding: 16px;
    border: none;
    background: rgba(24,240, 85, 0.2);
    border-bottom-left-radius: 8px;
    flex-grow: 1;
`
const KeyboardWrapper = styled.div`
    display:flex;
`;

const ChatButton = styled.button`
    border: none;
    border-bottom-right-radius: 8px;
    color: white;
    background-color: #24e28b;
    font-weight: 600;
    width: 100px;
    font-family: 'Courier New';
`;
const messagesMock: Message[] = [

    {
        type: 'sent',
        text: 'oi'
    },

    {
        type: 'received',
        text: 'beleza?'
    }
]

class ChatWindow extends Component<ChatWindowProps, ChatWindowState> {
    constructor(props: ChatWindowProps) {
        super(props);

        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            messages: messagesMock,
            inputValue: ''
        }
    }

    handleKeyPress(event: KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
            const { value } = event.target as HTMLInputElement;
            this.sendMessage(value);

        }
    }
    handleClick() {
        const { inputValue } = this.state;
        this.sendMessage(inputValue);
    }

    handleChange(e: ChangeEvent<HTMLInputElement>) {
        const { value } = e.target;

        this.setState((prevState) => ({ ...prevState, inputValue: value }));

    }

    sendMessage(message: string) {
        this.setState(({ messages }) => ({
            messages: [
                ...messages,
                {
                    type: 'sent',
                    text: message
                }
            ],
            inputValue: ''
        }))
    }

    render() {
        const { messages, inputValue } = this.state
        return (
            <ChatWrapper>
                <ChatHeader>Chat</ChatHeader>
                <StyledChatList>
                    {
                        messages && messages.map(({ type, text }) =>
                            (<Message type={type}>{text}</Message>))
                    }
                </StyledChatList>
                <KeyboardWrapper>
                    <ChatKeyboard type="text" onKeyPress={this.handleKeyPress} value={inputValue} onChange={this.handleChange} />
                    <ChatButton onClick={this.handleClick}>Enviar</ChatButton>
                </KeyboardWrapper>
            </ChatWrapper>);
    }


}


export default ChatWindow;