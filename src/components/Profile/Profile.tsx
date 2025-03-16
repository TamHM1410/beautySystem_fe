import React from 'react';
import { Avatar, Card, Group, Loader, Text, Title } from '@mantine/core';
import { useAuth } from '@/context/AuthContext';
import styles from './Profile.module.css';

const Profile: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return <Loader />;
  }

  const defaultAvatarUrl =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwDiPTqznpjdY1HYH5SNlkGYa2QUCRlivosQ&s'; // Default avatar URL

  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}
    >
      <Card
        className={styles.profileCard}
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
        style={{ width: 400, height: 300 }}
      >
        <div className={styles.profileHeader}>
          <Avatar
            size={100}
            radius="xl"
            src={user.avatarUrl || defaultAvatarUrl}
            alt={user.username}
            className={styles.profileAvatar}
          />
        </div>
        <div className={styles.profileDetails}>
          <Title order={2} align="center" mb="lg">
            Name: {user.fullName}
          </Title>
          <Text align="center" color="dimmed">
            Username: {user.username}
          </Text>
          <Text align="center" color="dimmed">
            Email: {user.email}
          </Text>
        </div>
      </Card>
    </div>
  );
};

export default Profile;
