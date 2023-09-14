import { useState, useEffect } from 'react'
import '../../App.css'
import axios from 'axios';
import Navigation from './Navigation';
import styled from "styled-components";
import { Center } from "../styles/styles";
import { useDispatch } from 'react-redux';

const Joke = styled.p`
  max-width: 80%;
  border: 2px solid black;
  padding: 10px;
`;

export default function Home() {

  const [joke, setJoke] = useState({joke: "Loading..."});

  const dispatch = useDispatch();

  const newJoke = async () => {
    const { data } = await axios.get("https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,explicit&type=single")
    .catch(err => console.log("Problem getting joke"));
    setJoke(data);
  };

  const getUser = async () => {
    const { data } = await axios.get("/api/user")
    .catch(err => console.log({err, message: "Please login!"}));
    dispatch({type: "LOGIN", payload: data});
  };

  useEffect(() => {
    newJoke();
    getUser();
  }, []);

  return (
    <Center>
      <Navigation />
      <h1>Aloha!</h1>
      <Joke>
        {joke.joke}
      </Joke>
      <button onClick={newJoke}>Get new joke</button>
    </Center>
  )
}