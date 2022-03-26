import { uuid } from "uuidv4";

const posts = [
  {
    id: uuid(),
    username: "mrcheddeezy",
    avatar:
      "https://cdn.glitch.com/bf27959f-3e99-4155-89b1-964a21f4a2be%2Fchedda.png?1551856721270https://cdn.glitch.com/bf27959f-3e99-4155-89b1-964a21f4a2be%2Fchedda.png?1551856721270",
    location: "Sunnyvale, California",
    images: [
      "https://cdn.glitch.global/defde32e-0437-4c3e-97f8-d19d5c735508/271361154_464122428620724_4386864933514307310_n.jpeg?v=1648263526009",
      "https://connect-files-public.s3.amazonaws.com/f1b42b08-2401-4125-b8e1-3d3914c86eca-500x500.jpg"
    ],
    likes: 304,
    comments: [
      {
        id: uuid(),
        username: "mrcheddeezy",
        comment: "Doin' it big in the 2020! COVID-19, where you at?!"
      },
      {
        id: uuid(),
        username: "danger_mouse",
        comment: "Why? Just WHY?!?"
      }
    ],
    time_ago: "now"
  },
  {
    id: uuid(),
    username: "marilyn.monroe",
    avatar:
      "https://webcdn.appcloudbox.net/zmoji/wp-content/uploads/2019/11/5-Incredible-Avatar-Maker-Free-Tools-You%E2%80%99ve-Missed-Before.jpg",
    location: "Northridge, California",
    images: [
      "https://cdn.glitch.com/defde32e-0437-4c3e-97f8-d19d5c735508%2Fstella-reduced.jpg?v=1551041433155",
      "https://cdn.glitch.com/defde32e-0437-4c3e-97f8-d19d5c735508%2Fsola-reduced.jpg?v=1551041778506"
    ],
    likes: 220,
    comments: [
      {
        id: uuid(),
        username: "marilyn.monroe",
        comment:
          "Happy to be collaborating with @shoepalace even though I'm dead"
      }
    ],
    time_ago: "21 minutes ago"
  },
  {
    id: uuid(),
    username: "justinbua",
    // avatar: 'https://i.pinimg.com/236x/51/79/7f/51797f1fe0b98932291b87527c115470--business-hair-headshot-photography.jpg',
    avatar:
      "https://scontent-lax3-2.cdninstagram.com/v/t51.2885-19/265375683_446752960298575_8053104741823009391_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-lax3-2.cdninstagram.com&_nc_cat=107&_nc_ohc=mBlE8QPfQ4gAX_bY-3f&edm=AId3EpQBAAAA&ccb=7-4&oh=00_AT91UZIgyJRLs4RmwwlgM5HoMMt9D_TkpB452Zm2VKMkMg&oe=6245F1D3&_nc_sid=705020",
    location: "DTLA, California",
    images: [
      "https://cdn.glitch.global/defde32e-0437-4c3e-97f8-d19d5c735508/277114770_429345262286600_3948382885861999048_n.jpg?v=1648263643722",
      "https://scontent-lax3-2.cdninstagram.com/v/t51.2885-15/277170659_5085463564833463_6986246827509531288_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-lax3-2.cdninstagram.com&_nc_cat=107&_nc_ohc=-k8YgoNWFQwAX8avhCu&tn=SHWLhCyJ8hvAmIH-&edm=ALQROFkBAAAA&ccb=7-4&ig_cache_key=MjgwMTM2OTA0NzQ0MzY2MDgxOA%3D%3D.2-ccb7-4&oh=00_AT-p_MU0xrtMfX1KA9uebg1spR1xSGAjWrwz_GXjfsHoVA&oe=6244B7C1&_nc_sid=30a2ef"
    ],
    likes: 2802,
    comments: [
      {
        id: uuid(),
        username: "justinbua",
        comment:
          "Today in LA, we all celebrate the life of Kobe Bryant. 2/24 will always be a day of rememberance."
      },
      {
        id: uuid(),
        username: "BosTonFan",
        comment: "Legend!!"
      }
    ],
    time_ago: "1 hour ago"
  },
  {
    id: uuid(),
    username: "sneakersteal",
    // avatar: 'https://i.pinimg.com/236x/51/79/7f/51797f1fe0b98932291b87527c115470--business-hair-headshot-photography.jpg',
    avatar:
      "https://scontent-lax3-2.cdninstagram.com/v/t51.2885-19/11821322_1893815210843496_1418515330_a.jpg?_nc_ht=scontent-lax3-2.cdninstagram.com&_nc_ohc=nWPWiecYYisAX_GQRVk&oh=99886f1a769392f02b5a2c5ad4022da4&oe=5F3580ED",
    location: "SneakerVille, California",
    images: [
      "https://cdn.glitch.global/defde32e-0437-4c3e-97f8-d19d5c735508/277112164_947240015965412_3329258148198843570_n.jpeg?v=1648263744618"
    ],
    likes: 14210,
    comments: [
      {
        id: uuid(),
        username: "seneGal",
        comment: "So fresh and so Cleaaan. Ayyyyyye"
      },
      {
        id: uuid(),
        username: "dani.lover",
        comment: "gotta cop!! these go supppppppperrrr hardddd!"
      }
    ],
    time_ago: "2 hours ago"
  },
  {
    id: uuid(),
    username: "nicekicks",
    avatar:
      "https://scontent-lax3-2.cdninstagram.com/v/t51.2885-19/s150x150/106580403_2787766481454752_8907627655806728126_n.jpg?_nc_ht=scontent-lax3-2.cdninstagram.com&_nc_ohc=mgCCdgyXjbcAX9HOt7C&oh=ac31ad0d80f020986f65f2640ec2b7fd&oe=5F34FB3A",
    locaation: "",
    images: [
      "https://scontent-lax3-2.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/108207029_712710996192821_2846303006584366404_n.jpg?_nc_ht=scontent-lax3-2.cdninstagram.com&_nc_cat=1&_nc_ohc=luwoFevk1GUAX-grJhj&oh=3bb795ebcc0d371bc90437e7856a54e6&oe=5F36EC90"
    ],
    likes: 2554,
    comments: [
      {
        id: uuid(),
        username: "nicekicks",
        comment:
          "The first 100 people to comment will be entered into a raffle to cop these for free–on us–no charge."
      }
    ]
  }
];

// {
//     id: uuid(),
//     username: 'mariaisabel',
//     // avatar: 'https://i.pinimg.com/236x/51/79/7f/51797f1fe0b98932291b87527c115470--business-hair-headshot-photography.jpg',
//     avatar: 'https://scontent-lax3-2.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/104067544_266425031112779_1995066686470068288_n.jpg?_nc_ht=scontent-lax3-2.cdninstagram.com&_nc_cat=111&_nc_ohc=8TU39ykZvXEAX9Ra9x6&oh=fbaf95b9a27fc37400f4bc8ca7753ec4&oe=5F3732F9',
//     location: 'Hollywood, California',
//     images: [
//       'https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/84082675_188423985747982_97554105851577948_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=110&_nc_ohc=-7c23mGI04YAX8FmVwO&oh=fa83bb66607a402bbce1690f9af0383d&oe=5F394166',
//       'https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/104475647_262450538345134_3931475617894547744_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=110&_nc_ohc=gsyKFijS-pEAX-C0l_K&oh=f32ce55275b896c3d8f1e5365ef99ad1&oe=5F36B435'
//     ],
//     likes: 1220,
//     comments: [
//       {
//         id: uuid(),
//         username: 'mariaisabel',
//         comment: 'Yankees represent!'
//       },
//       {
//         id: uuid(),
//         username: 'BosTonFan',
//         comment: "Nah... Sox all the way!!"
//       },
//     ],
//     time_ago: '1 hour ago'
//   },

export default posts;
