import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import styled from 'styled-components';


const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function Gallery ({ photos }) {
  const classes = useStyles();
  return (
    <StyledContainer>
      <StyledPhotoContainer>
      {
        photos?.map(({ id, urls, user, alt_description, description }) => {
          return (
            <Card key={id}>
              <CardHeader
                avatar={
                  <Avatar className={classes.avatar} alt={user?.name} src={user?.profile_image.medium} />
                }
                title={user?.name}
              />
              <CardMedia
                className={classes.media}
                image={urls.regular}
                title={alt_description}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {description}
                </Typography>
              </CardContent>
            </Card>
          )
        })
      }
      </StyledPhotoContainer>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  padding: 20px 10%;
`;
const StyledPhotoContainer = styled.div`
  //display: flex;
  //justify-content: space-around;
  //flex-wrap: wrap;
  //width: 80%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 345px);
  grid-gap: 1rem;
  justify-content: center;
`;
export default Gallery;
