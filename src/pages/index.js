import { React, useState } from "react";
import Lottie from "react-lottie";

import animationData from "../animates/heart.json";
import animationData2 from "../animates/lamp.json";

import styled from "styled-components";
import styles from "../styles/home.module.scss";

const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ButtonWrapperLamp = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export async function getStaticProps(ctx) {
  var whois = "LuciLua";

  const repositorios = await fetch(
    `https://api.github.com/users/${whois}/repos`,
    {
      method: "GET",
      headers: {
        Authorization: `${process.env.API_KEY}`,
      },
    }
  )
    .then((resp) => {
      if (resp.ok) return resp.json();
      throw new Error("Deu ruim!");
    })
    .then((resp) => resp);

  // const repositorios = [
  //   {id: '1', homepage: '/', name: 'Ola'},
  //   {id: '2', homepage: '/', name: 'Luci'}
  // ]

  return {
    props: { repositorios, whois },
  };
}

const Home = (props) => {
  const { repositorios, whois } = props;

  const [isLiked, setLikeState] = useState(false);
  const [animationState, setAnimationState] = useState({
    isStopped: true,
    isPaused: false,
    direction: -1,
  });

  const [isLamped, setLampState] = useState(false);
  const [animationStateLamp, setAnimationStateLamp] = useState({
    isStopped: true,
    isPaused: false,
    direction: -1,
  });

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptionsLamp = {
    loop: false,
    autoplay: false,
    animationData: animationData2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      {/* <div className={styles.line}></div> */}
      <div className={styles.repositories}>
        <div className={styles.headRepos}>
          <h1>Repositories</h1>
          <ButtonWrapper
            className={styles.btnLike}
            id={styles.btn}
            onClick={() => {
              document.querySelector("#btn");
              const reverseAnimation = -1;
              const normalAnimation = 1;

              setAnimationState({
                ...animationState,
                isStopped: false,
                direction:
                  animationState.direction === normalAnimation
                    ? reverseAnimation
                    : normalAnimation,
              });
              setLikeState(!isLiked);
            }}
          >
            <div className="animation">
              <Lottie
                options={defaultOptions}
                width={80}
                height={80}
                direction={animationState.direction}
                isStopped={animationState.isStopped}
                isPaused={animationState.isPaused}
              />
            </div>
          </ButtonWrapper>

          <ButtonWrapperLamp
            className={styles.btnLike}
            onClick={() => {
              const reverseAnimation = -1;
              const normalAnimation = 1;

              setAnimationStateLamp({
                ...animationStateLamp,
                isStopped: false,
                direction:
                  animationStateLamp.direction === normalAnimation
                    ? reverseAnimation
                    : normalAnimation,
              });

              setLampState(!isLamped);
            }}
          >
            <div className="animationLamp">
              <Lottie
                options={defaultOptionsLamp}
                width={80}
                height={80}
                direction={animationStateLamp.direction}
                isStopped={animationStateLamp.isStopped}
                isPaused={animationStateLamp.isPaused}
              />
            </div>
          </ButtonWrapperLamp>
        </div>
        <ul className={styles.ul}>
          {repositorios.map((repo) => (
            <li className={styles.li} key={repo.id}>
              <a href={`${repo.homepage}`}>{repo.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
