import Navbar from "../../../components/navigation/Navbar";
import classes from "./projects.module.css";
import Card from "../../../components/card/card";
import Link from "next/link";

const contact = () => {
  return (
    <div>
      <Navbar />
      <div className={classes.main}>
        <Card className={classes.projectCard}>
          <h1>Project 1</h1>
          <div className={classes.projectCardComponents}>
            <p>
              <span className={classes.projectOverview}>Project Overview:</span>{" "}
              A brief overview of the project, highlighting its purpose and
              target audience.
            </p>

            <p>
              <span className={classes.projectOverview}>Project Features:</span>{" "}
              List of key features that the project will have, such as a
              homepage, contact form, and about page.
            </p>

            <p>
              <span className={classes.projectOverview}>
                Technologies Used:
              </span>{" "}
              List of programming languages, frameworks, and tools that will be
              used to build the project.
            </p>

            <p>
              <span className={classes.projectOverview}>Timeline:</span> An
              estimated timeline for the project, including key milestones and
              deadlines.
            </p>

            <p>
              <span className={classes.projectOverview}>Link:</span>
              <Link href='/'>Project Link Here</Link>
            </p>
          </div>
        </Card>
        <Card className={classes.projectCard}>
          <h1>Project 2</h1>
          <div className={classes.projectCardComponents}>
            <p>
              <span className={classes.projectOverview}>Project Overview:</span>{" "}
              A brief overview of the project, highlighting its purpose and
              target audience.
            </p>

            <p>
              <span className={classes.projectOverview}>Project Features:</span>{" "}
              List of key features that the project will have, such as a
              homepage, contact form, and about page.
            </p>

            <p>
              <span className={classes.projectOverview}>
                Technologies Used:
              </span>{" "}
              List of programming languages, frameworks, and tools that will be
              used to build the project.
            </p>

            <p>
              <span className={classes.projectOverview}>Timeline:</span> An
              estimated timeline for the project, including key milestones and
              deadlines.
            </p>
          </div>
        </Card>
        <Card className={classes.projectCard}>
          <h1>Project 3</h1>
          <div className={classes.projectCardComponents}>
            <p>
              <span className={classes.projectOverview}>Project Overview:</span>{" "}
              A brief overview of the project, highlighting its purpose and
              target audience.
            </p>

            <p>
              <span className={classes.projectOverview}>Project Features:</span>{" "}
              List of key features that the project will have, such as a
              homepage, contact form, and about page.
            </p>

            <p>
              <span className={classes.projectOverview}>
                Technologies Used:
              </span>{" "}
              List of programming languages, frameworks, and tools that will be
              used to build the project.
            </p>

            <p>
              <span className={classes.projectOverview}>Timeline:</span> An
              estimated timeline for the project, including key milestones and
              deadlines.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default contact;
