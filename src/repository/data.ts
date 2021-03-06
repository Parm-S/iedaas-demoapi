const teams = [
  {
    id: "chennai-super-kings",
    teamName: "Chennai Super Kings",
    winningYears: [2010, 2011, 2018],
    venue: "M. A. Chidambaram Stadium",
  },
  {
    id: "delhi-capitals",
    teamName: "Delhi Capitals",
    winningYears: [],
    venue: "Feroz Shah Kotla Ground",
  },
  {
    id: "kings-xi-punjab",
    teamName: "Kings XI Punjab",
    winningYears: [],
    venue: "IS Bindra Stadium",
  },
  {
    id: "kolkata-knight-riders",
    teamName: "Kolkata Knight Riders",
    winningYears: [2012, 2014],
    venue: "Eden Gardens",
  },
  {
    id: "mumbai-indians",
    teamName: "Mumbai Indians",
    winningYears: [2013, 2015, 2017, 2019],
    venue: "Wankhede Stadium",
  },
  {
    id: "rajasthan-royals",
    teamName: "Rajasthan Royals",
    winningYears: [2008],
    venue: "Sawai Mansingh Stadium",
  },
  {
    id: "royal-challengers-bangalore",
    teamName: "Royal Challengers Bangalore",
    winningYears: [],
    venue: "M. Chinnaswamy Stadium",
  },
  {
    id: "sunrisers-hyderabad",
    teamName: "Sunrisers Hyderabad",
    winningYears: [2016],
    venue: "Rajiv Gandhi Intl. Cricket Stadium",
  },
];
interface ITeamData {
  [id: string]: {
    team: {
      captainId: string;
      wicketKeeperId: string;
    };
    players: IPlayer[];
  };
}
interface IPlayer {
  id:string,
  name:string,
  nationality:string,
  image:string
  stats:Istats,
}
interface Istats {
  matches: number,
  runs:number,
  wickets:number
}
const teamData: ITeamData = {
  "chennai-super-kings": {
    team: {
      captainId: "2101",
      wicketKeeperId: "2109",
    },
    players: [
      {
        id: "2101",
        name: "MS Dhoni",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/1.png",
        stats: {
          matches: 15,
          runs: 416,
          wickets: 0,
        },
      },
      {
        id: "210898",
        name: "Imran Tahir",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/898.png",
        stats: {
          matches: 17,
          runs: 0,
          wickets: 26,
        },
      },
      {
        id: "2103746",
        name: "Lungi Ngidi",
        nationality: "",
        image: "https://iplstatic.s3.amazonaws.com/players/210/3746.png",
        stats: {
          matches: 10,
          runs: 76,
          wickets: 3,
        },
      },
      {
        id: "2105443",
        name: "Ruthuraj Gaikwad",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/5443.png",
        stats: {
          matches: 0,
          runs: 33,
          wickets: 0,
        },
      },
      {
        id: "210227",
        name: "Shane Watson",
        nationality: "",
        image: "https://iplstatic.s3.amazonaws.com/players/210/227.png",
        stats: {
          matches: 15,
          runs: 398,
          wickets: 10,
        },
      },
      {
        id: "210100",
        name: "Ambati Rayudu",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/100.png",
        stats: {
          matches: 17,
          runs: 282,
          wickets: 0,
        },
      },
      {
        id: "2107",
        name: "Murali Vijay",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/7.png",
        stats: {
          matches: 9,
          runs: 18,
          wickets: 1,
        },
      },
      {
        id: "210297",
        name: "Kedar Jadhav",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/297.png",
        stats: {
          matches: 14,
          runs: 162,
          wickets: 1,
        },
      },
      {
        id: "2109",
        name: "Ravindra Jadeja",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/9.png",
        stats: {
          matches: 16,
          runs: 106,
          wickets: 15,
        },
      },
      {
        id: "210140",
        name: "Deepak Chahar",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/140.png",
        stats: {
          matches: 7,
          runs: 34,
          wickets: 0,
        },
      },
      {
        id: "2104942",
        name: "Narayan Jagadeesan",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/4942.png",
        stats: {
          matches: 0,
          runs: 0,
          wickets: 0,
        },
      },
    ],
  },
  "delhi-capitals": {
    team: {
      captainId: "2101563",
      wicketKeeperId: "2101664",
    },
    players: [
      {
        id: "2101563",
        name: "Shreyas Iyer",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/1563.png",
        stats: {
          matches: 16,
          runs: 463,
          wickets: 0,
        },
      },
      {
        id: "2101664",
        name: "Kagiso Rabada",
        nationality: "",
        image: "https://iplstatic.s3.amazonaws.com/players/210/1664.png",
        stats: {
          matches: 12,
          runs: 14,
          wickets: 25,
        },
      },
      {
        id: "21038",
        name: "Ishant Sharma",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/38.png",
        stats: {
          matches: 13,
          runs: 10,
          wickets: 13,
        },
      },
      {
        id: "21041",
        name: "Shikar Dhawan",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/41.png",
        stats: {
          matches: 16,
          runs: 521,
          wickets: 0,
        },
      },
      {
        id: "2103764",
        name: "Prithwi Shaw",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/3764.png",
        stats: {
          matches: 16,
          runs: 353,
          wickets: 10,
        },
      },
      {
        id: "2101113",
        name: "Axar Patel",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/1113.png",
        stats: {
          matches: 14,
          runs: 110,
          wickets: 10,
        },
      },
      {
        id: "2102972",
        name: "Rishabh Pant",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/2972.png",
        stats: {
          matches: 16,
          runs: 488,
          wickets: 0,
        },
      },
      {
        id: "21030",
        name: "Amit Mishra",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/30.png",
        stats: {
          matches: 11,
          runs: 21,
          wickets: 11,
        },
      },
    ],
  },
  "kings-xi-punjab": {
    team: {
      captainId: "2108",
      wicketKeeperId: "21094",
    },
    players: [
      {
        id: "2101125",
        name: "KL Rahul",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/1125.png",
        stats: {
          matches: 14,
          runs: 593,
          wickets: 0,
        },
      },
      {
        id: "2105441",
        name: "Harpreet Brar",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/5441.png",
        stats: {
          matches: 2,
          runs: 20,
          wickets: 0,
        },
      },
      {
        id: "21072",
        name: "Mandeep Singh",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/72.png",
        stats: {
          matches: 13,
          runs: 165,
          wickets: 0,
        },
      },
      {
        id: "210276",
        name: "Karun Nair",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/276.png",
        stats: {
          matches: 1,
          runs: 5,
          wickets: 0,
        },
      },
      {
        id: "2104698",
        name: "Arshdeep Singh",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/4698.png",
        stats: {
          matches: 6,
          runs: 10,
          wickets: 1,
        },
      },
      {
        id: "2104572",
        name: "Mujeeb Rahman",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/4572.png",
        stats: {
          matches: 5,
          runs: 0,
          wickets: 3,
        },
      },
      {
        id: "2101564",
        name: "Sarfaraz Khan",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/1564.png",
        stats: {
          matches: 8,
          runs: 180,
          wickets: 0,
        },
      },
      {
        id: "21094",
        name: "Mohammad Shami",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/94.png",
        stats: {
          matches: 14,
          runs: 1,
          wickets: 19,
        },
      },
      {
        id: "2108",
        name: "Ravichandran Ashwin",
        nationality: "Indian",
        image:
          "https://iplstatic.s3.amazonaws.com/players/210/Photo-Missing.png",
        stats: {
          matches: 14,
          runs: 42,
          wickets: 15,
        },
      },
    ],
  },
  "kolkata-knight-riders": {
    team: {
      captainId: "210102",
      wicketKeeperId: "210102",
    },
    players: [
      {
        id: "210102",
        name: "Dinesh Karthik",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/102.png",
        stats: {
          matches: 14,
          runs: 253,
          wickets: 0,
        },
      },
      {
        id: "210177",
        name: "Andre Russell",
        nationality: "",
        image: "https://iplstatic.s3.amazonaws.com/players/210/177.png",
        stats: {
          matches: 14,
          runs: 510,
          wickets: 11,
        },
      },
      {
        id: "2101737",
        name: "Harry Gurney",
        nationality: "",
        image: "https://iplstatic.s3.amazonaws.com/players/210/1737.png",
        stats: {
          matches: 8,
          runs: 1,
          wickets: 7,
        },
      },
      {
        id: "210261",
        name: "Kuldeep Yadav",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/261.png",
        stats: {
          matches: 9,
          runs: 12,
          wickets: 4,
        },
      },
      {
        id: "2103761",
        name: "Shubman Gill",
        nationality: "",
        image: "https://iplstatic.s3.amazonaws.com/players/210/3761.png",
        stats: {
          matches: 14,
          runs: 296,
          wickets: 0,
        },
      },
      {
        id: "210203",
        name: "Sunil Narine",
        nationality: "",
        image: "https://iplstatic.s3.amazonaws.com/players/210/203.png",
        stats: {
          matches: 12,
          runs: 143,
          wickets: 10,
        },
      },
      {
        id: "210488",
        name: "Pat Cummins",
        nationality: "",
        image:
          "https://iplstatic.s3.amazonaws.com/players/210/Photo-Missing.png",
        stats: {
          matches: 9,
          runs: 200,
          wickets: 2,
        },
      },
      {
        id: "2103830",
        name: "Rinku Singh",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/3830.png",
        stats: {
          matches: 5,
          runs: 37,
          wickets: 0,
        },
      },
      {
        id: "2103779",
        name: "Shivam Mavi",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/3779.png",
        stats: {
          matches: 15,
          runs: 120,
          wickets: 1,
        },
      },
      {
        id: "2103838",
        name: "Rahul Tripati",
        nationality: "Indian",
        image:
          "https://iplstatic.s3.amazonaws.com/players/210/Photo-Missing.png",
        stats: {
          matches: 13,
          runs: 66,
          wickets: 0,
        },
      },
      {
        id: "2105105",
        name: "Prasidh Krishna",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/5105.png",
        stats: {
          matches: 11,
          runs: 0,
          wickets: 4,
        },
      },
    ],
  },
  "mumbai-indians": {
    team: {
      captainId: "210107",
      wicketKeeperId: "2101124",
    },
    players: [
      {
        id: "210107",
        name: "Rohit Sharma",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/107.png",
        stats: {
          matches: 15,
          runs: 405,
          wickets: 0,
        },
      },
      {
        id: "21099",
        name: "Adithya Tare",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/99.png",
        stats: {
          matches: 0,
          runs: 0,
          wickets: 0,
        },
      },
      {
        id: "2102965",
        name: "Anmolpreet Singh",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/2965.png",
        stats: {
          matches: 0,
          runs: 0,
          wickets: 0,
        },
      },
      {
        id: "2103774",
        name: "Anukul Roy",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/3774.png",
        stats: {
          matches: 1,
          runs: 0,
          wickets: 1,
        },
      },
      {
        id: "2102740",
        name: "Hardik Pandya",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/2740.png",
        stats: {
          matches: 16,
          runs: 402,
          wickets: 14,
        },
      },
      {
        id: "2102975",
        name: "Ishan Kishan",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/2975.png",
        stats: {
          matches: 7,
          runs: 101,
          wickets: 0,
        },
      },
      {
        id: "2101124",
        name: "Jaspreet Bumrah",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/1124.png",
        stats: {
          matches: 16,
          runs: 0,
          wickets: 19,
        },
      },
      {
        id: "2101740",
        name: "Jayant Yadhav",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/1740.png",
        stats: {
          matches: 2,
          runs: 0,
          wickets: 1,
        },
      },
      {
        id: "210210",
        name: "Kieron Pollard",
        nationality: "",
        image: "https://iplstatic.s3.amazonaws.com/players/210/210.png",
        stats: {
          matches: 16,
          runs: 279,
          wickets: 0,
        },
      },
      {
        id: "210730",
        name: "Mitchell McClenaghan",
        nationality: "",
        image: "https://iplstatic.s3.amazonaws.com/players/210/730.png",
        stats: {
          matches: 5,
          runs: 11,
          wickets: 3,
        },
      },
    ],
  },
  "rajasthan-royals": {
    team: {
      captainId: "210271",
      wicketKeeperId: "2101748",
    },
    players: [
      {
        id: "2101154",
        name: "Ben Stokes",
        nationality: "",
        image: "https://iplstatic.s3.amazonaws.com/players/210/1154.png",
        stats: {
          matches: 9,
          runs: 123,
          wickets: 6,
        },
      },
      {
        id: "210258",
        name: "Sanju Samson",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/258.png",
        stats: {
          matches: 12,
          runs: 342,
          wickets: 0,
        },
      },
      {
        id: "210271",
        name: "Steve Smith",
        nationality: "",
        image: "https://iplstatic.s3.amazonaws.com/players/210/271.png",
        stats: {
          matches: 12,
          runs: 319,
          wickets: 0,
        },
      },
      {
        id: "2101748",
        name: "Shreyas Gopal",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/1748.png",
        stats: {
          matches: 14,
          runs: 63,
          wickets: 20,
        },
      },
      {
        id: "210135",
        name: "Ajinkya Rahane",
        nationality: "Indian",
        image:
          "https://iplstatic.s3.amazonaws.com/players/210/Photo-Missing.png",
        stats: {
          matches: 14,
          runs: 393,
          wickets: 0,
        },
      },
      {
        id: "2102970",
        name: "Mahipal Lomror",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/2970.png",
        stats: {
          matches: 2,
          runs: 8,
          wickets: 0,
        },
      },
      {
        id: "210101",
        name: "Dhawal Kulkarni",
        nationality: "Indian",
        image:
          "https://iplstatic.s3.amazonaws.com/players/210/Photo-Missing.png",
        stats: {
          matches: 10,
          runs: 5,
          wickets: 6,
        },
      },
      {
        id: "2105146",
        name: "Oshane Thomas",
        nationality: "",
        image: "https://iplstatic.s3.amazonaws.com/players/210/5146.png",
        stats: {
          matches: 4,
          runs: 0,
          wickets: 5,
        },
      },
    ],
  },
  "royal-challengers-bangalore": {
    team: {
      captainId: "210164",
      wicketKeeperId: "2103840",
    },
    players: [
      {
        id: "210164",
        name: "Virat Kohli",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/164.png",
        stats: {
          matches: 14,
          runs: 464,
          wickets: 0,
        },
      },
      {
        id: "2103840",
        name: "Mohammed Siraj",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/3840.png",
        stats: {
          matches: 9,
          runs: 4,
          wickets: 7,
        },
      },
      {
        id: "210964",
        name: "Marcus Stionis",
        nationality: "",
        image:
          "https://iplstatic.s3.amazonaws.com/players/210/Photo-Missing.png",
        stats: {
          matches: 10,
          runs: 211,
          wickets: 2,
        },
      },
      {
        id: "2101735",
        name: "Moeen Ali",
        nationality: "",
        image: "https://iplstatic.s3.amazonaws.com/players/210/1735.png",
        stats: {
          matches: 11,
          runs: 220,
          wickets: 6,
        },
      },
      {
        id: "2103177",
        name: "Akshaydeep Nath",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/3177.png",
        stats: {
          matches: 8,
          runs: 61,
          wickets: 0,
        },
      },
      {
        id: "210233",
        name: "AB de Villiers",
        nationality: "",
        image: "https://iplstatic.s3.amazonaws.com/players/210/233.png",
        stats: {
          matches: 13,
          runs: 442,
          wickets: 0,
        },
      },
      {
        id: "2101705",
        name: "Shimron Hitmyer",
        nationality: "",
        image:
          "https://iplstatic.s3.amazonaws.com/players/210/Photo-Missing.png",
        stats: {
          matches: 5,
          runs: 90,
          wickets: 0,
        },
      },
      {
        id: "21044",
        name: "Parthiv Patel",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/44.png",
        stats: {
          matches: 4,
          runs: 373,
          wickets: 0,
        },
      },
      {
        id: "2101742",
        name: "Milind Kumar",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/1742.png",
        stats: {
          matches: 0,
          runs: 0,
          wickets: 0,
        },
      },
    ],
  },
  "sunrisers-hyderabad": {
    team: {
      captainId: "210440",
      wicketKeeperId: "210116",
    },
    players: [
      {
        id: "210440",
        name: "Kane Willianson",
        nationality: "",
        image: "https://iplstatic.s3.amazonaws.com/players/210/440.png",
        stats: {
          matches: 9,
          runs: 156,
          wickets: 0,
        },
      },
      {
        id: "21096",
        name: "Yusuf Pathan",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/96.png",
        stats: {
          matches: 10,
          runs: 40,
          wickets: 0,
        },
      },
      {
        id: "2102885",
        name: "Rashid Khan",
        nationality: "",
        image: "https://iplstatic.s3.amazonaws.com/players/210/2885.png",
        stats: {
          matches: 15,
          runs: 34,
          wickets: 17,
        },
      },
      {
        id: "210201",
        name: "Shakib Al Hasan",
        nationality: "",
        image: "https://iplstatic.s3.amazonaws.com/players/210/201.png",
        stats: {
          matches: 3,
          runs: 9,
          wickets: 2,
        },
      },
      {
        id: "210431",
        name: "Martin Guptill",
        nationality: "",
        image: "https://iplstatic.s3.amazonaws.com/players/210/431.png",
        stats: {
          matches: 3,
          runs: 81,
          wickets: 0,
        },
      },
      {
        id: "21016",
        name: "Wriddhiman Saha",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/16.png",
        stats: {
          matches: 5,
          runs: 86,
          wickets: 0,
        },
      },
      {
        id: "2102694",
        name: "Khaleel Ahmed",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/2694.png",
        stats: {
          matches: 9,
          runs: 0,
          wickets: 19,
        },
      },
      {
        id: "210116",
        name: "Bhuvneshwar Kumar",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/116.png",
        stats: {
          matches: 15,
          runs: 12,
          wickets: 13,
        },
      },
      {
        id: "210123",
        name: "Manish Pandey",
        nationality: "Indian",
        image: "https://iplstatic.s3.amazonaws.com/players/210/123.png",
        stats: {
          matches: 12,
          runs: 344,
          wickets: 0,
        },
      },
      {
        id: "210170",
        name: "David Warner",
        nationality: "",
        image: "https://iplstatic.s3.amazonaws.com/players/210/170.png",
        stats: {
          matches: 12,
          runs: 692,
          wickets: 0,
        },
      },
    ],
  },
};
function getTeamName(id: string) {
  return teamData[id];
}

export { teams, getTeamName };
