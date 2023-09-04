import React from "react";
import avatar from "/avatar.jpg";
import H2 from "../../layout/H2";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-20"
    >
      <div className="text-center pb-10 mt-32 ">
        <h1 className=" uppercase font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500 dark:from-cyan-300 dark:to-teal-400 md:text-8xl">
          David Märkisch
        </h1>
        <H2>Developer</H2>
        <p className="text-md pt-5 leading-8 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          eligendi et animi, repudiandae quod, fugit temporibus natus
          praesentium excepturi est aperiam? Quia necessitatibus deleniti ad
          nulla aperiam omnis labore. Nam ipsa tempore facere consectetur ipsam
          nostrum omnis ea asperiores corrupti!
        </p>
        <p className="text-md pt-5 leading-8 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ratione
          non perferendis adipisci inventore natus sit dignissimos veritatis!
          Fuga perferendis libero nisi, labore iusto, dolorem adipisci
          reprehenderit corrupti maxime dolores ipsum neque asperiores excepturi
          quidem sapiente. Minus ullam odio magnam inventore est accusantium
          quibusdam ratione optio! Consequuntur doloribus sunt sapiente, nobis
          mollitia at quisquam amet porro, eum inventore ratione repellendus.
        </p>
      </div>

      <img
        src={avatar}
        alt="devdave"
        className=" border-cyan-500 dark:border-cyan-300 border-2 h-52  rounded-full mx-auto lg:h-80"
        title="avatar-placeholder"
      />
    </section>
  );
};

export default Home;
