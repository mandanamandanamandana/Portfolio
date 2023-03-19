import classes from "./Bio.module.css";

const bio = () => {
  return (
    <div className={classes.main}>
      <div className={classes.bioContainer}>
        <h1>My Bio</h1>
        <div className={classes.bioText}>
          <p>
            <span className={classes.bioContainerIndent}>Hi, {`&apos`} I'm Mandana,</span>{" "}
            a passionate full-stack software developer who has recently
            graduated from a highly respected programming bootcamp at General
            Assembly. While I may not have industry experience yet, I'm eager to
            apply my skills and knowledge to real-world projects and make a
            difference for businesses of all sizes. 
          </p>
            <p>

            <span className={classes.bioContainerIndent}>Throughout</span> my bootcamp experience, 
            I gained a strong foundation in  both front-end and back-end development, 
            as well as experience with the latest programming languages and technologies. 
            I am committed to staying on the cutting edge of innovation, and I am always 
            looking for new and exciting ways to leverage technology to drive business success.
            </p>

            <p>
            <span className={classes.bioContainerIndent}> Whether </span>
            you need a new website, a custom application, or help with 
            optimizing your existing digital presence, I am ready to tackle any
            challenge and deliver exceptional results. With a focus on quality,
            attention to detail, and a dedication to excellence, I am committed
            to helping you achieve your digital goals and take your business to
            the next level. 
            </p>

            <p>
            <span className={classes.bioContainerIndent}>I'm </span> 
            excited to start my career in the industry and to work with 
            you to create innovative solutions that make a real
            difference. Get in touch today to learn more about how I can help
            you succeed!
            </p>
        </div>
      </div>
    </div>
  );
};

export default bio;
