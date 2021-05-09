import {useCallback, useEffect, useState} from "react";
import {createApi} from "unsplash-js";
import AppBar from "./src/components/AppBar";
import Gallery from "./src/components/Gallery";
import styled from 'styled-components';

//TODO: Replace with your own API Here!!
const api = createApi({
  accessKey: "YOUR_UNSPLASH_API"
});

const usePhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);

  const fetchPhotos = useCallback(async (options) => {
    setLoading(true);
    setPhotos([]);
    setError('');
    try {
      const res = await api.search.getPhotos({
        ...options,
        page: 1,
      });
      if (res?.errors) {
        throw new Error(res.errors[0]);
      }
      setPhotos(res?.response?.results ?? []);
      setPage(1);
    } catch (error) {
      // handle both client side and server side error
      setError(error.message);
    }
    setLoading(false);
  }, []);

  const fetchMorePhotos = useCallback(async (options) => {
    setLoading(true);
    setError('');

    try {
      const res = await api.search.getPhotos({
        ...options,
        page: page + 1,
      });
      if (res?.errors) {
        throw new Error(res.errors[0]);
      }
      setPhotos((photos) => [...photos, ...res?.response?.results ?? []]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false)
  }, [page])
  return ({
    loading,
    error,
    photos,
    fetchPhotos,
    fetchMorePhotos
  })
}

function App() {
  const [searchValue, setSearchValue] = useState('Landscape');
  const {loading, error, photos, fetchPhotos, fetchMorePhotos} = usePhotos()
  const onSearchChange = useCallback((e) => {
    setSearchValue(e.target.value);
  }, []);

  const onSearchClicked = useCallback(() => {
    fetchPhotos({
      query: searchValue,
      orientation: "landscape",
    })
  }, [searchValue, fetchMorePhotos])

  useEffect(() => {
    // Initialization
    fetchPhotos({
      query: searchValue,
      orientation: "landscape",
    })
  }, []);

  useEffect(() => {
    const listener =  () => {
      if (isScrolledToBottom()) {
        fetchMorePhotos({
          query: searchValue,
          orientation: "landscape"
        })
      }
    }
    window.addEventListener('scroll', listener)
    return () => window.removeEventListener('scroll', listener);
  }, [searchValue, fetchMorePhotos]);

  return (
    <div>
      <AppBar
        searchValue={searchValue}
        onSearchChange={onSearchChange}
        onSearch={onSearchClicked}
      />
      {/*{loading && <StyledSpinnerContainer><CircularProgress size="5rem" /></StyledSpinnerContainer>}*/}
      {error ? <div>{error}</div> : <Gallery photos={photos}/>}
    </div>
  );
}

const StyledSpinnerContainer = styled.div`
  position: fixed;
  display: flex;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
`;

function isScrolledToBottom() {
  return (window.innerHeight + window.pageYOffset) >= document.body.offsetHeight
}

export default App;
