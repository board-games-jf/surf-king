import React from 'react'
import { StarOutlined, TrophyOutlined, UserOutlined, ThunderboltOutlined } from '@ant-design/icons'

export const Events = (size = 32): React.ReactNode => <StarOutlined style={{ fontSize: size }} />
export const Battle = (size = 32): React.ReactNode => <ThunderboltOutlined style={{ fontSize: size }} />
export const Ranking = (size = 32): React.ReactNode => <TrophyOutlined style={{ fontSize: size }} />
export const Profile = (size = 32): React.ReactNode => <UserOutlined style={{ fontSize: size }} />
