import projectCard from "../components/projectCard";

const portfolio = [
    {
        name: "Weather Watch",
        description: "An application that implements a weather API",
        url: "https://github.com/Kurt1717/weatherWatch"
    },
    {
        name: "Vehilce Builder",
        description: "A command line app that allows you to build different make and models of vehicles using SQL database",
        url: "https://github.com/Kurt1717/vehicleBuilder"
    },
    {
        name: "Employee Tracker",
        description: "A command line applcation that allows you to add, delete, and update employee inoformation, ideal for maanaging a company",
        url: "https://github.com/Kurt1717/employeeTracker"
    }
];

const Portfolio = () => {
    return <>
    <h1 className="text-4xl text-left font-bold mb-2"> Recent Projects </h1>
    <ul className="bg-white text-left rounded-xl p-4">
      {portfolio.map((portfolio, i) => (
        <li key={i}>
          <ProjectCard
            name={portfolio.name}
            description={portfolio.description}
            url={portfolio.url}
          />
        </li>
      ))}
    </ul>
    </>;
  };
  export default Portfolio;