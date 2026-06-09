import React, { useEffect, useState } from "react";
import MobileLayout from "../../layouts/MobileLayout";
import styles from "./Profile.module.css";
import cameraBadge from "../../assets/cameraBadge.svg";
import { STORAGE_KEYS } from "../../utils/storageKeys";
const Profile = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const savedUser = JSON.parse(
      localStorage.getItem(STORAGE_KEYS.CURRENT_USER),
    );

    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  if (!user) return null;

  return (
    <MobileLayout>
      <div className={styles.container}>
        <div className={styles.header}>Account Settings</div>

        <div className={styles.content}>
          <div className={styles.profileSection}>
            <div className={styles.avatar}>
              <img src="https://i.pravatar.cc/100" alt="profile" />
              <div className={styles.cameraBadge}>
                <img src={cameraBadge} alt="" />
              </div>
            </div>

            <div>
              <h3>{user.fullName}</h3>
              <p>{user.email}</p>
            </div>
          </div>

          <div className={styles.description}>
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat.
          </div>
        </div>
        <div className={styles.footerDivider}></div>
      </div>
    </MobileLayout>
  );
};

export default Profile;
