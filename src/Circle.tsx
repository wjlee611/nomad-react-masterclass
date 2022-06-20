import styled from "styled-components";

interface ContainerProps {
  //Required
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 5px solid ${(props) => props.borderColor};
`;

interface CircleProps {
  //Required
  bgColor: string;
  //Optional
  borderColor?: string;
}

function Circle({ bgColor, borderColor }: CircleProps) {
  return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} />;
}

export default Circle;
