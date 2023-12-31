import React from "react";
import classes from "./RightSide.module.css";
import Button from "../../UI/Button/Button";
import { useRouter } from "next/navigation";
import logo from "../../../public/images/logo.jpg";
import Image from "next/image";


const RightSide = () => {
  const router = useRouter();

  const navigateHandler = () => {
    router.push("/about");
  };
  return (
    <li className={classes.rightside} id="right__side">
      <figure className={classes.left}>
        <Image
          src={logo}
          alt="Header Image"
          width={700}
          height={700}
        />
      </figure>
      <div className={classes.right}>
        <h2 className={classes.h2}>Who we are</h2>
        <p className={classes.p}>
          We are a small team of highly dedicated and ambitious people. We are
          curious, funny radically honest yet kind, and we thrive on
          collaboration and transparency.
        </p>
        <Button
          type="button"
          className={classes.button}
          onClick={navigateHandler}
        >
          See more about us
        </Button>
      </div>
    </li>
  );
};
export default RightSide;
