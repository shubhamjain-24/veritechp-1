// Home.jsx
import React from "react";
import Bookmark from "../../Components/Bookmark/Bookmark";
import "./Home.css";
import CardContainer from "../../Components/Cards/CardContainer";
import Bookmark2 from "../../Components/Bookmark/Bookmarkwithdata/Bookmark2";

const Home = () => {
  const Founder = [
    {
      name: "[Founder Name]",
      title: "Founder / CEO",
      image:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    },
    {
      name: "[Founder Name]",
      title: "Founder / CEO",
      image:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    },
  ];
  const CoFounder = [
    {
      name: "[VP Name]",
      title: "VP, Development & Growth",
      image:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    },
    {
      name: "[VP Name]",
      title: "VP, Sales & Marketing",
      image:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    },
    {
      name: "[VP Name]",
      title: "VP, Finance & Operation",
      image:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    },
  ];
  const developmentTeam1 = [
    {
      name: "[Developer Name]",
      title: "Team Lead SE",
      image:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    },
    {
      name: "[Developer Name]",
      title: "Software Engineer",
      image:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    },
    {
      name: "[Developer Name]",
      title: "Software Engineer",
      image:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    },
    {
      name: "[Developer Name]",
      title: "Software Engineer",
      image:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    },
  ];
  const developmentTeam2 = [
    
    {
      name: "[Developer Name]",
      title: "Software Engineer",
      image:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    },
    {
      name: "[Developer Name]",
      title: "Software Engineer",
      image:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    },
    {
      name: "[Developer Name]",
      title: "Software Engineer",
      image:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    },
  ];
  const salesTeam1 = [
    {
      name: "[Employee Name]",
      title: "Team Lead",
      image:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    },
    {
      name: "[Employee Name]",
      title: "Sales Officer",
      image:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    },
    {
      name: "[Employee Name]",
      title: "Sales Officer",
      image:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    },
    {
      name: "[Employee Name]",
      title: "Sales Officer",
      image:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    },
  ];
  const salesTeam2 = [
    
    {
      name: "[Founder Name]",
      title: "Marketing Officer",
      image:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    },
    {
      name: "[Founder Name]",
      title: "Marketing Officer",
      image:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    },
    {
      name: "[Founder Name]",
      title: "Marketing Officer",
      image:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    },
  ];

  return (
    <>
      <Bookmark active={true} />
        
      <div className="headDiv">
        <p className="name">Company Name</p>
        <p className="desc">
          Welcome to [your company Name], where a dedicated team of professional
          works together to bring innovation, creativity and experties to
          software industry. get to know the individuals who make our company
          thrieve.{" "}
        </p>
        <hr />
        <h2>Meet Our Team</h2>
        <p className="name2">Leadership / Management Team</p>
        <CardContainer details={Founder} />
        <CardContainer details={CoFounder} />
      </div>

     <Bookmark2 title = {"Development Team"} active={true}/>
     <div className="developmentTeam">
     <CardContainer details={developmentTeam1} />
     <CardContainer details={developmentTeam2} />
     </div>
     <Bookmark2 title = {"Sales and Marketing Team"} active={false}/>
     <div className="developmentTeam">
     <CardContainer details={salesTeam1} />
     <CardContainer details={salesTeam2} />
     </div>
     <Bookmark active={false} />
    </>
  );
};

export default Home;
