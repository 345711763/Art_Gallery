import { render, screen } from '@testing-library/react';

import Gallery from "./index";
const mockData = [{
  "id"
    :
    "gKXKBY-C-Dk",
  "created_at"
    :
    "2018-01-02T05:20:47-05:00",
  "updated_at"
    :
    "2021-05-08T03:03:07-04:00",
  "promoted_at"
    :
    null,
  "width"
    :
    5026,
  "height"
    :
    3458,
  "color"
    :
    "#598c73",
  "blur_hash"
    :
    "LDCtq6Me0_kp3mof%MofUwkp,cRP",
  "description"
    :
    "Gipsy the Cat was sitting on a bookshelf one afternoon and just stared right at me, kinda saying: “Will you take a picture already?”",
  "alt_description"
    :
    "black and white cat lying on brown bamboo chair inside room",
  "urls"
    :
    {
      "raw"
        :
        "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixid=MnwyMjk0NzB8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHwwfHx8MTYyMDUwODE1MQ&ixlib=rb-1.2.1",
      "full"
        :
        "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMjk0NzB8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHwwfHx8MTYyMDUwODE1MQ&ixlib=rb-1.2.1&q=85",
      "regular"
        :
        "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjk0NzB8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHwwfHx8MTYyMDUwODE1MQ&ixlib=rb-1.2.1&q=80&w=1080",
      "small"
        :
        "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjk0NzB8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHwwfHx8MTYyMDUwODE1MQ&ixlib=rb-1.2.1&q=80&w=400",
      "thumb"
        :
        "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjk0NzB8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHwwfHx8MTYyMDUwODE1MQ&ixlib=rb-1.2.1&q=80&w=200"
    }
  ,
  "links"
    :
    {
      "self"
        :
        "https://api.unsplash.com/photos/gKXKBY-C-Dk",
      "html"
        :
        "https://unsplash.com/photos/gKXKBY-C-Dk",
      "download"
        :
        "https://unsplash.com/photos/gKXKBY-C-Dk/download",
      "download_location"
        :
        "https://api.unsplash.com/photos/gKXKBY-C-Dk/download?ixid=MnwyMjk0NzB8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHwwfHx8MTYyMDUwODE1MQ"
    }
  ,
  "categories"
    :
    [],
  "likes"
    :
    639,
  "liked_by_user"
    :
    false,
  "current_user_collections"
    :
    [],
  "sponsorship"
    :
    null,
  "user"
    :
    {
      "id"
        :
        "wBu1hC4QlL0",
      "updated_at"
        :
        "2021-05-08T13:12:44-04:00",
      "username"
        :
        "madhatterzone",
      "name"
        :
        "Manja Vitolic",
      "first_name"
        :
        "Manja",
      "last_name"
        :
        "Vitolic",
      "twitter_username"
        :
        null,
      "portfolio_url"
        :
        "https://www.instagram.com/makawee_photography/?hl=en",
      "bio"
        :
        "https://www.facebook.com/makaweephoto",
      "location"
        :
        "Wiesbaden, Germany",
      "links"
        :
        {
          "self"
            :
            "https://api.unsplash.com/users/madhatterzone",
          "html"
            :
            "https://unsplash.com/@madhatterzone",
          "photos"
            :
            "https://api.unsplash.com/users/madhatterzone/photos",
          "likes"
            :
            "https://api.unsplash.com/users/madhatterzone/likes",
          "portfolio"
            :
            "https://api.unsplash.com/users/madhatterzone/portfolio",
          "following"
            :
            "https://api.unsplash.com/users/madhatterzone/following",
          "followers"
            :
            "https://api.unsplash.com/users/madhatterzone/followers"
        }
      ,
      "profile_image"
        :
        {
          "small"
            :
            "https://images.unsplash.com/profile-fb-1514888261-0e72294039e0.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
          "medium"
            :
            "https://images.unsplash.com/profile-fb-1514888261-0e72294039e0.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
          "large"
            :
            "https://images.unsplash.com/profile-fb-1514888261-0e72294039e0.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
        }
      ,
      "instagram_username"
        :
        "makawee_photography",
      "total_collections"
        :
        0,
      "total_likes"
        :
        10,
      "total_photos"
        :
        65,
      "accepted_tos"
        :
        true,
      "for_hire"
        :
        true
    }
  ,
  "tags"
    :
    [
      {
        "type": "landing_page",
        "title": "cat",
        "source": {
          "ancestry": {
            "type": {
              "slug": "images",
              "pretty_slug": "Images"
            },
            "category": {
              "slug": "animals",
              "pretty_slug": "Animals"
            },
            "subcategory": {
              "slug": "cat",
              "pretty_slug": "Cat"
            }
          },
          "title": "Cat Images & Pictures",
          "subtitle": "Download free cat images",
          "description": "9 lives isn't enough to capture the amazing-ness of cats. You need high-quality, professionally photographed images to do that. Unsplash's collection of cat images capture the wonder of the kitty in high-definition, and you can use these images however you wish for free.",
          "meta_title": "20+ Cat Pictures & Images [HD] | Download Free Images & Stock Photos on Unsplash",
          "meta_description": "Choose from hundreds of free cat pictures. Download HD cat photos for free on Unsplash.",
          "cover_photo": {
            "id": "_SMNO4cN9vs",
            "created_at": "2018-12-30T12:17:38-05:00",
            "updated_at": "2021-04-21T01:07:21-04:00",
            "promoted_at": "2019-01-01T05:23:58-05:00",
            "width": 4000,
            "height": 4000,
            "color": "#0c0c26",
            "blur_hash": "L012.;oL4=WBt6j@Rlay4;ay^iof",
            "description": "Glow in the Dark",
            "alt_description": "yellow eyes",
            "urls": {
              "raw": "https://images.unsplash.com/photo-1546190255-451a91afc548?ixlib=rb-1.2.1",
              "full": "https://images.unsplash.com/photo-1546190255-451a91afc548?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb",
              "regular": "https://images.unsplash.com/photo-1546190255-451a91afc548?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
              "small": "https://images.unsplash.com/photo-1546190255-451a91afc548?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
              "thumb": "https://images.unsplash.com/photo-1546190255-451a91afc548?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max"
            },
            "links": {
              "self": "https://api.unsplash.com/photos/_SMNO4cN9vs",
              "html": "https://unsplash.com/photos/_SMNO4cN9vs",
              "download": "https://unsplash.com/photos/_SMNO4cN9vs/download",
              "download_location": "https://api.unsplash.com/photos/_SMNO4cN9vs/download"
            },
            "categories": [],
            "likes": 513,
            "liked_by_user": false,
            "current_user_collections": [],
            "sponsorship": null,
            "user": {
              "id": "KlbPlQFM3j4",
              "updated_at": "2021-04-20T09:23:41-04:00",
              "username": "unlesbar_1608112_sink",
              "name": "Stephan Henning",
              "first_name": "Stephan",
              "last_name": "Henning",
              "twitter_username": null,
              "portfolio_url": null,
              "bio": null,
              "location": "Germany",
              "links": {
                "self": "https://api.unsplash.com/users/unlesbar_1608112_sink",
                "html": "https://unsplash.com/@unlesbar_1608112_sink",
                "photos": "https://api.unsplash.com/users/unlesbar_1608112_sink/photos",
                "likes": "https://api.unsplash.com/users/unlesbar_1608112_sink/likes",
                "portfolio": "https://api.unsplash.com/users/unlesbar_1608112_sink/portfolio",
                "following": "https://api.unsplash.com/users/unlesbar_1608112_sink/following",
                "followers": "https://api.unsplash.com/users/unlesbar_1608112_sink/followers"
              },
              "profile_image": {
                "small": "https://images.unsplash.com/profile-1531167540173-a920494357e7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
                "medium": "https://images.unsplash.com/profile-1531167540173-a920494357e7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
                "large": "https://images.unsplash.com/profile-1531167540173-a920494357e7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
              },
              "instagram_username": null,
              "total_collections": 3,
              "total_likes": 73,
              "total_photos": 0,
              "accepted_tos": true,
              "for_hire": false
            }
          }
        }
      },
      {
        "type": "search",
        "title": "pet"
      },
      {
        "type": "landing_page",
        "title": "animal",
        "source": {
          "ancestry": {
            "type": {
              "slug": "images",
              "pretty_slug": "Images"
            },
            "category": {
              "slug": "animals",
              "pretty_slug": "Animals"
            }
          },
          "title": "Animals Images & Pictures",
          "subtitle": "Download free animals images",
          "description": "Passionate photographers have captured the most gorgeous animals in the world in their natural habitats and shared them with Unsplash. Now you can use these photos however you wish, for free!",
          "meta_title": "Best 20+ Animals Pictures [HD] | Download Free Images on Unsplash",
          "meta_description": "Choose from hundreds of free animals pictures. Download HD animals photos for free on Unsplash.",
          "cover_photo": {
            "id": "YozNeHM8MaA",
            "created_at": "2017-04-18T13:00:04-04:00",
            "updated_at": "2021-04-16T01:01:26-04:00",
            "promoted_at": "2017-04-19T13:54:55-04:00",
            "width": 5184,
            "height": 3456,
            "color": "#f3f3c0",
            "blur_hash": "LPR{0ext~pIU%MRQM{%M%LozIBM|",
            "description": "I met this dude on safari in Kruger National park in northern South Africa. The giraffes were easily in my favorite creatures to witness. They seemed almost prehistoric the the way the graced the African plain.",
            "alt_description": "selective focus photography of giraffe",
            "urls": {
              "raw": "https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-1.2.1",
              "full": "https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb",
              "regular": "https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
              "small": "https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
              "thumb": "https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max"
            },
            "links": {
              "self": "https://api.unsplash.com/photos/YozNeHM8MaA",
              "html": "https://unsplash.com/photos/YozNeHM8MaA",
              "download": "https://unsplash.com/photos/YozNeHM8MaA/download",
              "download_location": "https://api.unsplash.com/photos/YozNeHM8MaA/download"
            },
            "categories": [],
            "likes": 1384,
            "liked_by_user": false,
            "current_user_collections": [],
            "sponsorship": null,
            "user": {
              "id": "J6cg9TA8-e8",
              "updated_at": "2021-04-05T19:53:40-04:00",
              "username": "judahlegge",
              "name": "Judah Legge",
              "first_name": "Judah",
              "last_name": "Legge",
              "twitter_username": null,
              "portfolio_url": null,
              "bio": null,
              "location": null,
              "links": {
                "self": "https://api.unsplash.com/users/judahlegge",
                "html": "https://unsplash.com/@judahlegge",
                "photos": "https://api.unsplash.com/users/judahlegge/photos",
                "likes": "https://api.unsplash.com/users/judahlegge/likes",
                "portfolio": "https://api.unsplash.com/users/judahlegge/portfolio",
                "following": "https://api.unsplash.com/users/judahlegge/following",
                "followers": "https://api.unsplash.com/users/judahlegge/followers"
              },
              "profile_image": {
                "small": "https://images.unsplash.com/profile-fb-1492532922-001f65e39343.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
                "medium": "https://images.unsplash.com/profile-fb-1492532922-001f65e39343.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
                "large": "https://images.unsplash.com/profile-fb-1492532922-001f65e39343.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
              },
              "instagram_username": null,
              "total_collections": 0,
              "total_likes": 4,
              "total_photos": 1,
              "accepted_tos": false,
              "for_hire": false
            }
          }
        }
      }
    ]
}]
describe("Gallery Test", () => {
  test("Description of photo should be rendered", () => {
      render(<Gallery photos={mockData} />);
      expect(screen.getByText(mockData[0].description)).toBeInTheDocument();
    }
  );
  test("Avatar should be rendered", () => {
    render(<Gallery photos={mockData} />);
    screen.debug();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
})
