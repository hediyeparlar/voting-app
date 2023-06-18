import styled from "styled-components";

interface ImageProps {
  src: string;
  alt: string;
}

const StyledImage = styled.img`
  border-radius: 8px;
  height: auto;
`;

const CustomImage = ({ src, alt }: ImageProps) => {
  return <StyledImage src={src} alt={alt} width={240} height={200} />;
};

export default CustomImage;
