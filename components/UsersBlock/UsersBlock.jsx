import React from "react";
import Chance from "chance";
import { useEffect } from "react";
import { fetchUsers } from "@component/store/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./UsersBlock.module.scss";

export default function UsersBlock() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (users.isLoading) {
    return <h1>Loading....</h1>;
  }
  const generateRandomName = () => {
    const chance = new Chance();
    return chance.name();
  };
  return (
    <ul style={{ listStyle: "none" }}>
      {users.data?.map((user) => (
        <li key={user.id} className={styles.review__container}>
          <h2 className={styles.review__title}>{user.title}</h2>
          <p className={styles.review__text}>{user.body}</p>
          <p className={styles.review__quote}>{user.body}</p>
          <div className={styles.review__review}>
            <p className={styles.review__author}>{generateRandomName()}</p>
            <p className={styles.review__data}>
              {new Date(
                Math.floor(Math.random() * 1000000000000)
              ).toLocaleDateString()}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
