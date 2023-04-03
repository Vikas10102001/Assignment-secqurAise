import { styled } from "@mui/system";
import React, { useEffect, useState } from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import LoadingSpinner from "../../../utils/shared/LoadingSpinner";
const Wrapper = styled("div")({
  flex: 2,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const ImageContainer = styled("img")({
  width: "26vw",
  height: "85vh",
  "@media(max-width:1000px)": {
    objectFit:'contain',
    width:'30vw',
    height:'40vh'
  },
});
export default function DetailImage({ imageName }) {
  console.log(imageName);
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (imageName) {
      setLoading(true);
      const storage = getStorage();
      const pathReference = ref(storage, `/${imageName}.jpg`);
      if (pathReference) {
        getDownloadURL(pathReference)
          .then((url) => {
            setImageUrl(url);
            setLoading(false);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  }, [imageName]);

  return (
    <Wrapper>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <ImageContainer src={imageUrl} alt={`${imageName} img`} />
      )}
    </Wrapper>
  );
}
