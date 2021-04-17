import { CSSProperties, ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
    position: absolute;
    top: -215px; 
    right: 0px;
`;

export default function Grid(
    src,
    color,
    width = undefined,
    height = undefined,
    alt = src,
    children = null,
    style = {},
    ...props) {
    return (
        <Container
            style={{
                background: color,
                mask: `url(/${src}) center/contain no-repeat`,
                WebkitMask: `url(/${src}) center/contain no-repeat`,
                width,
                height,
                ...style,
            }}
            {...props}
        >
        </Container>
    );
}