import styled from "styled-components";

interface ImageProps {
  src: string;
  alt: string;
}

const StyledImage = styled.img`
  border-radius: 8.2px;
  height: auto;
  margin: auto;
  display: flex;
`;

const CustomImage = ({ src, alt }: ImageProps) => {
  return <StyledImage src={src} alt={alt} width={275} height={200} />;
};

export default CustomImage;
